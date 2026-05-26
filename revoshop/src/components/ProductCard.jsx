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

  return (
    <Card className="overflow-hidden transition hover:shadow-lg">
      <div className="relative h-56 w-full bg-muted">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      <CardHeader>
        <Badge className="w-fit">{product.category?.name || "Product"}</Badge>

        <CardTitle className="line-clamp-2 text-lg">{product.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-xl font-bold">${product.price}</p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>View Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
