import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cleanImageUrl } from "@/lib/utils";

export default function ProductCard({ product, priority = false }) {
  const productName = product.name || product.title;
  const imageUrl = cleanImageUrl(product.image || product.images?.[0]);
  // Ketika diklik: arahkan ke /products/[id].
  const productDetailUrl = `/products/${product.id}`;

  return (
    <Card className="overflow-hidden transition hover:shadow-lg">
      {/* Tampilkan image. */}
      <Link
        href={productDetailUrl}
        aria-label={`View details for ${productName}`}
        className="group relative block h-56 w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={productName}
            fill
            sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
            priority={priority}
            unoptimized
          />
        )}
      </Link>

      <CardHeader>
        <Badge className="w-fit">{product.category?.name || "Product"}</Badge>

        {/* Tampilkan nama produk. */}
        <CardTitle className="line-clamp-2 text-lg">{productName}</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Tampilkan harga. */}
        <p className="text-xl font-bold">${product.price}</p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          {/* Tampilkan tombol/link "View Detail". */}
          <Link href={productDetailUrl}>View Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
