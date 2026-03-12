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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Settings, 
  User, 
  ShieldCheck, 
  Building, 
  Bell, 
  Globe, 
  Save,
  CheckCircle2,
  Lock,
  Database
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
             <Settings className="h-7 w-7 text-primary" />
             System Configuration
          </h2>
          <p className="text-muted-foreground mt-1">
            Manage your personal profile, team permissions, and global ERP preferences.
          </p>
        </div>
        <Button className="gap-2 shadow-lg shadow-primary/20">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <div className="border-b bg-white -mx-4 md:-mx-8 px-4 md:px-8">
           <TabsList className="bg-transparent border-0 p-0 h-auto gap-8">
              <TabsTrigger 
                value="general"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                General Settings
              </TabsTrigger>
              <TabsTrigger 
                value="profile"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                User Profile
              </TabsTrigger>
              <TabsTrigger 
                value="roles"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                Roles & Security
              </TabsTrigger>
              <TabsTrigger 
                value="api"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 shadow-none text-xs font-bold uppercase tracking-widest transition-all"
              >
                Integrations
              </TabsTrigger>
           </TabsList>
        </div>

        <div className="mt-8 space-y-6">
          <TabsContent value="general">
             <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm border-slate-200">
                   <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                         <Building className="h-5 w-5 text-primary" />
                         Company Profile
                      </CardTitle>
                      <CardDescription>Public information about your construction firm.</CardDescription>
                   </CardHeader>
                   <CardContent className="space-y-4">
                      <div className="grid gap-2">
                         <Label>Company Display Name</Label>
                         <Input defaultValue="BuildFlow Engineering Pvt Ltd" />
                      </div>
                      <div className="grid gap-2">
                         <Label>Primary Office Address</Label>
                         <Input defaultValue="Level 42, Hiranandani Gardens, Mumbai, India" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="grid gap-2">
                            <Label>GSTIN</Label>
                            <Input defaultValue="27AADCB2234P1Z4" />
                         </div>
                         <div className="grid gap-2">
                            <Label>PAN</Label>
                            <Input defaultValue="AADCB2234P" />
                         </div>
                      </div>
                   </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                   <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                         <Bell className="h-5 w-5 text-primary" />
                         Notification Preferences
                      </CardTitle>
                      <CardDescription>Control how you receive system alerts.</CardDescription>
                   </CardHeader>
                   <CardContent className="space-y-6">
                      {[
                        { label: "Purchase Order Approvals", desc: "Get notified when a PO is ready for signing.", check: true },
                        { label: "Critical Stock Alerts", desc: "Alert when inventory drops below safety levels.", check: true },
                        { label: "Labour Attendance Miss", desc: "Notification if reporting is delayed by 2 hours.", check: false },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start justify-between gap-4">
                           <div className="space-y-0.5">
                              <p className="text-sm font-bold">{item.label}</p>
                              <p className="text-xs text-muted-foreground">{item.desc}</p>
                           </div>
                           <div className={`h-5 w-10 rounded-full p-1 cursor-pointer transition-colors ${item.check ? 'bg-primary' : 'bg-slate-200'}`}>
                              <div className={`h-3 w-3 rounded-full bg-white transition-transform ${item.check ? 'translate-x-5' : 'translate-x-0'}`}></div>
                           </div>
                        </div>
                      ))}
                   </CardContent>
                </Card>
             </div>
          </TabsContent>

          <TabsContent value="profile" className="max-w-3xl">
              <Card className="shadow-sm border-slate-200">
                 <CardHeader className="flex flex-row items-center gap-6">
                    <div className="h-20 w-20 rounded-full bg-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center relative group">
                       <User className="h-10 w-10 text-primary" />
                       <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                          <Settings className="h-6 w-6 text-white" />
                       </div>
                    </div>
                    <div>
                       <CardTitle className="text-2xl font-bold">John Doe</CardTitle>
                       <CardDescription className="flex items-center gap-2 mt-1">
                          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none font-bold">System Administrator</Badge>
                          <span className="text-xs">Member since Jan 2024</span>
                       </CardDescription>
                    </div>
                 </CardHeader>
                 <Separator />
                 <CardContent className="pt-6 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <Label>First Name</Label>
                          <Input defaultValue="John" />
                       </div>
                       <div className="space-y-2">
                          <Label>Last Name</Label>
                          <Input defaultValue="Doe" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <Label>Work Email Address</Label>
                       <Input defaultValue="john.doe@buildflow.com" disabled />
                    </div>
                    <div className="pt-4 flex items-center gap-4">
                       <Button variant="outline" className="gap-2">
                         <Lock className="h-4 w-4" />
                         Change Password
                       </Button>
                       <Button variant="ghost" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-bold uppercase tracking-widest text-[10px]">
                         Revoke All Sessions
                       </Button>
                    </div>
                 </CardContent>
              </Card>
          </TabsContent>

          <TabsContent value="roles">
             <Card className="shadow-sm border-slate-200">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-lg">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      Role-Based Access Control
                   </CardTitle>
                   <CardDescription>Manage security groups and functional permissions.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 border-t">
                   <div className="grid grid-cols-5 bg-slate-50/50 p-4 font-bold text-[10px] uppercase tracking-widest text-slate-500 border-b">
                      <div className="col-span-2">Feature Module</div>
                      <div className="text-center">Admin</div>
                      <div className="text-center">PM</div>
                      <div className="text-center">Site Eng</div>
                   </div>
                   {[
                     { module: "Project Management", admin: true, pm: true, eng: true },
                     { module: "Procurement Approvals", admin: true, pm: true, eng: false },
                     { module: "Inventory Modification", admin: true, pm: false, eng: true },
                     { module: "Financial Reporting", admin: true, pm: false, eng: false },
                   ].map((row, idx) => (
                     <div key={idx} className="grid grid-cols-5 p-4 border-b last:border-0 hover:bg-slate-50/30 transition-colors">
                        <div className="col-span-2 text-sm font-semibold">{row.module}</div>
                        <div className="flex justify-center">{row.admin ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <ShieldCheck className="h-4 w-4 text-slate-200" />}</div>
                        <div className="flex justify-center">{row.pm ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <ShieldCheck className="h-4 w-4 text-slate-200" />}</div>
                        <div className="flex justify-center">{row.eng ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <ShieldCheck className="h-4 w-4 text-slate-200" />}</div>
                     </div>
                   ))}
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="api">
             <div className="grid gap-6">
                <Card className="shadow-sm border-slate-200">
                   <CardHeader className="flex flex-row items-center justify-between">
                      <div className="space-y-1">
                         <CardTitle className="flex items-center gap-2 text-lg">
                            <Database className="h-5 w-5 text-primary" />
                            Tally Integration
                         </CardTitle>
                         <CardDescription>Synchronize construction costs automatically with Tally ERP.</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">CONNECTED</Badge>
                   </CardHeader>
                   <CardContent className="pt-0 flex justify-between items-center text-sm">
                      <code className="bg-slate-100 px-3 py-1.5 rounded text-xs text-slate-600 font-mono">https://api.buildflow.com/v1/sync/tally</code>
                      <Button variant="ghost" className="text-primary font-bold">Configure Headers</Button>
                   </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                   <CardHeader className="flex flex-row items-center justify-between">
                      <div className="space-y-1">
                         <CardTitle className="flex items-center gap-2 text-lg">
                            <Globe className="h-5 w-5 text-primary" />
                            Site Weather API
                         </CardTitle>
                         <CardDescription>Predict concrete pour delays based on localized weather patterns.</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-slate-400">DISCONNECTED</Badge>
                   </CardHeader>
                   <CardContent className="pt-0">
                      <Button variant="outline" className="text-xs font-bold uppercase tracking-widest h-8 border-dashed">Connect OpenWeatherMap</Button>
                   </CardContent>
                </Card>
             </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
