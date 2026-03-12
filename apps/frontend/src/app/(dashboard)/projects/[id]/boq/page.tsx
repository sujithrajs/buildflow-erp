"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  ArrowLeft, 
  Download, 
  FileEdit, 
  Plus, 
  TrendingUp, 
  TrendingDown,
  Info,
  Layers,
  IndianRupee,
  Search
} from "lucide-react"
import Link from "next/link"

const boqItems = [
  { id: "1", category: "CIVIL", material: "Cement (OPC 53)", code: "MAT-CMN-01", estQuantity: 1200, unit: "Bags", rate: 450, total: 540000 },
  { id: "2", category: "CIVIL", material: "Steel Reinforcement TMT", code: "MAT-STL-02", estQuantity: 45, unit: "MT", rate: 68000, total: 3060000 },
  { id: "3", category: "CIVIL", material: "Coarse Aggregate (20mm)", code: "MAT-AGG-03", estQuantity: 850, unit: "CFT", rate: 85, total: 72250 },
  { id: "4", category: "CIVIL", material: "Fine Sand", code: "MAT-SND-04", estQuantity: 1100, unit: "CFT", rate: 95, total: 104500 },
  { id: "5", category: "PLUMBING", material: "CPVC Pipe 1.5\"", code: "MAT-PLB-05", estQuantity: 120, unit: "Nos", rate: 550, total: 66000 },
  { id: "6", category: "PLUMBING", material: "Brass Fitting Elbow", code: "MAT-PLB-06", estQuantity: 250, unit: "Nos", rate: 120, total: 30000 },
  { id: "7", category: "ELECTRICAL", material: "Copper Wire 2.5sqmm", code: "MAT-ELE-07", estQuantity: 15, unit: "Coils", rate: 1850, total: 27750 },
  { id: "8", category: "ELECTRICAL", material: "MCB 16A Single Pole", code: "MAT-ELE-08", estQuantity: 80, unit: "Nos", rate: 320, total: 25600 },
]

export default function BOQPage() {
  const params = useParams()
  const projectId = params.id

  const totalCost = boqItems.reduce((acc, item) => acc + item.total, 0)
  const categories = ["ALL", "CIVIL", "PLUMBING", "ELECTRICAL", "FINISHING"]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Bill of Quantities</h2>
            <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider h-5 bg-slate-50">
              Draft v1.2
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1">
            Site: <span className="text-primary font-semibold">Skyline Residency</span> | Project ID: <span className="uppercase">{projectId}</span>
          </p>
        </div>
        
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button className="gap-2 shadow-md shadow-primary/20">
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Total Est. Cost</CardDescription>
            <CardTitle className="text-2xl font-bold flex items-center">
              <IndianRupee className="h-5 w-5 mr-0.5 text-primary" />
              {(totalCost / 100000).toFixed(2)} Lacs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="h-3 w-3 mr-1 text-emerald-500" />
              <span className="text-emerald-500 font-semibold mr-1">5.2%</span> under civil budget
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Materials Tracked</CardDescription>
            <CardTitle className="text-2xl font-bold">142 Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <Layers className="h-3 w-3 mr-1 text-primary" />
              Categorized into 8 groups
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <div>
              <CardDescription className="text-slate-500 font-medium">Budget Utilization</CardDescription>
              <CardTitle className="text-2xl font-bold">₹ 3.92 Cr / ₹ 4.50 Cr</CardTitle>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-rose-500" />
            </div>
          </CardHeader>
          <CardContent>
             <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full w-[87%] rounded-full"></div>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">87.1% Consumed</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">₹ 58 Lac Remaining</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <Tabs defaultValue="ALL" className="w-full">
          <div className="px-6 pt-4 border-b bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <TabsList className="bg-transparent border-0 p-0 h-auto gap-4">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 pb-3 shadow-none text-xs font-bold uppercase tracking-widest"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="pb-3 flex gap-2">
               <div className="relative">
                <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Filter materials..."
                  className="pl-8 h-8 w-48 text-xs rounded-md border bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-2 text-xs font-bold">
                <FileEdit className="h-3.5 w-3.5" />
                Bulk Edit
              </Button>
            </div>
          </div>
          
          <TabsContent value="ALL" className="m-0">
            <ScrollArea className="h-[500px]">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Material & Code</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Category</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Est. Qty</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Rate (₹)</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Total (₹)</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {boqItems.map((item) => (
                    <TableRow key={item.id} className="hover:bg-slate-50/30 transition-colors">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm">{item.material}</span>
                          <span className="text-[10px] text-muted-foreground font-mono">{item.code}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-[9px] font-bold px-1.5 py-0">
                          {item.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {item.estQuantity.toLocaleString()} {item.unit}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.rate.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-bold">
                        {item.total.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Info className="h-3.5 w-3.5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="CIVIL" className="p-8 text-center text-slate-400 italic">
            Category specific view coming soon...
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
