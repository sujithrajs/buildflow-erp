import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  HardHat,
  Package,
  ClipboardCheck,
  Users,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center justify-center gap-2" href="#">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <HardHat className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            BuildFlow <span className="text-blue-600">ERP</span>
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/login">
            Login
          </Link>
          <Button size="sm" className="hidden sm:flex bg-blue-600 hover:bg-blue-700">
            Request Demo
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10" />
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 mb-2">
                    Production Ready Construction Management
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 leading-tight">
                    Engineer Your <span className="text-blue-600">Construction</span> Sites for Maximum Efficiency
                  </h1>
                  <p className="max-w-[600px] text-slate-500 md:text-xl font-medium">
                    Integrated Procurement, Inventory, BOQ, and Labour Management for modern construction enterprises. Built for scalability.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/login">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-slate-200">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 pt-6">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-green-500" /> Enterprise Security
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-blue-500" /> Real-time Analytics
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-200 rounded-3xl -z-10" />
                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden rounded-3xl">
                  <CardHeader className="bg-slate-900 text-white p-6">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <LayoutDashboard className="h-5 w-5 text-blue-400" /> Live Project Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>Grandview Heights Phase II</span>
                          <span className="text-green-600">On Track</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-[65%]" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Materials Req</div>
                          <div className="text-xl font-bold text-slate-900">42</div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Attendance</div>
                          <div className="text-xl font-bold text-slate-900">128</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 border-t border-slate-100">
                      <Button variant="ghost" className="w-full text-blue-600 font-bold justify-between p-0 hover:bg-transparent">
                        View Detailed Dashboard <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Complete Operations Coverage</h2>
                <p className="max-w-[800px] text-slate-500 md:text-xl font-medium">
                  One platform to manage every aspect of your construction business. No more fragmented spreadsheets.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-xl mb-2">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Procurement</h3>
                <p className="text-slate-500 text-center text-sm leading-relaxed">
                  Streamline MR to PO workflows with automated approvals and PR generation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-xl mb-2">
                  <ClipboardCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Inventory</h3>
                <p className="text-slate-500 text-center text-sm leading-relaxed">
                  Real-time stock tracking across multiple sites with low-stock alerts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-xl mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Labour</h3>
                <p className="text-slate-500 text-center text-sm leading-relaxed">
                  Daily attendance tracking and subcontractor billing management.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-xl mb-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">BOQ Analysis</h3>
                <p className="text-slate-500 text-center text-sm leading-relaxed">
                  Compare estimated BOQ versus actual consumption to maximize profit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm font-medium text-slate-500">
            © 2026 BuildFlow ERP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link className="text-sm font-medium hover:text-blue-600" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
