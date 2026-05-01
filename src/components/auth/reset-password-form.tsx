"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email"); // ✅ GET EMAIL

  const [password, setPassword] = useState("");

  const handleReset = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Password reset successful");
        router.push("/"); // ✅ go home or login
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
        <CardTitle className="text-center">Reset Password</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="w-full bg-black text-white hover:bg-gray-800 cursor-pointer"
          onClick={handleReset}
        >
          Reset Password
        </Button>
      </CardContent>
    </Card>
  );
}