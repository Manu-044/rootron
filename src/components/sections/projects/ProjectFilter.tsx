"use client";

import { Input } from "@/components/ui/Input"; // Need to create Input component or use standard input
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

interface ProjectFilterProps {
    onSearch: (query: string) => void;
    onDomainChange: (domain: string) => void;
    onYearChange: (year: string) => void;
    domains: string[];
    years: string[];
}

export default function ProjectFilter({
    onSearch,
    onDomainChange,
    onYearChange,
    domains,
    years,
}: ProjectFilterProps) {
    return (
        <div className="bg-secondary/40 border border-white/5 rounded-xl p-6 mb-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full bg-background/50 border border-white/10 rounded-md py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                </div>

                {/* Domain Filter */}
                <select
                    onChange={(e) => onDomainChange(e.target.value)}
                    className="w-full bg-background/50 border border-white/10 rounded-md py-2 px-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                >
                    <option value="">All Domains</option>
                    {domains.map((domain) => (
                        <option key={domain} value={domain}>
                            {domain}
                        </option>
                    ))}
                </select>

                {/* Year Filter */}
                <select
                    onChange={(e) => onYearChange(e.target.value)}
                    className="w-full bg-background/50 border border-white/10 rounded-md py-2 px-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                >
                    <option value="">All Years</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
