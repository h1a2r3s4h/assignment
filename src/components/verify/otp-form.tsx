"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import {
  Field, FieldDescription, FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP, InputOTPGroup,
  InputOTPSeparator, InputOTPSlot,
} from "@/components/ui/input-otp"

export default function OTPForm() {
  const [otp, setOtp] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()

  const email = searchParams.get("email")
  const type = searchParams.get("type") || "login";

  const handleVerify = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, otp, type }), // ✅ UPDATED
      })

      const data = await res.json()

      if (data.success) {
        // ✅ UPDATED REDIRECT LOGIC
        if (type === "login") {
          router.push("/")
        } else if (type === "signup") {
          router.push("/")
        } else if (type === "reset") {
          router.push(`/reset-password?email=${email}`)
        }
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert("Something went wrong")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      
      <Card className="w-full max-w-md rounded-2xl bg-white border border-gray-200">
        
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold">
            Verify your login
          </CardTitle>
          <CardDescription className="text-sm text-black">
            Enter the 6-digit code sent to{" "}
            <span className="font-medium text-black">{email}</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel className="text-sm font-medium">
                Verification Code
              </FieldLabel>

              <button className="flex items-center text-xs text-black hover:text-black">
                <RefreshCwIcon className="h-4 w-4 mr-1" />
                Resend
              </button>
            </div>

            <InputOTP
              maxLength={6}
              value={otp}
              onChange={setOtp}
              className="mt-4 flex justify-center"
            >
              <InputOTPGroup className="gap-2">
                <InputOTPSlot className="h-12 w-12 text-lg rounded-lg border border-black bg-white" index={0} />
                <InputOTPSlot className="h-12 w-12 text-lg rounded-lg border border-black bg-white" index={1} />
                <InputOTPSlot className="h-12 w-12 text-lg rounded-lg border border-black bg-white" index={2} />
              </InputOTPGroup>

              <InputOTPSeparator />

              <InputOTPGroup className="gap-2">
                <InputOTPSlot className="h-12 w-12 text-lg rounded-lg border border-black bg-white" index={3} />
                <InputOTPSlot className="h-12 w-12 text-lg rounded-lg border border-black bg-white" index={4} />
                <InputOTPSlot className="h-12 w-12 text-lg rounded-lg border border-black bg-white" index={5} />
              </InputOTPGroup>
            </InputOTP>

            <FieldDescription className="text-xs text-center mt-2 text-black">
              Code expires in 5 minutes
            </FieldDescription>
          </Field>
        </CardContent>

        <CardFooter className="flex cursor-pointer flex-col gap-4">
          <Button
            onClick={handleVerify}
            className="w-full cursor-pointer rounded-lg py-5 bg-black text-white hover:bg-black"
          >
            Verify
          </Button>

          <p className="text-xs text-black text-center">
            Didn’t receive the code?{" "}
            <span className="underline cursor-pointer hover:text-black">
              Try again
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}