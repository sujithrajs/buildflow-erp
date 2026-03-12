"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  FileDown, 
  Calendar,
  IndianRupee,
  Building2,
  Users,
  ShoppingCart
} from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
          <p className="text-muted-foreground mt-1">
            Generate and view detailed analytical reports for financial and operational tracking.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button className="gap-2 shadow-md shadow-primary/20">
            <FileDown className="h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              Project Expenditure
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] flex items-center justify-center border-t border-dashed border-slate-200 mt-2">
            <div className="flex flex-col items-center gap-4 w-full px-6">
               <div className="space-y-2 w-full">
                 <div className="flex justify-between text-xs font-bold uppercase">
                   <span>Civil Works</span>
                   <span>₹ 1.2 Cr</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                   <div className="bg-primary h-full w-[65%] rounded-full shadow-sm"></div>
                 </div>
               </div>
               <div className="space-y-2 w-full">
                 <div className="flex justify-between text-xs font-bold uppercase">
                   <span>Procurement</span>
                   <span>₹ 85 L</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                   <div className="bg-blue-500 h-full w-[45%] rounded-full shadow-sm"></div>
                 </div>
               </div>
               <div className="space-y-2 w-full">
                 <div className="flex justify-between text-xs font-bold uppercase">
                   <span>Labour Force</span>
                   <span>₹ 42 L</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                   <div className="bg-emerald-500 h-full w-[25%] rounded-full shadow-sm"></div>
                 </div>
               </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              Schedule Variance
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] flex flex-col justify-center gap-8 border-t border-dashed border-slate-200 mt-2">
             <div className="text-center">
               <span className="text-5xl font-bold tracking-tighter text-emerald-600">+12%</span>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-2">Ahead of schedule</p>
             </div>
             <div className="grid grid-cols-2 gap-4 border p-4 rounded-xl bg-slate-50/50">
                <div className="text-center">
                   <p className="text-[10px] font-bold uppercase text-slate-500">Planned</p>
                   <p className="text-sm font-bold tracking-tight">85 Days</p>
                </div>
                <div className="text-center border-l border-slate-200">
                   <p className="text-[10px] font-bold uppercase text-slate-500">Actual</p>
                   <p className="text-sm font-bold tracking-tight">74 Days</p>
                </div>
             </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <PieChart className="h-4 w-4 text-blue-500" />
              Resource Allocation
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] flex items-center justify-center border-t border-dashed border-slate-200 mt-2 relative">
             <div className="h-40 w-40 rounded-full border-[12px] border-slate-100 flex items-center justify-center border-t-primary border-l-blue-500 border-r-emerald-500 rotate-45 animate-in fade-in zoom-in duration-1000">
                <div className="-rotate-45 text-center">
                  <span className="text-2xl font-bold">ERP</span>
                  <p className="text-[8px] font-bold uppercase text-slate-400 tracking-widest">Optimized</p>
                </div>
             </div>
             <div className="absolute bottom-6 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-primary"></div> Sites</span>
                <span className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-blue-500"></div> Equip</span>
                <span className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-emerald-500"></div> Workforce</span>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {[
          { label: "Material Waste", value: "2.4%", status: "LOW", icon: ShoppingCart },
          { label: "Active Sites", value: "12", status: "HEALTHY", icon: Building2 },
          { label: "Labour Retention", value: "94%", status: "OPTIMAL", icon: Users },
          { label: "Profitability", value: "+18.5%", status: "ABOVE AVG", icon: BarChart3 },
        ].map((stat, idx) => (
          <Card key={idx} className="shadow-sm border-slate-200 hover:bg-slate-50/50 transition-colors cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
               <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">{stat.label}</CardDescription>
               <stat.icon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
               <Badge variant="outline" className="text-[9px] h-4 font-bold border-none mt-1 p-0 flex gap-1.5 items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div> {stat.status}
               </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
