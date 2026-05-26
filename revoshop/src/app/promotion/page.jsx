import Link from "next/link";
import {
  BadgePercent,
  Clock3,
  Gift,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Truck,
  Zap,
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

const promotions = [
  {
    category: "fashion",
    title: "Payday Sale",
    discount: "Up to 45% off",
    code: "PAYDAY45",
    description:
      "Selected fashion, shoes, and daily essentials for a limited time.",
    minimumSpend: "$50",
    endsIn: "18h 24m",
    claimed: 72,
    tone: "border-rose-200 bg-rose-50 text-rose-700",
    terms: [
      "Valid for selected clothes and shoes.",
      "Can be combined with free shipping voucher.",
      "One use per customer during the campaign.",
    ],
  },
  {
    category: "tech",
    title: "Tech Deals",
    discount: "Save 30%",
    code: "TECH30",
    description:
      "Upgrade your electronics setup with special prices this week.",
    minimumSpend: "$120",
    endsIn: "2d 06h",
    claimed: 58,
    tone: "border-sky-200 bg-sky-50 text-sky-700",
    terms: [
      "Available for electronics category only.",
      "Discount applies before shipping cost.",
      "Limited quota refreshed every morning.",
    ],
  },
  {
    category: "home",
    title: "Home Refresh",
    discount: "Buy 2 Save 20%",
    code: "HOME20",
    description:
      "Refresh your space with furniture and home picks from RevoShop.",
    minimumSpend: "$80",
    endsIn: "3d 12h",
    claimed: 41,
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    terms: [
      "Applies to furniture and home products.",
      "Minimum two eligible products required.",
      "Voucher cannot be exchanged for cash.",
    ],
  },
  {
    category: "shipping",
    title: "Shipping Boost",
    discount: "Free shipping",
    code: "SHIPFREE",
    description: "Unlock delivery savings for checkout totals above $75.",
    minimumSpend: "$75",
    endsIn: "1d 09h",
    claimed: 86,
    tone: "border-orange-200 bg-orange-50 text-orange-700",
    terms: [
      "Valid for standard delivery only.",
      "Automatically applied after voucher claim.",
      "Coverage depends on delivery area availability.",
    ],
  },
];

const promotionTabs = [
  { label: "All", value: "all" },
  { label: "Fashion", value: "fashion" },
  { label: "Tech", value: "tech" },
  { label: "Home", value: "home" },
  { label: "Shipping", value: "shipping" },
];

const benefits = [
  {
    title: "Free Shipping",
    description: "Available for orders over $75.",
    icon: Truck,
  },
  {
    title: "First Checkout Bonus",
    description: "Extra voucher for new buyers.",
    icon: Gift,
  },
  {
    title: "Weekly Bundles",
    description: "Limited bundles refreshed every week.",
    icon: ShoppingBag,
  },
];

function PromotionGrid({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((promotion) => (
        <PromotionCard key={promotion.code} promotion={promotion} />
      ))}
    </div>
  );
}

function PromotionCard({ promotion }) {
  return (
    <Card className="bg-background shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="flex-row items-start justify-between gap-4 space-y-0">
        <div>
          <CardTitle className="text-lg font-semibold">
            {promotion.title}
          </CardTitle>
          <CardDescription className="mt-2 text-2xl font-bold text-foreground">
            {promotion.discount}
          </CardDescription>
        </div>
        <Badge variant="outline" className={`shrink-0 ${promotion.tone}`}>
          Promo
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="min-h-12 text-sm leading-6 text-muted-foreground">
          {promotion.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-muted/70 p-3">
            <p className="text-xs text-muted-foreground">Minimum spend</p>
            <p className="mt-1 font-semibold">{promotion.minimumSpend}</p>
          </div>
          <div className="rounded-lg bg-muted/70 p-3">
            <p className="text-xs text-muted-foreground">Ends in</p>
            <p className="mt-1 flex items-center gap-1.5 font-semibold">
              <Clock3 aria-hidden="true" className="size-3.5" />
              {promotion.endsIn}
            </p>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Voucher claimed</span>
            <span>{promotion.claimed}%</span>
          </div>
          <Progress value={promotion.claimed} className="h-2" />
        </div>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Voucher code</p>
          <p className="font-semibold">{promotion.code}</p>
        </div>
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Details</Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <Badge
                  variant="outline"
                  className={`mb-3 w-fit ${promotion.tone}`}
                >
                  {promotion.code}
                </Badge>
                <SheetTitle>{promotion.title}</SheetTitle>
                <SheetDescription>{promotion.description}</SheetDescription>
              </SheetHeader>

              <div className="px-4">
                <Separator />
                <div className="grid grid-cols-2 gap-3 py-4">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs text-muted-foreground">Discount</p>
                    <p className="mt-1 font-semibold">{promotion.discount}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs text-muted-foreground">
                      Minimum spend
                    </p>
                    <p className="mt-1 font-semibold">
                      {promotion.minimumSpend}
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="py-4">
                  <p className="font-semibold">Terms and conditions</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {promotion.terms.map((term) => (
                      <li key={term} className="flex gap-2">
                        <ShieldCheck
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-emerald-600"
                        />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <SheetFooter>
                <Button asChild>
                  <Link href="/">Shop Eligible Products</Link>
                </Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Button asChild variant="secondary">
            <Link href="/">
              <Ticket aria-hidden="true" className="size-4" />
              Claim
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function PromotionPage() {
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Card className="grid gap-0 border-border/80 bg-background shadow-sm md:grid-cols-[1.35fr_0.65fr]">
          <div className="flex flex-col justify-center">
            <CardHeader className="p-6 md:p-10">
              <Badge className="mb-3 w-fit gap-1.5 bg-amber-100 text-amber-800 hover:bg-amber-100">
                <BadgePercent aria-hidden="true" className="size-3.5" />
                RevoShop Promotions
              </Badge>
              <CardTitle className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Marketplace deals for smarter checkout.
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-7 sm:text-lg">
                Discover active vouchers, category discounts, and seasonal
                offers curated for your next purchase.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-6 md:px-10 md:pb-10">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href="/">Shop Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11">
                  <a href="#active-promotions">View Vouchers</a>
                </Button>
              </div>
            </CardContent>
          </div>

          <CardContent className="border-t bg-muted/50 p-6 md:border-l md:border-t-0 md:p-8">
            <Badge variant="outline" className="bg-background">
              Featured Deal
            </Badge>
            <p className="mt-5 flex items-center gap-2 text-5xl font-bold text-foreground">
              <Zap aria-hidden="true" className="size-8 text-amber-500" />
              45%
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              discount for selected collections
            </p>
            <div className="mt-6 rounded-lg border bg-background p-4 shadow-sm">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Use code
              </p>
              <p className="mt-1 text-2xl font-bold text-rose-700">PAYDAY45</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              size="sm"
              className="bg-background shadow-sm"
            >
              <CardContent className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <benefit.icon aria-hidden="true" className="size-4" />
                </div>
                <div>
                  <p className="font-semibold">{benefit.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section id="active-promotions" className="mt-10">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold">Active Promotions</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Filter deals, check quota, and review voucher details.
              </p>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Valid while stocks last
            </p>
          </div>

          <Tabs defaultValue="all" className="gap-5">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:inline-flex sm:w-fit sm:grid-cols-none">
              {promotionTabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="h-9 px-3"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <PromotionGrid items={promotions} />
            </TabsContent>
            {promotionTabs.slice(1).map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <PromotionGrid
                  items={promotions.filter(
                    (promotion) => promotion.category === tab.value,
                  )}
                />
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </section>
    </main>
  );
}
