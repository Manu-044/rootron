"use client";

import { useState, useMemo } from "react";
import ProjectFilter from "@/components/sections/projects/ProjectFilter";
import ProjectGrid from "@/components/sections/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [domain, setDomain] = useState("");
    const [year, setYear] = useState("");

    const domains = Array.from(new Set(projects.map((p) => p.domain)));
    const years = Array.from(new Set(projects.map((p) => p.year))).sort().reverse();

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.description.toLowerCase().includes(search.toLowerCase());
            const matchesDomain = domain ? project.domain === domain : true;
            const matchesYear = year ? project.year === year : true;
            return matchesSearch && matchesDomain && matchesYear;
        });
    }, [search, domain, year]);

    return (
        <div className="pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        Our <span className="text-primary">Projects</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore the innovative solutions built by our talented members across various domains.
                    </p>
                </div>

                <ProjectFilter
                    onSearch={setSearch}
                    onDomainChange={setDomain}
                    onYearChange={setYear}
                    domains={domains}
                    years={years}
                />

                <ProjectGrid projects={filteredProjects} />
            </div>
        </div>
    );
}
