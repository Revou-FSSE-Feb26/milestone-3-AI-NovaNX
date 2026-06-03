"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BadgeHelp,
  CreditCard,
  Headphones,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqCategories = [
  { value: "all", label: "All" },
  { value: "orders", label: "Orders" },
  { value: "shipping", label: "Shipping" },
  { value: "payment", label: "Payment" },
  { value: "returns", label: "Returns" },
];

const faqs = [
  {
    category: "orders",
    question: "How do I check my order status?",
    answer:
      "Open your order confirmation email or visit your account dashboard. You can track whether your order is being prepared, shipped, or delivered.",
  },
  {
    category: "orders",
    question: "Can I change a product after checkout?",
    answer:
      "Changes are available only before the order is processed. If the order has moved to shipping, you can request a return after delivery.",
  },
  {
    category: "shipping",
    question: "When do I get free shipping?",
    answer:
      "Free shipping is available for eligible orders above $75. Some promotion vouchers may also unlock shipping benefits during campaign periods.",
  },
  {
    category: "shipping",
    question: "How long does delivery take?",
    answer:
      "Standard delivery usually takes 2 to 5 business days depending on stock availability and destination coverage.",
  },
  {
    category: "payment",
    question: "What payment methods are supported?",
    answer:
      "RevoShop supports card payment, checkout vouchers, and selected digital wallet flows depending on your region.",
  },
  {
    category: "payment",
    question: "Why was my voucher not applied?",
    answer:
      "A voucher may require minimum spend, selected categories, or active campaign quota. Check the voucher detail before checkout.",
  },
  {
    category: "returns",
    question: "How do I return a product?",
    answer:
      "Submit a return request within the return window, keep the product in good condition, and attach order proof when requested.",
  },
  {
    category: "returns",
    question: "How long does refund processing take?",
    answer:
      "Refunds are reviewed after the returned item is received. Processing time commonly takes 3 to 7 business days.",
  },
];

const supportCards = [
  {
    title: "Order Help",
    description: "Track, cancel, or update your checkout flow.",
    icon: ShoppingCart,
  },
  {
    title: "Delivery Support",
    description: "Check shipping coverage and delivery status.",
    icon: Truck,
  },
  {
    title: "Secure Payment",
    description: "Learn about vouchers, refunds, and payment safety.",
    icon: CreditCard,
  },
];

function FAQList({ items }) {
  if (items.length === 0) {
    return (
      <Card className="bg-background text-center shadow-sm">
        <CardContent className="py-10">
          <BadgeHelp
            aria-hidden="true"
            className="mx-auto size-10 text-muted-foreground"
          />
          <p className="mt-4 text-lg font-semibold">No FAQ found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another keyword or browse a different category.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-background shadow-sm">
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {items.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default function FAQPage() {
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) {
      return faqs;
    }

    return faqs.filter((faq) =>
      [faq.question, faq.answer, faq.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const getFaqsByCategory = (category) => {
    if (category === "all") {
      return filteredFaqs;
    }

    return filteredFaqs.filter((faq) => faq.category === category);
  };

  return (
    // Tampilkan halaman static: /faq.
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Card className="grid gap-0 bg-background shadow-sm lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <CardHeader className="p-6 md:p-10">
              <Badge className="mb-3 w-fit gap-1.5 bg-sky-100 text-sky-800 hover:bg-sky-100">
                <Headphones aria-hidden="true" className="size-3.5" />
                Help Center
              </Badge>
              <CardTitle className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Find answers before checkout.
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-7 sm:text-lg">
                Browse RevoShop questions about orders, shipping, payment,
                vouchers, and returns in one polished support page.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-6 md:px-10 md:pb-10">
              <div className="relative max-w-xl">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search FAQ by keyword"
                  className="h-11 pl-9"
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/">Continue Shopping</Link>
                </Button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Contact Support</Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <SheetHeader>
                      <Badge variant="outline" className="mb-3 w-fit">
                        Support Desk
                      </Badge>
                      <SheetTitle>Need more help?</SheetTitle>
                      <SheetDescription>
                        Send your order issue to the RevoShop support flow.
                      </SheetDescription>
                    </SheetHeader>

                    <div className="px-4">
                      <Separator />
                      <div className="space-y-4 py-4">
                        <div>
                          <p className="text-sm font-medium">
                            Expected response
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Most customer questions are reviewed within 24
                            hours.
                          </p>
                        </div>
                        <div>
                          <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                            <span>Support queue capacity</span>
                            <span>68%</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                      </div>
                      <Separator />
                    </div>

                    <SheetFooter>
                      <Button asChild>
                        <Link href="/faq">Open Support Ticket</Link>
                      </Button>
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </CardContent>
          </div>

          <CardContent className="border-t bg-muted/50 p-6 lg:border-l lg:border-t-0 lg:p-8">
            <Badge variant="outline" className="bg-background">
              Support score
            </Badge>
            <div className="mt-5 flex items-end gap-2">
              <p className="text-5xl font-bold">92%</p>
              <p className="pb-2 text-sm text-muted-foreground">resolved</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              FAQ coverage for common buyer questions based on storefront flows.
            </p>
            <div className="mt-6">
              <Progress value={92} className="h-2" />
            </div>

            <Separator className="my-6" />

            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-lg border bg-background p-3">
                <PackageCheck
                  aria-hidden="true"
                  className="size-5 text-emerald-600"
                />
                <span className="text-sm font-medium">
                  Order tracking ready
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-background p-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-5 text-sky-600"
                />
                <span className="text-sm font-medium">
                  Payment guidance included
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {supportCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card
                key={card.title}
                size="sm"
                className="bg-background shadow-sm"
              >
                <CardContent className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </div>
                  <div>
                    <p className="font-semibold">{card.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-10">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Use tabs and search to quickly find the answer you need.
              </p>
            </div>
            <Badge variant="outline" className="w-fit bg-background">
              {filteredFaqs.length} results
            </Badge>
          </div>

          <Tabs defaultValue="all" className="gap-5">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1 group-data-horizontal/tabs:h-auto sm:inline-flex sm:w-fit sm:grid-cols-none">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="h-9 px-3"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <FAQList items={getFaqsByCategory(category.value)} />
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <Card className="mt-10 bg-background shadow-sm">
          <CardHeader>
            <CardTitle>Still exploring RevoShop?</CardTitle>
            <CardDescription>
              Go back to the catalog or review active vouchers before checkout.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex-col gap-3 sm:flex-row sm:justify-between">
            <Button asChild variant="secondary">
              <Link href="/promotion">View Promotions</Link>
            </Button>
            <Button asChild>
              <Link href="/">Browse Products</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
