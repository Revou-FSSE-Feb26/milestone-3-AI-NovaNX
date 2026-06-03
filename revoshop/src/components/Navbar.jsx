"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LogIn,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  Tag,
  User,
} from "lucide-react";

import revoshopLogo from "@/assets/RevoshopLogo1.webp";

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
import { CART_UPDATED_EVENT, getCartItemCount } from "@/lib/cart";
import {
  clearAuthSession,
  getAuthSessionServerSnapshot,
  getAuthSessionSnapshot,
  subscribeToAuthSession,
} from "@/lib/auth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/promotion", label: "Promotion" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/admin", label: "Admin" },
];

function subscribeToCartItemCount(callback) {
  window.addEventListener(CART_UPDATED_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CART_UPDATED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getCartItemCountSnapshot() {
  return getCartItemCount();
}

function getCartItemCountServerSnapshot() {
  return 0;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const cartItemCount = useSyncExternalStore(
    subscribeToCartItemCount,
    getCartItemCountSnapshot,
    getCartItemCountServerSnapshot,
  );
  const authSessionSnapshot = useSyncExternalStore(
    subscribeToAuthSession,
    getAuthSessionSnapshot,
    getAuthSessionServerSnapshot,
  );
  const authSession = useMemo(
    () => JSON.parse(authSessionSnapshot),
    [authSessionSnapshot],
  );
  const isLoginPage = pathname === "/login";
  const isUserRole = authSession?.role === "user";

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

  const handleLogout = () => {
    clearAuthSession();
    router.push("/login");
  };

  if (isLoginPage) {
    return (
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center font-bold">
            <Image
              src={revoshopLogo}
              alt="RevoShop"
              priority
              className="h-30 w-auto rounded-md object-contain"
            />
            <span className="sr-only">RevoShop</span>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center font-bold">
          <Image
            src={revoshopLogo}
            alt="RevoShop"
            priority
            className="h-30 w-auto rounded-md object-contain"
          />
          <span className="sr-only">RevoShop</span>
        </Link>

        <div className="ml-4 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isAdminLink = link.href === "/admin";
            const isRestrictedAdminLink = isAdminLink && isUserRole;

            return (
              <Button
                key={link.href}
                asChild
                variant={isActive(link.href) ? "secondary" : "ghost"}
                size="sm"
                className={
                  isRestrictedAdminLink
                    ? "text-muted-foreground hover:text-muted-foreground"
                    : undefined
                }
              >
                <Link
                  href={link.href}
                  title={
                    isRestrictedAdminLink
                      ? "Halaman ini hanya diakses oleh Admin."
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </div>

          {/* form search untuk desktop. */}
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
              variant="secondary"
              className="absolute right-1 top-1/2 h-7 -translate-y-1/2 border border-input shadow-sm hover:bg-secondary/80"
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

          <Button
            asChild
            variant="outline"
            size="sm"
            className="relative gap-1.5"
          >
            <Link href="/cart">
              <ShoppingCart aria-hidden="true" className="size-4" />
              Cart
              {cartItemCount > 0 && (
                <Badge
                  aria-label={`${cartItemCount} items in cart`}
                  className="pointer-events-none absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-background bg-primary px-1.5 text-[11px] font-semibold leading-none tabular-nums text-primary-foreground shadow-sm"
                >
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </Badge>
              )}
            </Link>
          </Button>

          {authSession ? (
            <>
              <Badge variant="outline" className="gap-1.5 bg-muted/60">
                <User aria-hidden="true" className="size-3.5" />
                {authSession.role}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-1.5"
              >
                <LogOut aria-hidden="true" className="size-4" />
                Logout
              </Button>
            </>
          ) : (
            <Button asChild variant="outline" size="sm" className="gap-1.5">
              <Link href="/login">
                <LogIn aria-hidden="true" className="size-4" />
                Login
              </Link>
            </Button>
          )}
        </div>

        {/* Drawer untuk Mobile menu */}
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
                <Image
                  src={revoshopLogo}
                  alt="RevoShop"
                  className="h-9 w-auto rounded-md object-contain"
                />
                <span className="sr-only">RevoShop</span>
              </SheetTitle>
              <SheetDescription>
                Browse products, promotions, and shopping support.
              </SheetDescription>
            </SheetHeader>

            <div className="px-4">
              {/* The search form is duplicated here for mobile menu. */}
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
                  variant="secondary"
                  className="absolute right-1 top-1/2 h-7 -translate-y-1/2 border border-input shadow-sm hover:bg-secondary/80"
                >
                  Go
                </Button>
              </form>

              <Separator className="my-4" />

              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const isAdminLink = link.href === "/admin";
                  const isRestrictedAdminLink = isAdminLink && isUserRole;

                  return (
                    <SheetClose key={link.href} asChild>
                      <Button
                        asChild
                        variant={isActive(link.href) ? "secondary" : "ghost"}
                        className={`justify-start ${
                          isRestrictedAdminLink
                            ? "text-muted-foreground hover:text-muted-foreground"
                            : ""
                        }`}
                      >
                        <Link
                          href={link.href}
                          title={
                            isRestrictedAdminLink
                              ? "Halaman ini hanya diakses oleh Admin."
                              : undefined
                          }
                        >
                          {link.label}
                        </Link>
                      </Button>
                    </SheetClose>
                  );
                })}
              </div>

              <Separator className="my-4" />

              <div className="grid gap-2">
                {authSession ? (
                  <>
                    <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 text-sm">
                      <User aria-hidden="true" className="size-4" />
                      <span className="font-medium">{authSession.email}</span>
                      <Badge variant="outline" className="ml-auto bg-background">
                        {authSession.role}
                      </Badge>
                    </div>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        className="justify-start gap-2"
                        onClick={handleLogout}
                      >
                        <LogOut aria-hidden="true" className="size-4" />
                        Logout
                      </Button>
                    </SheetClose>
                  </>
                ) : (
                  <SheetClose asChild>
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start gap-2"
                    >
                      <Link href="/login">
                        <LogIn aria-hidden="true" className="size-4" />
                        Login
                      </Link>
                    </Button>
                  </SheetClose>
                )}

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

                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className="justify-start gap-2"
                  >
                    <Link href="/cart">
                      <ShoppingCart aria-hidden="true" className="size-4" />
                      Cart
                      {cartItemCount > 0 && (
                        <Badge
                          aria-label={`${cartItemCount} items in cart`}
                          className="ml-auto flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-semibold leading-none tabular-nums text-primary-foreground"
                        >
                          {cartItemCount > 99 ? "99+" : cartItemCount}
                        </Badge>
                      )}
                    </Link>
                  </Button>
                </SheetClose>
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
