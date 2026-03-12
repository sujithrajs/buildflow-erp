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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  Calendar, 
  UserPlus, 
  FileCheck, 
  ClipboardCheck, 
  IndianRupee,
  Clock,
  MoreHorizontal,
  ChevronRight
} from "lucide-react"

const workerStats = [
  { id: "W-101", name: "Ramesh Kumar", trade: "Mason", site: "Skyline Residency", status: "PRESENT", checkIn: "08:15 AM" },
  { id: "W-102", name: "Suresh Singh", trade: "Electrician", site: "Skyline Residency", status: "PRESENT", checkIn: "08:30 AM" },
  { id: "W-103", name: "Anil Wilson", trade: "Plumber", site: "Oceanic Bridge", status: "ABSENT", checkIn: "-" },
  { id: "W-104", name: "Vikram Dev", trade: "Helper", site: "Metro Hub", status: "HALF_DAY", checkIn: "09:00 AM" },
  { id: "W-105", name: "Mohammed Ali", trade: "Mason", site: "Skyline Residency", status: "PRESENT", checkIn: "08:05 AM" },
]

const subContractors = [
  { name: "Global Earthworks Ltd", trade: "Excavation", workers: 15, billStatus: "PAID", lastAmount: 450000 },
  { name: "Spark Electricals", trade: "Electrical", workers: 8, billStatus: "PENDING", lastAmount: 120000 },
  { name: "Aqua Plumbing Systems", trade: "Plumbing", workers: 12, billStatus: "OVERDUE", lastAmount: 85000 },
]

export default function LabourPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Labour & Site Attendance</h2>
          <p className="text-muted-foreground mt-1">
            Real-time workforce management, daily site attendance, and subcontractor billing.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <ClipboardCheck className="h-4 w-4" />
            Attendance Mode
          </Button>
          <Button className="gap-2 shadow-md shadow-primary/20">
            <UserPlus className="h-4 w-4" />
            Register Worker
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium text-xs uppercase tracking-wider font-bold">Total Strength</CardDescription>
            <CardTitle className="text-2xl font-bold">342</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <span className="text-emerald-500 font-medium flex items-center mr-1">
                 85%
              </span>
              active deployment
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium text-xs uppercase tracking-wider font-bold">Today's Present</CardDescription>
            <CardTitle className="text-2xl font-bold">298</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
              <div className="bg-primary h-full w-[87%] rounded-full shadow-sm shadow-primary/20"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium text-xs uppercase tracking-wider font-bold">Avg. Daily Wage</CardDescription>
            <CardTitle className="text-2xl font-bold flex items-center">
               <IndianRupee className="h-5 w-5 mr-0.5 text-slate-400" />
               1,85,400
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1 tracking-tight">Direct labour cost today</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-500 font-medium text-xs uppercase tracking-wider font-bold">Open SC Bills</CardDescription>
            <CardTitle className="text-2xl font-bold text-amber-600">08</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground mt-1 font-medium font-bold text-amber-600 tracking-tighter uppercase">5 Pending Verification</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-sm border-slate-200 overflow-hidden">
          <Tabs defaultValue="attendance" className="w-full">
            <div className="px-6 pt-4 border-b bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <TabsList className="bg-transparent border-0 p-0 h-auto gap-4">
                <TabsTrigger 
                  value="attendance"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 pb-3 shadow-none text-xs font-bold uppercase tracking-widest"
                >
                  Worker Attendance
                </TabsTrigger>
                <TabsTrigger 
                  value="subcontractors"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 pb-3 shadow-none text-xs font-bold uppercase tracking-widest"
                >
                  Subcontractors
                </TabsTrigger>
              </TabsList>
              <div className="pb-3 text-xs text-muted-foreground flex items-center gap-2 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                March 12, 2024
              </div>
            </div>

            <TabsContent value="attendance" className="m-0">
              <Table>
                <TableHeader className="bg-white">
                  <TableRow className="border-b-small">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-6">Worker Name</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Trade</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Site Site</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Status</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right pr-6">Check-In</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workerStats.map((worker) => (
                    <TableRow key={worker.id} className="cursor-pointer hover:bg-slate-50/50">
                      <TableCell className="pl-6 py-4">
                        <div className="flex items-center gap-3">
                           <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                             {worker.name.split(' ').map(n => n[0]).join('')}
                           </div>
                           <div className="flex flex-col">
                             <span className="font-bold text-sm tracking-tight">{worker.name}</span>
                             <span className="text-[10px] text-muted-foreground font-mono">{worker.id}</span>
                           </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[10px] font-bold uppercase bg-slate-50 border-slate-200">
                          {worker.trade}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-medium text-slate-600">{worker.site}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={
                          worker.status === 'PRESENT' ? 'border-emerald-200 bg-emerald-50 text-emerald-700 font-bold' :
                          worker.status === 'ABSENT' ? 'border-rose-200 bg-rose-50 text-rose-700 font-bold' :
                          'border-amber-200 bg-amber-50 text-amber-700 font-bold'
                        }>
                          {worker.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {worker.checkIn}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="subcontractors" className="m-0">
               <Table>
                <TableHeader className="bg-white">
                  <TableRow className="border-b-small">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-6">Firm Name</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Trade Specialty</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Workers</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Bill Status</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right pr-6">Last Bill (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subContractors.map((sc) => (
                    <TableRow key={sc.name} className="cursor-pointer hover:bg-slate-50/50">
                      <TableCell className="pl-6 py-4 font-bold text-sm tracking-tight">{sc.name}</TableCell>
                      <TableCell className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">{sc.trade}</TableCell>
                      <TableCell className="text-center font-bold text-sm tracking-tighter">{sc.workers}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={
                          sc.billStatus === 'PAID' ? 'border-emerald-200 text-emerald-700 shadow-sm' :
                          sc.billStatus === 'PENDING' ? 'border-amber-200 text-amber-700 shadow-sm' :
                          'border-rose-200 text-rose-700 shadow-sm font-bold'
                        }>
                          {sc.billStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-6 font-bold tracking-tight">
                        {sc.lastAmount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="shadow-sm border-slate-200">
           <CardHeader>
             <CardTitle className="flex items-center gap-2">
               <FileCheck className="h-5 w-5 text-primary" />
               Quick Summary
             </CardTitle>
             <CardDescription>Worker distribution by trade category.</CardDescription>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               {[
                 { trade: "Masons", count: 120, color: "bg-blue-500" },
                 { trade: "Labourers", count: 85, color: "bg-emerald-500" },
                 { trade: "Electricians", count: 45, color: "bg-amber-500" },
                 { trade: "Plumbers", count: 32, color: "bg-rose-500" },
                 { trade: "Supervisors", count: 15, color: "bg-indigo-500" },
               ].map((item, idx) => (
                 <div key={idx} className="space-y-1.5">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                     <span>{item.trade}</span>
                     <span>{item.count}</span>
                   </div>
                   <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                     <div className={`${item.color} h-full rounded-full`} style={{ width: `${(item.count/150)*100}%` }}></div>
                   </div>
                 </div>
               ))}
               
               <div className="pt-6 border-t mt-6 flex justify-between items-center bg-slate-50 p-3 rounded-lg border">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Payroll Status</span>
                    <span className="text-sm font-bold text-emerald-600">On Schedule</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-200">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
               </div>
             </div>
           </CardContent>
        </Card>
      </div>
    </div>
  )
}
