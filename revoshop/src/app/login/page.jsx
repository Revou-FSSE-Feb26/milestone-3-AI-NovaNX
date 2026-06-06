"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, LogIn, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle } from
"@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginWithCredentials, writeAuthSession } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isRejected, setIsRejected] = useState(false);

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setIsRejected(false);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const account = loginWithCredentials(
      form.email.trim().toLowerCase(),
      form.password
    );

    if (!account) {
      setIsRejected(true);
      return;
    }

    writeAuthSession(account);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="space-y-5">
          <Badge className="w-fit gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            <ShieldCheck aria-hidden="true" className="size-3.5" />
            Private Access
          </Badge>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">
              Login to RevoShop
            </h1>
            <p className="max-w-xl leading-7 text-muted-foreground">
              Use the provided user or admin account to enter the application.
              Admin access is required for product management.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {isRejected &&
          <Card className="border-destructive/30 bg-destructive/10 shadow-sm">
              <CardContent className="flex items-start gap-3 p-4 text-sm text-destructive">
                <AlertTriangle
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0" />
              
                <span>
                  You cannot use this application. Please contact the Admin.
                </span>
              </CardContent>
            </Card>
          }

          <Card className="bg-background shadow-sm">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Enter the email and password assigned for your role.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="user@example.com"
                    autoComplete="email"
                    required />
                  
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={update("password")}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    required />
                  
                </div>
              </CardContent>

              <CardFooter className="flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button type="submit" className="gap-2">
                  <LogIn aria-hidden="true" className="size-4" />
                  Login
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </main>);

}
