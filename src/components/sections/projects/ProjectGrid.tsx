"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    status: string;
    links: {
        github: string;
        demo?: string;
    };
}

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="h-full flex flex-col overflow-hidden group border-white/5 bg-secondary/40 hover:bg-secondary/60">
                            <div className="h-48 bg-secondary/60 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-orbitron">
                                    {project.title} Preview
                                </div>
                                {/* Status Badge */}
                                <div className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white">
                                    {project.status}
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="flex justify-between items-start gap-2">
                                    <span className="truncate">{project.title}</span>
                                </CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className="text-sm text-gray-400 line-clamp-3">{project.description}</p>
                            </CardContent>

                            <CardFooter className="gap-2 pt-2">
                                <Button asChild size="sm" variant="outline" className="flex-1">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </a>
                                </Button>
                                {project.links.demo && (
                                    <Button asChild size="sm" variant="secondary" className="flex-1">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                        </a>
                                    </Button>
                                )}
                                <Button asChild size="sm" className="flex-1">
                                    <Link href={`/projects/${project.id}`}>
                                        Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>

            {projects.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                    No projects found matching your criteria.
                </div>
            )}
        </div>
    );
}
