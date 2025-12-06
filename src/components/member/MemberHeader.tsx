"use client";

import { Bell, Search } from "lucide-react";
import { authUtils } from "@/lib/auth";

export default function MemberHeader() {
    const user = authUtils.getUser();

    return (
        <header className="bg-secondary/40 border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-white">
                        Welcome back, {user?.name || "Member"}!
                    </h1>
                    <p className="text-sm text-gray-400">Here's what's happening today</p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <div className="text-right">
                            <p className="text-sm font-medium text-white">{user?.name}</p>
                            <p className="text-xs text-gray-400 capitalize">{user?.role}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
