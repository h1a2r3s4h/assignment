import { Suspense } from "react";
import ResetPasswordForm from "@/components/auth/reset-password-form";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}