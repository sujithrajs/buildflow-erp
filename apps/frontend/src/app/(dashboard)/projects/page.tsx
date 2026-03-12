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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  User as UserIcon,
  Filter
} from "lucide-react"

const projects = [
  {
    id: "1",
    name: "Skyline Residency",
    location: "Mumbai, Maharashtra",
    startDate: "2023-11-01",
    budget: 45000000,
    status: "ACTIVE",
    manager: "Amit Sharma"
  },
  {
    id: "2",
    name: "Oceanic Bridge",
    location: "Kochi, Kerala",
    startDate: "2024-01-15",
    budget: 120000000,
    status: "ACTIVE",
    manager: "Sujith Raj"
  },
  {
    id: "3",
    name: "Metro Hub Phase 2",
    location: "Bangalore, Karnataka",
    startDate: "2023-08-20",
    budget: 85000000,
    status: "ON_HOLD",
    manager: "Priya Varma"
  },
  {
    id: "4",
    name: "Green Park Villas",
    location: "Pune, Maharashtra",
    startDate: "2023-05-10",
    budget: 32000000,
    status: "COMPLETED",
    manager: "Rahul Nair"
  },
  {
    id: "5",
    name: "Industrial Park A",
    location: "Chennai, Tamil Nadu",
    startDate: "2024-03-01",
    budget: 65000000,
    status: "PLANNING",
    manager: "Ananya Iyer"
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Project Management</h2>
          <p className="text-muted-foreground mt-1">
            Oversee all construction sites, budgets, and management teams.
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Enter the details for the new construction site.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" placeholder="e.g. Skyline Towers" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. Mumbai, MH" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start">Start Date</Label>
                  <Input id="start" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="budget">Total Budget (Excl. Tax)</Label>
                  <Input id="budget" type="number" placeholder="Budget in INR" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="manager">Assigned Manager</Label>
                <Input id="manager" placeholder="Search for user..." />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Initialize Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by project name or location..."
            className="pl-9 bg-white"
          />
        </div>
        <Button variant="outline" className="gap-2 h-10">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      <div className="border rounded-xl bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[300px]">Project Details</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span className="text-base font-bold group-hover:text-primary transition-colors">{project.name}</span>
                    <span className="text-xs text-muted-foreground flex items-center mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Started {new Date(project.startDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                    {project.location}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center font-semibold text-slate-700">
                    <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                    {(project.budget / 10000000).toFixed(2)} Cr
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center mr-2 text-[10px] font-bold">
                      {project.manager.split(' ').map(n => n[0]).join('')}
                    </div>
                    {project.manager}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    project.status === 'ACTIVE' ? 'default' :
                    project.status === 'PLANNING' ? 'secondary' :
                    project.status === 'COMPLETED' ? 'outline' : 'destructive'
                  } className={
                    project.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none' :
                    project.status === 'PLANNING' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100 border-none' :
                    project.status === 'COMPLETED' ? 'bg-slate-100 text-slate-700 hover:bg-slate-100 border-none' : 
                    'bg-amber-100 text-amber-700 hover:bg-amber-100 border-none'
                  }>
                    {project.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
