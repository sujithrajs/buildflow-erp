"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HardHat, ChevronLeft, Loader2 } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="p-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to Home
        </Link>
      </header>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center px-4 pb-24">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-200 mb-2">
              <HardHat className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
            <p className="text-slate-500 font-medium">
              Enter your credentials to access the ERP dashboard
            </p>
          </div>

          <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
            <CardHeader className="space-y-1 p-8 pb-4">
              <CardTitle className="text-xl">Sign in</CardTitle>
              <CardDescription>
                Use your official company email to log in
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="px-8 space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@company.com" 
                    className="rounded-xl border-slate-200 focus:ring-blue-500 h-11"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    className="rounded-xl border-slate-200 focus:ring-blue-500 h-11"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 h-11 rounded-xl font-bold mt-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : "Sign In"}
                </Button>
              </CardContent>
            </form>
            <CardFooter className="px-8 pb-8 pt-0 flex flex-col items-center">
              <div className="relative w-full py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-100" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400 font-semibold tracking-wider">Help & Support</span>
                </div>
              </div>
              <p className="text-xs text-center text-slate-400 font-medium leading-relaxed">
                Contact your IT administrator if you've forgotten your access credentials or need to request a new account.
              </p>
            </CardFooter>
          </Card>
          
          <p className="text-center text-sm text-slate-500">
            © 2026 BuildFlow <span className="text-slate-900 font-bold tracking-tighter italic">ERP</span>
          </p>
        </div>
      </div>
    </div>
  );
}
