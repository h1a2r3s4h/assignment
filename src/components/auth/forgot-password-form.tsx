"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/v1/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    if (data.success) {
      // ✅ go to OTP page WITH type
      router.push(`/otp-verify?email=${email}&type=reset`);
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Something went wrong");
  }
};

  return (
    <Card className="w-[350px] shadow-md border">
      <CardHeader>
        <CardTitle className="text-center">Forgot Password</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button className="w-full bg-black text-white hover:bg-gray-800 cursor-pointer" onClick={handleSubmit}>
          Send Code
        </Button>
      </CardContent>
    </Card>
  );
}