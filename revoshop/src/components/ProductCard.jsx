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

export default function ProductCard({ product }) {
  // Clean image URL - remove quotes and brackets if present
  let imageUrl = product.images?.[0] || "";
  if (typeof imageUrl === "string") {
    imageUrl = imageUrl.replace(/["\[\]]/g, "").trim();
  }

  const productDetailUrl = `/products/${product.id}`;

  return (
    <Card className="overflow-hidden transition hover:shadow-lg">
      <Link
        href={productDetailUrl}
        aria-label={`View details for ${product.title}`}
        className="group relative block h-56 w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            unoptimized
          />
        )}
      </Link>

      <CardHeader>
        <Badge className="w-fit">{product.category?.name || "Product"}</Badge>

        <CardTitle className="line-clamp-2 text-lg">{product.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-xl font-bold">${product.price}</p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={productDetailUrl}>View Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
