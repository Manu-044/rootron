"use client";

import { Bell, Search, User } from "lucide-react";

export default function AdminHeader() {
    return (
        <header className="h-16 bg-secondary/80 border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-10 backdrop-blur-sm">
            <div className="flex items-center gap-4 w-1/3">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-background/50 border border-white/10 rounded-md py-1.5 pl-9 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-white/5">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Admin User</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <User size={16} />
                    </div>
                </div>
            </div>
        </header>
    );
}
