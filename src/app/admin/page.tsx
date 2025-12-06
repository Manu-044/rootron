import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Folder, FileText, Mail, TrendingUp } from "lucide-react";

const stats = [
    { label: "Total Members", value: "124", change: "+12%", icon: Users, color: "text-blue-500" },
    { label: "Active Projects", value: "18", change: "+4%", icon: Folder, color: "text-green-500" },
    { label: "Blog Posts", value: "45", change: "+2", icon: FileText, color: "text-purple-500" },
    { label: "Subscribers", value: "892", change: "+24%", icon: Mail, color: "text-yellow-500" },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-gray-400">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.label} className="bg-secondary/40 border-white/5">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">{stat.label}</CardTitle>
                            <stat.icon size={18} className={stat.color} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                <TrendingUp size={12} className="text-green-500" />
                                <span className="text-green-500">{stat.change}</span> from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-secondary/40 border-white/5">
                    <CardHeader>
                        <CardTitle className="text-lg text-white">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <div>
                                        <p className="text-sm text-white">New member joined: <span className="text-primary">User {i}</span></p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-secondary/40 border-white/5">
                    <CardHeader>
                        <CardTitle className="text-lg text-white">Pending Approvals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                    <div>
                                        <p className="text-sm text-white">Project Proposal: <span className="text-primary">Project {i}</span></p>
                                        <p className="text-xs text-gray-500">Submitted by Member {i}</p>
                                    </div>
                                    <button className="px-3 py-1 rounded text-xs bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                                        Review
                                    </button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
