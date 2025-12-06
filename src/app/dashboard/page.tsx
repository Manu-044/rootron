"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Calendar, BookOpen, Users, TrendingUp } from "lucide-react";

const stats = [
    { label: "Enrolled Domains", value: "3", icon: BookOpen, color: "text-primary" },
    { label: "Upcoming Events", value: "5", icon: Calendar, color: "text-accent-orange" },
    { label: "Team Projects", value: "2", icon: Users, color: "text-accent-red" },
    { label: "Learning Hours", value: "24", icon: TrendingUp, color: "text-accent-yellow" },
];

const upcomingEvents = [
    { title: "AI Workshop", date: "March 15, 2025", time: "2:00 PM" },
    { title: "Hackathon 2025", date: "March 20, 2025", time: "9:00 AM" },
    { title: "Tech Talk: Cloud Computing", date: "March 25, 2025", time: "4:00 PM" },
];

const myDomains = [
    { name: "AI / Machine Learning", progress: 65 },
    { name: "Web Development", progress: 80 },
    { name: "Cloud & DevOps", progress: 45 },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h2>
                <p className="text-gray-400">Track your progress and stay updated</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label} className="bg-secondary/40 border-white/5">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-400">{stat.label}</p>
                                        <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                                    </div>
                                    <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
                                        <Icon size={24} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Events */}
                <Card className="bg-secondary/40 border-white/5">
                    <CardHeader>
                        <CardTitle className="text-white">Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                        <Calendar size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-white">{event.title}</h4>
                                        <p className="text-sm text-gray-400">{event.date} • {event.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* My Domains */}
                <Card className="bg-secondary/40 border-white/5">
                    <CardHeader>
                        <CardTitle className="text-white">My Learning Domains</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {myDomains.map((domain, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-white">{domain.name}</span>
                                        <span className="text-sm text-primary">{domain.progress}%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div
                                            className="bg-primary rounded-full h-2 transition-all"
                                            style={{ width: `${domain.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
