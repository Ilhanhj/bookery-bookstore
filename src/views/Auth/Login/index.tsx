/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

function LoginViews() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: unknown = query.callbackUrl || "/";

  const handleSubmit = async (event: unknown) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (error: unknown) {
      setIsLoading(false);
      setError("Email or Password is incorrect");
    }
  };

  return (
    <Card className="mx-auto max-w-sm rounded-xl bg-emerald-800">
      <CardHeader className="ml-3 py-4 lg:ml-0">
        <CardTitle className="text-2xl text-white">Login</CardTitle>
        <CardDescription className="text-neutral-300">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4 text-white">
          <div className="grid gap-2 text-black">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="grid gap-2 text-black">
            <div className="flex items-center">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm text-white underline"
              >
                Forgot your password?
              </Link>
            </div>
            <input
              className="rounded-md px-4 py-2"
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-md bg-yellow-600 px-4 py-2 text-white transition hover:bg-yellow-700"
          >
            Login
          </Button>
        </form>
        <Button
          variant="outline"
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: false,
            })
          }
          className="mt-4 flex w-full justify-start gap-4 bg-white text-center"
        >
          <Image
            src="/assets/google-logo.png"
            width={24}
            height={24}
            alt="Google logo"
            className="lg:mr-10"
            unoptimized={true}
          />
          <h1 className="text-black">Login with Google</h1>
        </Button>
        <div className="mt-4 text-center text-sm text-white">
          Don&apos;t have an account?{" "}
          <Link href="/Auth/Register" className="text-yellow-600 underline">
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginViews;
