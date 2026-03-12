"use client"

import * as React from "react"
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  Box, 
  ArrowUpRight, 
  ArrowDownRight, 
  History, 
  Filter, 
  Download,
  AlertTriangle,
  Package,
  ArrowRightLeft
} from "lucide-react"

const stockLevels = [
  { material: "Reinforcement Steel (12mm)", code: "MAT-STL-01", site: "Skyline Residency", onHand: 15.5, unit: "MT", minLevel: 5.0, status: "IN_STOCK" },
  { material: "Cement (OPC 53)", code: "MAT-CMN-02", site: "Skyline Residency", onHand: 420, unit: "Bags", minLevel: 500, status: "LOW_STOCK" },
  { material: "Coarse Aggregate", code: "MAT-AGG-03", site: "Oceanic Bridge", onHand: 1250, unit: "CFT", minLevel: 200, status: "IN_STOCK" },
  { material: "Electric Cable (4sqmm)", code: "MAT-ELE-04", site: "Metro Hub", onHand: 2, unit: "Coils", minLevel: 10, status: "CRITICAL" },
  { material: "PVC Pipe (4\")", code: "MAT-PLB-05", site: "Skyline Residency", onHand: 85, unit: "Nos", minLevel: 20, status: "IN_STOCK" },
]

const recentTransactions = [
  { id: "TX-901", type: "ISSUE", material: "Steel", qty: 2.5, unit: "MT", person: "Site Engineer A", date: "Today, 10:30 AM" },
  { id: "TX-902", type: "RECEIPT", material: "Cement", qty: 200, unit: "Bags", person: "Store Keeper", date: "Today, 09:15 AM" },
  { id: "TX-903", type: "ISSUE", material: "Aggregate", qty: 150, unit: "CFT", person: "Lab Assistant", date: "Yesterday" },
]

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory & Stock Tracking</h2>
          <p className="text-muted-foreground mt-1">
            Real-time material stock levels and consumption logs across all active project sites.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Stock Report
          </Button>
          <Button className="gap-2 shadow-md shadow-primary/20">
            <ArrowRightLeft className="h-4 w-4" />
            Issue Material
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Total Stock Value</CardDescription>
            <CardTitle className="text-2xl font-bold tracking-tight">₹ 1.24 Cr</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-emerald-500 font-medium flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3 mr-0.5" /> 4.2%
              </span>
              value increase since last week
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Critical Items</CardDescription>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              03
              <AlertTriangle className="h-5 w-5 text-rose-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1">Items below safety stock level</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Active Warehouse Locations</CardDescription>
            <CardTitle className="text-2xl font-bold">06</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1">Central and Site storage points</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Daily Consumption</CardDescription>
            <CardTitle className="text-2xl font-bold">₹ 85,200</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-rose-500 font-medium flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3 mr-0.5" /> 15%
              </span>
              surge in structural materials
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Site-wise Material Stock</CardTitle>
              <CardDescription>Consolidated stock levels across project locations.</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 border-t">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-6">Material</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Site Name</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right">Qty On-Hand</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockLevels.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="pl-6">
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm">{item.material}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">{item.code}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm font-medium">{item.site}</TableCell>
                    <TableCell className="text-right font-bold text-sm">
                      {item.onHand} {item.unit}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={
                        item.status === 'IN_STOCK' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
                        item.status === 'LOW_STOCK' ? 'border-amber-200 bg-amber-50 text-amber-700' :
                        'border-rose-200 bg-rose-50 text-rose-700 font-bold'
                      }>
                        {item.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              Latest Movements
            </CardTitle>
            <CardDescription>Recent site receipts and material issues.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentTransactions.map((tx, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`mt-1 p-2 rounded-lg ${tx.type === 'ISSUE' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {tx.type === 'ISSUE' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold">{tx.material}</p>
                    <p className="text-xs text-muted-foreground">Qty: {tx.qty} {tx.unit} | By {tx.person}</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{tx.date}</p>
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tx.type === 'ISSUE' ? 'border-amber-200 text-amber-700' : 'border-emerald-200 text-emerald-700'}`}>
                    {tx.type}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-sm font-semibold hover:bg-slate-100 italic text-slate-500">
              View full activity log...
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
