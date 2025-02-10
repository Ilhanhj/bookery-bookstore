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

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

function RegisterViews() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: unknown) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/Auth/Login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };

  return (
    <Card className="mx-auto max-w-sm rounded-xl bg-emerald-800">
      <CardHeader className="ml-3 py-4 lg:ml-0">
        <CardTitle className="text-xl text-white">Register</CardTitle>
        <CardDescription className="text-neutral-300">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4 text-black">
          <div className="grid grid-cols-1 gap-2">
            <div className="grid gap-2">
              <label className="text-white" htmlFor="fullname">
                Fullname
              </label>
              <input
                className="rounded-md px-4 py-2"
                name="fullname"
                id="fullname"
                placeholder="Fullname"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-white" htmlFor="email">
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
          <div className="grid gap-2">
            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2"
              name="password"
              id="password"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-yellow-600 px-4 py-2 text-white transition hover:bg-yellow-700"
          >
            Create an account
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-white">
          Already have an account?{" "}
          <Link href="/Auth/Login" className="text-yellow-600 underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default RegisterViews;
