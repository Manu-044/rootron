import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Github, ExternalLink, ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="pt-20 min-h-screen">
            {/* Banner */}
            <div className="h-[40vh] bg-secondary/60 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white/10 tracking-widest uppercase">
                        {project.title}
                    </h1>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 text-glow">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {project.domain}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar size={14} /> {project.year}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-xs uppercase tracking-wider">
                            {project.status}
                        </span>
                    </div>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-4">Problem Statement</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-4 py-2 rounded-lg bg-secondary/60 border border-white/5 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-4">Gallery</h2>
                            <div className="aspect-video rounded-xl bg-secondary/40 border border-white/10 flex items-center justify-center text-gray-500">
                                Project Screenshots Placeholder
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-secondary/20 border border-white/5">
                            <h3 className="text-xl font-orbitron font-bold text-white mb-6">Project Links</h3>
                            <div className="flex flex-col gap-4">
                                <Button asChild variant="outline" className="w-full justify-start">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> View Source Code
                                    </a>
                                </Button>
                                {project.links.demo && (
                                    <Button asChild className="w-full justify-start">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-secondary/20 border border-white/5">
                            <h3 className="text-xl font-orbitron font-bold text-white mb-6">Team</h3>
                            <ul className="space-y-4">
                                {project.team.map((member) => (
                                    <li key={member} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <User size={14} />
                                        </div>
                                        {member}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button asChild variant="ghost" className="w-full">
                            <Link href="/projects">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
