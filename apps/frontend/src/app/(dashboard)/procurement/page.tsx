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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  Plus, 
  Search, 
  FileText, 
  ShoppingCart, 
  Truck, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  MoreHorizontal,
  ArrowRight
} from "lucide-react"

const materialRequests = [
  { id: "MR-001", project: "Skyline Residency", date: "2024-03-10", status: "PENDING", items: 5, requester: "Amit Sharma" },
  { id: "MR-002", project: "Oceanic Bridge", date: "2024-03-11", status: "APPROVED", items: 3, requester: "Sujith Raj" },
  { id: "MR-003", project: "Skyline Residency", date: "2024-03-12", status: "REJECTED", items: 2, requester: "Amit Sharma" },
]

const purchaseOrders = [
  { id: "PO-4501", vendor: "Ambuja Cements Ltd", amount: 250000, date: "2024-03-05", status: "ISSUED", delivery: "In Transit" },
  { id: "PO-4502", vendor: "Tata Steel BSL", amount: 1200000, date: "2024-03-07", status: "PARTIAL_RECEIPT", delivery: "Partially Delivered" },
  { id: "PO-4503", vendor: "Havel's India", amount: 45000, date: "2024-03-12", status: "COMPLETED", delivery: "Delivered" },
]

export default function ProcurementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Procurement Management</h2>
          <p className="text-muted-foreground mt-1">
            Manage the full procurement lifecycle from site requests to vendor fulfillment.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            New MR
          </Button>
          <Button className="gap-2 shadow-md shadow-primary/20">
            <ShoppingCart className="h-4 w-4" />
            Create PO
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 bg-blue-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pending Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">08</div>
            <p className="text-xs text-muted-foreground mt-1">Requiring immediate PM approval</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200 bg-amber-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Active Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">14</div>
            <p className="text-xs text-muted-foreground mt-1">8 shipments currently in transit</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 bg-emerald-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Monthly Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹ 42.5 L</div>
            <p className="text-xs text-muted-foreground mt-1">12% under procurement budget</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <Tabs defaultValue="requests" className="w-full">
          <div className="px-6 pt-4 border-b bg-slate-50/50">
            <TabsList className="bg-transparent border-0 p-0 h-auto gap-8">
              <TabsTrigger 
                value="requests"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                Material Requests
              </TabsTrigger>
              <TabsTrigger 
                value="orders"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                Purchase Orders
              </TabsTrigger>
              <TabsTrigger 
                value="vendors"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                Vendor Directory
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="requests" className="m-0">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Request ID</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Project Site</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Requester</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Items</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                  <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materialRequests.map((mr) => (
                  <TableRow key={mr.id} className="cursor-pointer hover:bg-slate-50/50">
                    <TableCell className="font-mono text-xs font-bold text-primary">{mr.id}</TableCell>
                    <TableCell className="font-semibold">{mr.project}</TableCell>
                    <TableCell className="text-sm">{mr.requester}</TableCell>
                    <TableCell className="text-sm">{mr.items} Materials</TableCell>
                    <TableCell>
                      <Badge variant={
                        mr.status === 'APPROVED' ? 'default' :
                        mr.status === 'PENDING' ? 'secondary' : 'destructive'
                      } className={
                        mr.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700 border-none' :
                        mr.status === 'PENDING' ? 'bg-blue-100 text-blue-700 border-none' :
                        'bg-rose-100 text-rose-700 border-none'
                      }>
                        {mr.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="orders" className="m-0">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Order ID</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Vendor</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Order Value</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Order Status</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Logistics</TableHead>
                  <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseOrders.map((po) => (
                  <TableRow key={po.id} className="cursor-pointer hover:bg-slate-50/50">
                    <TableCell className="font-mono text-xs font-bold text-primary">{po.id}</TableCell>
                    <TableCell className="font-semibold">{po.vendor}</TableCell>
                    <TableCell className="font-bold tracking-tight">₹ {po.amount.toLocaleString()}</TableCell>
                    <TableCell>
                       <Badge variant="outline" className={
                        po.status === 'COMPLETED' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
                        po.status === 'ISSUED' ? 'border-blue-200 bg-blue-50 text-blue-700' :
                        'border-amber-200 bg-amber-50 text-amber-700'
                      }>
                        {po.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Truck className="h-3 w-3" />
                        {po.delivery}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
