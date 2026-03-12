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
  Truck, 
  Settings, 
  Fuel, 
  Calendar, 
  Wrench, 
  Zap, 
  Container,
  Clock,
  MapPin,
  Plus
} from "lucide-react"

const machineryFleet = [
  { id: "EQ-EX-01", name: "Excavator CAT 320D", type: "Excavator", status: "AVAILABLE", site: "Central Workshop", hours: 4200, fuelLevel: "85%", nextService: "2024-04-10" },
  { id: "EQ-CR-02", name: "Tower Crane Liebherr", type: "Crane", status: "IN_USE", site: "Skyline Residency", hours: 1250, fuelLevel: "Grid", nextService: "2024-03-25" },
  { id: "EQ-BK-03", name: "Backhoe Loader JCB 3DX", type: "Loader", status: "IN_USE", site: "Oceanic Bridge", hours: 2800, fuelLevel: "45%", nextService: "2024-03-20" },
  { id: "EQ-MX-04", name: "Concrete Mixer 7/5", type: "Mixer", status: "UNDER_MAINTENANCE", site: "Central Workshop", hours: 850, fuelLevel: "30%", nextService: "2024-03-12" },
]

export default function MachineryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Machinery & Fleet Management</h2>
          <p className="text-muted-foreground mt-1">
            Track heavy equipment utilization, fuel consumption, and proactive maintenance schedules.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Wrench className="h-4 w-4" />
            Log Maintenance
          </Button>
          <Button className="gap-2 shadow-md shadow-primary/20">
            <Plus className="h-4 w-4" />
            Add Equipment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Fleet Size</CardDescription>
            <CardTitle className="text-2xl font-bold">24 Units</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1">Total heavy equipment assets</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Active Deployment</CardDescription>
            <CardTitle className="text-2xl font-bold">18 In Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
              <div className="bg-emerald-500 h-full w-[75%] rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Monthly Fuel (Avg)</CardDescription>
            <CardTitle className="text-2xl font-bold">4,200 L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <Fuel className="h-3 w-3 mr-1 text-amber-500" />
              <span>Diesel consumption tracking</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium">Maintenance Owed</CardDescription>
            <CardTitle className="text-2xl font-bold text-rose-600">02 Units</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground mt-1 font-medium">Urgent servicing required</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader className="bg-slate-50/50 border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Equipment Fleet Status
            </CardTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs font-bold uppercase tracking-widest gap-2">
               <Settings className="h-3.5 w-3.5" />
               Manage Groups
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white hover:bg-transparent">
              <TableRow className="border-b-0">
                <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-6">Equipment ID & Name</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Type</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Current Status</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest">Site Location</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right">Operating Hours</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right pr-6">Next Service</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {machineryFleet.map((eq) => (
                <TableRow key={eq.id} className="cursor-pointer hover:bg-slate-50/50">
                  <TableCell className="pl-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm tracking-tight">{eq.name}</span>
                      <span className="text-[10px] text-muted-foreground font-mono">{eq.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                       <Container className="h-4 w-4 text-slate-400 mb-1" />
                       <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">{eq.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={
                      eq.status === 'AVAILABLE' ? 'border-emerald-200 bg-emerald-50 text-emerald-700 font-bold' :
                      eq.status === 'IN_USE' ? 'border-blue-200 bg-blue-50 text-blue-700 font-bold' :
                      'border-rose-200 bg-rose-50 text-rose-700 font-bold'
                    }>
                      {eq.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm gap-1.5 font-medium text-slate-600">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      {eq.site}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-sm">{eq.hours.toLocaleString()}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest tracking-tighter">Hrs</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium">{new Date(eq.nextService).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-tighter ${
                        new Date(eq.nextService) < new Date() ? 'text-rose-600' : 'text-slate-400'
                      }`}>
                         {new Date(eq.nextService) < new Date() ? 'Overdue' : 'Scheduled'}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
