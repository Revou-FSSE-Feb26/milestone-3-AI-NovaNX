"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, ShoppingCart, Store, Tag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/promotion", label: "Promotion" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("search")?.toString().trim();

    if (!query) {
      router.push("/");
      return;
    }

    router.push(`/?search=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Store aria-hidden="true" className="size-5" />
          </span>
          <span className="text-lg tracking-normal">RevoShop</span>
        </Link>

        <div className="ml-4 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant={isActive(link.href) ? "secondary" : "ghost"}
              size="sm"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <form
          onSubmit={handleSearch}
          className="mx-2 hidden max-w-sm flex-1 md:block lg:mx-6"
        >
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              name="search"
              type="search"
              placeholder="Search products, vouchers, categories"
              className="h-9 pl-8 pr-16"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 h-7 -translate-y-1/2"
            >
              Search
            </Button>
          </div>
        </form>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <Link href="/promotion">
              <Tag aria-hidden="true" className="size-4" />
              Deals
            </Link>
          </Button>

          <Button variant="outline" size="sm" className="relative gap-1.5">
            <ShoppingCart aria-hidden="true" className="size-4" />
            Cart
            <Badge className="absolute -right-2 -top-2 h-5 min-w-5 justify-center rounded-full px-1 text-[10px]">
              0
            </Badge>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu aria-hidden="true" className="size-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full max-w-sm">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Store aria-hidden="true" className="size-4" />
                </span>
                RevoShop
              </SheetTitle>
              <SheetDescription>
                Browse products, promotions, and shopping support.
              </SheetDescription>
            </SheetHeader>

            <div className="px-4">
              <form onSubmit={handleSearch} className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  name="search"
                  type="search"
                  placeholder="Search RevoShop"
                  className="h-9 pl-8 pr-16"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 h-7 -translate-y-1/2"
                >
                  Go
                </Button>
              </form>

              <Separator className="my-4" />

              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Button
                      asChild
                      variant={isActive(link.href) ? "secondary" : "ghost"}
                      className="justify-start"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  </SheetClose>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="grid gap-2">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className="justify-start gap-2"
                  >
                    <Link href="/promotion">
                      <Tag aria-hidden="true" className="size-4" />
                      Today Deals
                    </Link>
                  </Button>
                </SheetClose>

                <Button variant="outline" className="justify-start gap-2">
                  <ShoppingCart aria-hidden="true" className="size-4" />
                  Cart
                  <Badge className="ml-auto h-5 min-w-5 justify-center rounded-full px-1 text-[10px]">
                    0
                  </Badge>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <div className="border-t bg-muted/40 px-4 py-2 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-muted-foreground">
          <span>Free shipping over $75</span>
          <Link href="/promotion" className="font-medium text-foreground">
            View promos
          </Link>
        </div>
      </div>
    </header>
  );
}
