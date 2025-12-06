"use client";


import SectionWrapper from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DomainSectionProps {
    title: string;
    subtitle: string;
    description: string;
    tools: string[];
    outcomes: string[];
    icon: LucideIcon;
    color: string;
    reverse?: boolean;
    id?: string;
}

export default function DomainSection({
    title,
    subtitle,
    description,
    tools,
    outcomes,
    icon: Icon,
    color,
    reverse = false,
    id,
}: DomainSectionProps) {
    return (
        <SectionWrapper id={id} className={reverse ? "bg-secondary/20" : ""}>
            <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
                {/* Content Side */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-white/5 mb-6 ${color}`}>
                        <Icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                        {title}
                    </h2>
                    <h3 className={`text-xl font-medium mb-4 ${color}`}>{subtitle}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full"></span>
                            What you will learn
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {outcomes.map((outcome) => (
                                <li key={outcome} className="flex items-start gap-2 text-gray-400 text-sm">
                                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                    {outcome}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-white font-bold mb-4">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((tool) => (
                                <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>


                </motion.div>

                {/* Visual Side (Placeholder for now, maybe an illustration or code snippet) */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, x: reverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary/60 border border-white/10 group">
                        <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${color.split('-')[1]}-500/10`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Icon size={64} className={`opacity-20 ${color}`} />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
                        <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-white/20" />
                        <div className="absolute top-4 left-12 w-2 h-2 rounded-full bg-white/20" />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
