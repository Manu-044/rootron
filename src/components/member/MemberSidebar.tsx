"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Calendar, BookOpen, Settings, LogOut } from "lucide-react";
import { authUtils } from "@/lib/auth";
import { useRouter } from "next/navigation";

const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Profile", href: "/dashboard/profile", icon: User },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "Resources", href: "/dashboard/resources", icon: BookOpen },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function MemberSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        authUtils.logout();
        router.push("/login");
    };

    return (
        <div className="w-64 bg-secondary/40 border-r border-white/10 min-h-screen flex flex-col">
            <div className="p-6 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-orbitron text-xl font-bold text-white">
                        ROOT<span className="text-primary">RON</span>
                    </span>
                </Link>
                <p className="text-xs text-gray-400 mt-1">Member Portal</p>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                    ? "bg-primary/20 text-primary border border-primary/30"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Icon size={20} />
                            <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all w-full"
                >
                    <LogOut size={20} />
                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
}
