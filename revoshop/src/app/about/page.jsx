import Link from "next/link";
import {
  BadgeCheck,
  Boxes,
  ChartNoAxesColumnIncreasing,
  Clock3,
  Code2,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
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

const metrics = [
  { label: "Product categories", value: "6+", icon: Boxes },
  { label: "Responsive pages", value: "5", icon: Code2 },
  { label: "Support coverage", value: "92%", icon: HeartHandshake },
];

const values = [
  {
    title: "Fast discovery",
    description:
      "Products, promos, and FAQ content are structured for quick browsing.",
    icon: Rocket,
  },
  {
    title: "Trust-first shopping",
    description:
      "Details, shipping notes, and support flows reduce checkout uncertainty.",
    icon: ShieldCheck,
  },
  {
    title: "Recruiter-ready UI",
    description:
      "Reusable components and polished states show frontend product thinking.",
    icon: Sparkles,
  },
];

const timeline = [
  {
    title: "Project setup",
    description: "Next.js, Bun, TailwindCSS, and shadcn/ui foundation.",
  },
  {
    title: "Catalog experience",
    description: "Product list, detail route, cards, API fetching, and search.",
  },
  {
    title: "Marketplace polish",
    description: "Promotion, FAQ, navigation, and responsive interactions.",
  },
];

const stack = [
  "Next.js",
  "React",
  "Bun",
  "TailwindCSS",
  "shadcn/ui",
  "Platzi API",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Card className="grid gap-0 bg-background shadow-sm lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <CardHeader className="p-6 md:p-10">
              <Badge className="mb-3 w-fit gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                <Store aria-hidden="true" className="size-3.5" />
                About RevoShop
              </Badge>
              <CardTitle className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                A storefront built to feel useful, credible, and easy to
                explore.
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-7 sm:text-lg">
                RevoShop is a modern ecommerce learning project focused on clean
                product browsing, responsive UI, reusable components, and
                practical marketplace interactions.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-6 md:px-10 md:pb-10">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/">Explore Products</Link>
                </Button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">View Project Highlights</Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <SheetHeader>
                      <Badge variant="outline" className="mb-3 w-fit">
                        Portfolio Notes
                      </Badge>
                      <SheetTitle>What this project demonstrates</SheetTitle>
                      <SheetDescription>
                        A compact overview of frontend skills visible in
                        RevoShop.
                      </SheetDescription>
                    </SheetHeader>

                    <div className="px-4">
                      <Separator />
                      <div className="space-y-4 py-4">
                        {timeline.map((item, index) => (
                          <div key={item.title} className="flex gap-3">
                            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-semibold">{item.title}</p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Separator />
                    </div>

                    <SheetFooter>
                      <Button asChild>
                        <Link href="/promotion">See Promotions</Link>
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
            <div className="flex items-center justify-between gap-4">
              <div>
                <Badge variant="outline" className="bg-background">
                  Team profile
                </Badge>
                <p className="mt-4 text-2xl font-bold">Frontend Showcase</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Built as a milestone project with marketplace flows and modern
                  component composition.
                </p>
              </div>
              <Avatar size="lg" className="size-14">
                <AvatarFallback>RS</AvatarFallback>
                <AvatarBadge>
                  <BadgeCheck aria-hidden="true" />
                </AvatarBadge>
              </Avatar>
            </div>

            <Separator className="my-6" />

            <div>
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>UI completion confidence</span>
                <span>88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>

            <div className="mt-6 flex items-center justify-between rounded-lg border bg-background p-4">
              <div>
                <p className="text-sm font-medium">Collaborative build</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Pages, components, and API flows connected.
                </p>
              </div>
              <AvatarGroup>
                <Avatar>
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>API</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+3</AvatarGroupCount>
              </AvatarGroup>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <Card
                key={metric.label}
                size="sm"
                className="bg-background shadow-sm"
              >
                <CardContent className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="bg-background shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Why RevoShop exists</CardTitle>
              <CardDescription>
                A concise product story for visitors and recruiters reviewing
                the project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                RevoShop turns a fake store API into a practical ecommerce
                interface: product cards, detail pages, navigation, promotions,
                and support content.
              </p>
              <p>
                The goal is not just to display data, but to create a storefront
                that feels considered: searchable, responsive, and comfortable
                to use.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="values" className="gap-5">
            <TabsList className="grid h-auto w-full grid-cols-3 gap-1 group-data-horizontal/tabs:h-auto sm:w-fit">
              <TabsTrigger value="values" className="h-9 px-3">
                Values
              </TabsTrigger>
              <TabsTrigger value="stack" className="h-9 px-3">
                Stack
              </TabsTrigger>
              <TabsTrigger value="process" className="h-9 px-3">
                Process
              </TabsTrigger>
            </TabsList>

            <TabsContent value="values">
              <div className="grid gap-4 md:grid-cols-3">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <Card key={value.title} className="bg-background shadow-sm">
                      <CardHeader>
                        <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2 text-primary">
                          <Icon aria-hidden="true" className="size-5" />
                        </div>
                        <CardTitle>{value.title}</CardTitle>
                        <CardDescription>{value.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="stack">
              <Card className="bg-background shadow-sm">
                <CardHeader>
                  <CardTitle>Technology stack</CardTitle>
                  <CardDescription>
                    Tools used to build the storefront and component system.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {stack.map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-muted/60">
                      {tool}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process">
              <Card className="bg-background shadow-sm">
                <CardContent>
                  <Accordion type="single" collapsible>
                    {timeline.map((item) => (
                      <AccordionItem key={item.title} value={item.title}>
                        <AccordionTrigger className="text-base">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="leading-6 text-muted-foreground">
                          {item.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Card className="mt-10 bg-background shadow-sm">
          <CardHeader>
            <Badge variant="outline" className="mb-2 w-fit bg-muted/60">
              <ChartNoAxesColumnIncreasing
                aria-hidden="true"
                className="size-3.5"
              />
              Project momentum
            </Badge>
            <CardTitle>
              Designed for browsing, learning, and reviewing.
            </CardTitle>
            <CardDescription>
              Continue exploring the catalog, promotions, or FAQ pages to see
              the UI patterns working across routes.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex-col gap-3 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 aria-hidden="true" className="size-4" />
              Updated as part of the RevoU milestone build.
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild variant="secondary">
                <Link href="/faq">Open FAQ</Link>
              </Button>
              <Button asChild>
                <Link href="/">Shop Catalog</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
