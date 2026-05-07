import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <LoginForm className="w-full max-w-5xl" />
    </div>
  )
}