"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Edit, Trash2, UserPlus } from "lucide-react";

const members = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Member", domain: "AI/ML", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Domain Lead", domain: "IoT", status: "Active" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Member", domain: "Web Dev", status: "Inactive" },
    { id: 4, name: "David Wilson", email: "david@example.com", role: "Core Team", domain: "Cybersecurity", status: "Active" },
    { id: 5, name: "Eve Davis", email: "eve@example.com", role: "Member", domain: "Robotics", status: "Pending" },
];

export default function MembersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Members Management</h1>
                    <p className="text-gray-400">Manage team members, roles, and permissions.</p>
                </div>
                <Button>
                    <UserPlus size={16} className="mr-2" />
                    Add Member
                </Button>
            </div>

            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">All Members</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 border-b border-white/10">
                                <tr>
                                    <th className="pb-3 pl-4">Name</th>
                                    <th className="pb-3">Role</th>
                                    <th className="pb-3">Domain</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3 text-right pr-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {members.map((member) => (
                                    <tr key={member.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="py-4 pl-4">
                                            <div>
                                                <div className="font-medium text-white">{member.name}</div>
                                                <div className="text-xs text-gray-500">{member.email}</div>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded text-xs border ${member.role === "Core Team" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" :
                                                member.role === "Domain Lead" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                                                    "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                                }`}>
                                                {member.role}
                                            </span>
                                        </td>
                                        <td className="py-4">{member.domain}</td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs ${member.status === "Active" ? "text-green-500" :
                                                member.status === "Pending" ? "text-yellow-500" :
                                                    "text-red-500"
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${member.status === "Active" ? "bg-green-500" :
                                                    member.status === "Pending" ? "bg-yellow-500" :
                                                        "bg-red-500"
                                                    }`} />
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right pr-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="p-2 hover:bg-red-500/10 rounded text-gray-400 hover:text-red-400 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
