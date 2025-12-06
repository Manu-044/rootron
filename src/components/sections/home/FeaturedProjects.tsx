"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Smart Campus",
        description: "IoT-based system for monitoring campus energy usage and security.",
        tags: ["IoT", "React", "Node.js"],
        image: "/project1.jpg", // Placeholder
    },
    {
        title: "CyberGuard",
        description: "AI-powered threat detection system for small businesses.",
        tags: ["AI/ML", "Python", "Security"],
        image: "/project2.jpg", // Placeholder
    },
    {
        title: "RoboArm V2",
        description: "6-DOF robotic arm with computer vision capabilities.",
        tags: ["Robotics", "C++", "OpenCV"],
        image: "/project3.jpg", // Placeholder
    },
];

export default function FeaturedProjects() {
    return (
        <SectionWrapper id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        Check out some of the innovative solutions built by our team.
                    </p>
                </div>
                <Button asChild variant="outline" className="mt-4 md:mt-0">
                    <Link href="/projects">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full flex flex-col overflow-hidden group">
                            <div className="h-48 bg-secondary/60 relative overflow-hidden">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-orbitron">
                                    {project.title} Preview
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-gray-400">{project.description}</p>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button size="sm" variant="outline" className="w-full">
                                    <Github className="mr-2 h-4 w-4" /> Code
                                </Button>
                                <Button size="sm" className="w-full">
                                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
