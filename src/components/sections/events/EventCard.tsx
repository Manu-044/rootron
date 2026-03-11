"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Event {
    id: string;
    title: string;
    subtitle?: string;
    date: string;
    mode: string;
    description: string;
    image: string;
    type: string;
    link?: string;
}

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    const isExternalLink = event.link && (event.link.startsWith('http://') || event.link.startsWith('https://'));

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
                        {event.title}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary border border-primary/20 backdrop-blur-sm">
                        {event.mode}
                    </div>
                </div>

                <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    {event.subtitle && (
                        <p className="text-primary text-xs font-medium italic mt-1">{event.subtitle}</p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                        <Calendar size={14} className="text-primary" />
                        <span>{event.date}</span>
                    </div>
                </CardHeader>

                <CardContent className="flex-grow">
                    <p className="text-sm text-gray-400">{event.description}</p>
                </CardContent>

                {event.link && (
                    <CardFooter>
                        {isExternalLink ? (
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full">
                                    {event.type === "upcoming" ? "Register Now" : "View Recap"} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        ) : (
                            <Button asChild className="w-full">
                                <Link href={event.link}>
                                    {event.type === "upcoming" ? "Register Now" : "View Recap"} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                )}
            </Card>
        </motion.div>
    );
}
