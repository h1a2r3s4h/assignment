"use client";

import { useEffect, useState } from "react";

              import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden p-0 border border-gray-300 rounded-md">
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* LEFT FORM SKELETON */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="h-7 w-[160px] bg-gray-300" />
                <div className="h-4 w-[220px] bg-gray-300" />
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="h-4 w-[60px] bg-gray-300 mb-2" />
                  <div className="h-11 w-full bg-gray-300 rounded-md" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-4 w-[80px] bg-gray-300" />
                    <div className="h-3 w-[120px] bg-gray-300" />
                  </div>
                  <div className="h-11 w-full bg-gray-300 rounded-md" />
                </div>

                <div className="h-11 w-full bg-gray-300 rounded-md" />

                <div className="h-4 w-full bg-gray-300" />

                <div className="h-11 w-full bg-gray-300 rounded-md" />

                <div className="h-4 w-[200px] mx-auto bg-gray-300" />
              </div>
            </div>

            {/* RIGHT IMAGE SKELETON */}
            <div className="relative hidden md:block bg-gray-300" />
          </CardContent>
        </Card>

        <div className="px-6 text-center">
          <div className="h-4 w-[260px] mx-auto bg-gray-300" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border border-gray-300 rounded-md">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
  className="p-6 md:p-8"
  onSubmit={async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (data.success) {
  router.push("/"); // or wherever after login
} else if (data.isVerified === false) {
  router.push(`/otp-verify?email=${email}&type=login`);
} else {
  alert(data.message || "Login failed");
}

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }}
>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>


<Field>
  <div className="flex items-center">
    <FieldLabel htmlFor="password">Password</FieldLabel>

    <Link
      href="/forgot-password"
      className="ml-auto text-sm underline-offset-2 hover:underline"
    >
      Forgot your password?
    </Link>
  </div>

  <Input
    id="password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full h-11 cursor-pointer text-base font-medium rounded-md bg-black text-white hover:bg-black/90"
                >
                  Login
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>

              <Field className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  type="button"
                  className="col-span-3 cursor-pointer w-full h-11 flex items-center justify-center gap-2 rounded-md border-gray-300 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" viewBox="0 0 48 48">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.15 0 5.98 1.08 8.2 3.2l6.1-6.1C34.2 2.5 29.5 0 24 0 14.7 0 6.6 5.4 2.7 13.3l7.1 5.5C11.5 13.2 17.2 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.7-2 5-4.2 6.5l6.6 5.1c3.9-3.6 6.3-9 6.3-15.6z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M9.8 28.8c-1-2.7-1-5.6 0-8.3l-7.1-5.5C.9 18.2 0 21 0 24s.9 5.8 2.7 8.3l7.1-5.5z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M24 48c5.5 0 10.2-1.8 13.6-4.9l-6.6-5.1c-1.8 1.2-4.1 2-7 2-6.8 0-12.5-3.7-15.1-9.3l-7.1 5.5C6.6 42.6 14.7 48 24 48z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="/signup">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src="/images/signup/image-101.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
