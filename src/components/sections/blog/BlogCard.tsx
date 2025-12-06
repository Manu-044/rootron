"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Blog {
    id: string;
    title: string;
    author: string;
    date: string;
    tags: string[];
    preview: string;
    image: string;
}

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card className="h-full flex flex-col overflow-hidden group border-white/5 bg-secondary/40 hover:bg-secondary/60">
                <div className="h-48 bg-secondary/60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-orbitron">
                        {blog.title}
                    </div>
                </div>

                <CardHeader>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{blog.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow">
                    <p className="text-sm text-gray-400 line-clamp-3">{blog.preview}</p>
                </CardContent>

                <CardFooter>
                    <Button asChild variant="ghost" className="w-full justify-between hover:text-primary">
                        <Link href={`/blog/${blog.id}`}>
                            Read More <ArrowRight size={16} />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
