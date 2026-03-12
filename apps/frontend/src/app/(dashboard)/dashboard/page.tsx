import { 
  Building2, 
  Users, 
  ShoppingCart, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

// Let's manually fix the imports to @/components/ui/card
import {
  Card as DashboardCard,
  CardContent as DashboardCardContent,
  CardDescription as DashboardCardDescription,
  CardHeader as DashboardCardHeader,
  CardTitle as DashboardCardTitle,
} from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground mt-2">
          Welcome back, Admin. Here is what's happening across your construction sites today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard className="shadow-sm border-slate-200">
          <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <DashboardCardTitle className="text-sm font-medium text-slate-600">Active Projects</DashboardCardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-emerald-500 font-medium flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3 mr-0.5" /> +2
              </span>
              since last month
            </p>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="shadow-sm border-slate-200">
          <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <DashboardCardTitle className="text-sm font-medium text-slate-600">Total Labour On-Site</DashboardCardTitle>
            <Users className="h-4 w-4 text-primary" />
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-amber-500 font-medium flex items-center mr-1">
                <Clock className="h-3 w-3 mr-0.5" /> 98%
              </span>
              reporting rate
            </p>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="shadow-sm border-slate-200">
          <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <DashboardCardTitle className="text-sm font-medium text-slate-600">Open Material Requests</DashboardCardTitle>
            <ShoppingCart className="h-4 w-4 text-primary" />
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-rose-500 font-medium flex items-center mr-1">
                <AlertCircle className="h-3 w-3 mr-0.5" /> 5 Urgent
              </span>
              require approval
            </p>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="shadow-sm border-slate-200">
          <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <DashboardCardTitle className="text-sm font-medium text-slate-600">Project Completion</DashboardCardTitle>
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="text-2xl font-bold">84%</div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-primary h-full w-[84%] rounded-full shadow-sm shadow-primary/20"></div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-8">
        <DashboardCard className="col-span-4 shadow-sm border-slate-200">
          <DashboardCardHeader>
            <DashboardCardTitle>Monthly Material Expenditure</DashboardCardTitle>
            <DashboardCardDescription>
              Track material costs and usage across major projects.
            </DashboardCardDescription>
          </DashboardCardHeader>
          <DashboardCardContent className="h-[300px] flex items-center justify-center border-t border-dashed border-slate-200 mt-2">
            <div className="text-slate-400 text-sm italic">Expenditure chart visualization...</div>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="col-span-3 shadow-sm border-slate-200">
          <DashboardCardHeader>
            <DashboardCardTitle>Recent Site Daily Reports</DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="space-y-6">
              {[
                { site: "Skyline Residency", activity: "Foundation Concrete Pouring", status: "In Progress", time: "2h ago" },
                { site: "Oceanic Bridge", activity: "Steel Structure Erection", status: "Completed", time: "5h ago" },
                { site: "Metro Hub", activity: "Electric Wiring Phase 1", status: "Delayed", time: "1d ago" },
                { site: "Green Park Villas", activity: "Interior Plastering", status: "Completed", time: "1d ago" },
              ].map((report, idx) => (
                <div key={idx} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{report.site}</p>
                    <p className="text-xs text-muted-foreground">{report.activity}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      report.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      report.status === 'Delayed' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {report.status}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">{report.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div>
    </div>
  )
}
