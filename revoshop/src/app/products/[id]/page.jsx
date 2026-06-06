import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/api";
import { cleanImageUrl } from "@/lib/utils";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetailPage({ params }) {


  const { id } = await params;

  let product = null;

  try {

    product = await getProductById(id);
  } catch (error) {
    return <p className="p-8 text-red-500">{error.message}</p>;
  }


  const imageUrl = cleanImageUrl(product.images?.[0]);
  const productName = product.name || product.title;

  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        {}
        <div className="relative h-105 overflow-hidden rounded-xl border bg-muted">
          {imageUrl &&
          <Image
            src={imageUrl}
            alt={productName}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
            unoptimized />

          }
        </div>

        <div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline">
            
            Back to products
          </Link>

          <p className="mt-6 text-sm text-muted-foreground">
            {product.category?.name}
          </p>

          {}
          <h1 className="mt-2 text-3xl font-bold">{productName}</h1>

          {}
          <p className="mt-4 text-2xl font-bold">${product.price}</p>

          {}
          <p className="mt-6 leading-7 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8">
            {}
            <AddToCartButton product={product} />
          </div>
        </div>
      </section>
    </main>);

}
