"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BadgePercent,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { isVoucherCategoryEligible } from "@/lib/cart";
import { formatCurrency } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 750;

function calculateProductDiscount(cartItems, voucher) {
  if (!voucher) {
    return 0;
  }

  const eligibleSubtotal = cartItems.reduce((total, item) => {
    const isEligible = voucher.applicableCategories?.some((category) =>
      isVoucherCategoryEligible(item.category, category),
    );
    return isEligible ? total + item.price * item.quantity : total;
  }, 0);

  if (eligibleSubtotal < voucher.minimumSpendValue) {
    return 0;
  }

  return Math.min(
    eligibleSubtotal * (voucher.discountValue / 100),
    voucher.maxDiscount,
  );
}

function calculateSummary(
  cartItems,
  selectedProductVoucher,
  selectedShippingVoucher,
) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 8;
  const productDiscount = calculateProductDiscount(
    cartItems,
    selectedProductVoucher,
  );
  const shippingDiscount =
    selectedShippingVoucher &&
    subtotal >= selectedShippingVoucher.minimumSpendValue
      ? shipping
      : 0;
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return {
    subtotal,
    shipping,
    productDiscount,
    shippingDiscount,
    discount: productDiscount + shippingDiscount,
    total: subtotal + shipping - productDiscount - shippingDiscount,
    itemCount,
  };
}

export default function CheckoutPage() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const {
    cartItems,
    selectedProductVoucher,
    selectedShippingVoucher,
    clearCheckout,
  } = useCart();
  const summary = useMemo(
    () =>
      calculateSummary(
        cartItems,
        selectedProductVoucher,
        selectedShippingVoucher,
      ),
    [
      cartItems,
      selectedProductVoucher,
      selectedShippingVoucher,
    ],
  );

  const completeCheckout = (event) => {
    event.preventDefault();
    clearCheckout();
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl">
          <Card className="bg-background text-center shadow-sm">
            <CardHeader className="items-center p-8">
              <div className="mb-3 flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 aria-hidden="true" className="size-8" />
              </div>
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                Order confirmed
              </Badge>
              <CardTitle className="mt-3 text-3xl font-bold">
                Checkout processed.
              </CardTitle>
              <CardDescription className="max-w-xl text-base leading-7">
                Your order has been created and your cart is now empty.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center gap-3">
              <Button asChild>
                <Link href="/">Back to Catalog</Link>
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

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl">
          <Card className="bg-background text-center shadow-sm">
            <CardHeader className="items-center p-8">
              <div className="mb-3 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShoppingBag aria-hidden="true" className="size-8" />
              </div>
              <Badge variant="outline" className="bg-muted/60">
                Empty checkout
              </Badge>
              <CardTitle className="mt-3 text-3xl font-bold">
                Add products before checkout.
              </CardTitle>
              <CardDescription className="max-w-xl text-base leading-7">
                Your checkout page is ready, but there are no products in your
                cart yet.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center gap-3">
              <Button asChild>
                <Link href="/">Browse Products</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/cart">Back to Cart</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <Button asChild variant="ghost" className="mb-4 -ml-2 gap-2">
          <Link href="/cart">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to cart
          </Link>
        </Button>

        <div className="mb-8">
          <Badge className="mb-3 w-fit bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            Secure Checkout
          </Badge>
          <h1 className="text-3xl font-bold sm:text-4xl">Checkout</h1>
          <p className="mt-2 text-muted-foreground">
            Review your order and complete the checkout flow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <form onSubmit={completeCheckout} className="space-y-6">
            <Card className="bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck aria-hidden="true" className="size-5" />
                  Shipping Details
                </CardTitle>
                <CardDescription>
                  Enter the recipient information for this order.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full name
                  </label>
                  <Input id="fullName" placeholder="Nicolas" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nico@gmail.com"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+62 812 0000"
                    required
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <Input
                    id="address"
                    placeholder="Street, city, postal code"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard aria-hidden="true" className="size-5" />
                  Payment
                </CardTitle>
                <CardDescription>
                  Use the demo checkout flow to place this order.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="cardName" className="text-sm font-medium">
                    Name on card
                  </label>
                  <Input id="cardName" placeholder="Nicolas" required />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="cardNumber" className="text-sm font-medium">
                    Card number
                  </label>
                  <Input
                    id="cardNumber"
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="expiry" className="text-sm font-medium">
                    Expiry
                  </label>
                  <Input id="expiry" placeholder="12/28" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="cvc" className="text-sm font-medium">
                    CVC
                  </label>
                  <Input
                    id="cvc"
                    inputMode="numeric"
                    placeholder="123"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full gap-2 sm:w-auto">
                  <PackageCheck aria-hidden="true" className="size-4" />
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </form>

          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <Card className="bg-background shadow-sm">
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit bg-muted/60">
                  Order Summary
                </Badge>
                <CardTitle>{summary.itemCount} item checkout</CardTitle>
                <CardDescription>
                  Final total after shipping and vouchers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-muted-foreground">
                          {item.quantity} x {formatCurrency(item.price)}
                        </p>
                      </div>
                      <span className="font-medium">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      {formatCurrency(summary.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {summary.shipping === 0
                        ? "Free"
                        : formatCurrency(summary.shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="font-medium text-emerald-700">
                      -{formatCurrency(summary.discount)}
                    </span>
                  </div>
                </div>

                {(selectedProductVoucher || selectedShippingVoucher) && (
                  <div className="space-y-2 rounded-lg border bg-muted/50 p-4 text-sm">
                    {selectedProductVoucher && (
                      <Badge className="gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                        <BadgePercent aria-hidden="true" className="size-3.5" />
                        {selectedProductVoucher.code}
                      </Badge>
                    )}
                    {selectedShippingVoucher && (
                      <Badge className="gap-1.5 bg-orange-100 text-orange-800 hover:bg-orange-100">
                        <Truck aria-hidden="true" className="size-3.5" />
                        {selectedShippingVoucher.code}
                      </Badge>
                    )}
                  </div>
                )}

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-2xl font-bold">
                    {formatCurrency(summary.total)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
