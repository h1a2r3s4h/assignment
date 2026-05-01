import OTPForm from "@/components/verify/otp-form";
import { Suspense } from "react";

export default function OTPVerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Suspense fallback={<div>Loading...</div>}>
        <OTPForm />
      </Suspense>
    </div>
  );
}