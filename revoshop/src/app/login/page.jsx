"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Loader2, LogIn, ShieldCheck } from "lucide-react";

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
import {
  getCurrentUser,
  loginWithCredentials,
  writeAuthSession,
} from "@/lib/auth";

function validateLoginForm(form) {
  if (!form.email.trim()) return "Email is required.";
  if (!form.password) return "Password is required.";
  return "";
}

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function redirectAuthenticatedUser() {
      try {
        const user = await getCurrentUser({ signal: controller.signal });
        if (user) {
          writeAuthSession(user);
          router.replace("/");
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setErrorMessage(error.message);
        }
      }
    }

    redirectAuthenticatedUser();

    return () => controller.abort();
  }, [router]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateLoginForm(form);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const authResult = await loginWithCredentials(
        form.email.trim().toLowerCase(),
        form.password,
      );

      writeAuthSession(authResult);
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

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
          {errorMessage && (
            <Card className="border-destructive/30 bg-destructive/10 shadow-sm">
              <CardContent className="flex items-start gap-3 p-4 text-sm text-destructive">
                <AlertTriangle
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0"
                />

                <span>{errorMessage}</span>
              </CardContent>
            </Card>
          )}

          <Card className="bg-background shadow-sm">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Enter one of the API accounts assigned for your role.
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
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="admin@mail.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </CardContent>

              <CardFooter className="flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button type="submit" className="gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2
                      aria-hidden="true"
                      className="size-4 animate-spin"
                    />
                  ) : (
                    <LogIn aria-hidden="true" className="size-4" />
                  )}
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
