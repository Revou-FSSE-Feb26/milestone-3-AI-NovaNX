"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const CART_STORAGE_KEY = "revoshop-cart";
const FREE_SHIPPING_THRESHOLD = 75;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function getStoredCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getStoredCartItems());
  }, []);

  const cartSummary = useMemo(() => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const shipping =
      subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 8;
    const discount = subtotal >= 120 ? subtotal * 0.1 : 0;
    const total = subtotal + shipping - discount;
    const itemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    const shippingProgress = Math.min(
      (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
      100,
    );

    return { subtotal, shipping, discount, total, itemCount, shippingProgress };
  }, [cartItems]);

  const syncCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item,
    );

    syncCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    syncCart(updatedCart);
  };

  const clearCart = () => {
    syncCart([]);
  };

  const amountToFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - cartSummary.subtotal,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <Card className="bg-background text-center shadow-sm">
            <CardHeader className="items-center p-8">
              <div className="mb-3 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShoppingBag aria-hidden="true" className="size-8" />
              </div>
              <Badge variant="outline" className="bg-muted/60">
                Cart is empty
              </Badge>
              <CardTitle className="mt-3 text-3xl font-bold">
                Your cart is waiting for great picks.
              </CardTitle>
              <CardDescription className="max-w-xl text-base leading-7">
                Add products from the catalog and they will appear here with
                quantity controls, item totals, and checkout summary.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center gap-3">
              <Button asChild>
                <Link href="/">Browse Products</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/promotion">View Promotions</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Button asChild variant="ghost" className="mb-3 -ml-2 gap-2">
              <Link href="/">
                <ArrowLeft aria-hidden="true" className="size-4" />
                Continue shopping
              </Link>
            </Button>
            <Badge className="mb-3 w-fit bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              Smart Cart
            </Badge>
            <h1 className="text-3xl font-bold sm:text-4xl">Shopping Cart</h1>
            <p className="mt-2 text-muted-foreground">
              Review your selected products, adjust quantities, and prepare
              checkout.
            </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Trash2 aria-hidden="true" className="size-4" />
                Clear Cart
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <Trash2 aria-hidden="true" className="size-5" />
                </AlertDialogMedia>
                <AlertDialogTitle>Clear all cart items?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove every product from your cart. You can add
                  them again from the catalog.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive" onClick={clearCart}>
                  Clear Cart
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="bg-background shadow-sm">
                <CardContent className="grid gap-4 p-4 sm:grid-cols-[112px_1fr] sm:p-5">
                  <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center text-muted-foreground">
                        <ShoppingBag aria-hidden="true" className="size-8" />
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                    <div>
                      <Badge variant="outline" className="mb-2 bg-muted/60">
                        {item.category}
                      </Badge>
                      <h2 className="text-lg font-semibold leading-snug">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Unit price: {formatCurrency(item.price)}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 md:items-end">
                      <div className="flex w-fit items-center overflow-hidden rounded-lg border bg-background">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                          className="rounded-none"
                        >
                          <Minus aria-hidden="true" className="size-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="min-w-12 px-3 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="rounded-none"
                        >
                          <Plus aria-hidden="true" className="size-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>

                      <div className="flex items-center justify-between gap-4 md:flex-col md:items-end md:gap-2">
                        <p className="text-xl font-bold">
                          {formatCurrency(item.price * item.quantity)}
                        </p>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              className="gap-2 text-destructive hover:text-destructive"
                            >
                              <Trash2 aria-hidden="true" className="size-4" />
                              Remove
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogMedia>
                                <Trash2 aria-hidden="true" className="size-5" />
                              </AlertDialogMedia>
                              <AlertDialogTitle>
                                Remove this item?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                {item.title} will be removed from your cart.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                variant="destructive"
                                onClick={() => removeItem(item.id)}
                              >
                                Remove
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <Card className="bg-background shadow-sm">
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit bg-muted/60">
                  Checkout Summary
                </Badge>
                <CardTitle className="text-2xl">Order total</CardTitle>
                <CardDescription>
                  {cartSummary.itemCount} item
                  {cartSummary.itemCount > 1 ? "s" : ""} ready for checkout.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      {formatCurrency(cartSummary.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {cartSummary.shipping === 0
                        ? "Free"
                        : formatCurrency(cartSummary.shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Promo discount
                    </span>
                    <span className="font-medium text-emerald-700">
                      -{formatCurrency(cartSummary.discount)}
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-2xl font-bold">
                    {formatCurrency(cartSummary.total)}
                  </span>
                </div>

                <div className="rounded-lg border bg-muted/50 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Free shipping progress</span>
                    <span>{Math.round(cartSummary.shippingProgress)}%</span>
                  </div>
                  <Progress
                    value={cartSummary.shippingProgress}
                    className="h-2"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    {amountToFreeShipping === 0
                      ? "You unlocked free shipping."
                      : `Add ${formatCurrency(amountToFreeShipping)} more to unlock free shipping.`}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-3">
                <Button className="w-full gap-2">
                  <PackageCheck aria-hidden="true" className="size-4" />
                  Checkout Now
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/promotion">Apply Promo Voucher</Link>
                </Button>
              </CardFooter>
            </Card>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <Card size="sm" className="bg-background shadow-sm">
                <CardContent className="flex items-center gap-3">
                  <Truck
                    aria-hidden="true"
                    className="size-5 text-emerald-600"
                  />
                  <p className="text-sm font-medium">Fast delivery options</p>
                </CardContent>
              </Card>
              <Card size="sm" className="bg-background shadow-sm">
                <CardContent className="flex items-center gap-3">
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-5 text-sky-600"
                  />
                  <p className="text-sm font-medium">Secure checkout flow</p>
                </CardContent>
              </Card>
              <Card size="sm" className="bg-background shadow-sm">
                <CardContent className="flex items-center gap-3">
                  <ShoppingBag
                    aria-hidden="true"
                    className="size-5 text-amber-600"
                  />
                  <p className="text-sm font-medium">Cart saved locally</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
