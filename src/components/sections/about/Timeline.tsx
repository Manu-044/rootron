"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const milestones = [
    { year: "2020", title: "Inception", description: "ROOTRON was founded by a group of 5 students." },
    { year: "2021", title: "First Hackathon", description: "Organized 'TechSprint', our first inter-college hackathon." },
    { year: "2022", title: "Expansion", description: "Expanded to 5 domains and reached 50+ members." },
    { year: "2023", title: "National Recognition", description: "Won the 'Best Tech Community' award at National Tech Summit." },
    { year: "2024", title: "Global Outreach", description: "Partnered with international tech communities for collaborative projects." },
];

export default function Timeline() {
    return (
        <SectionWrapper className="bg-secondary/20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                    Our <span className="text-primary">Journey</span>
                </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-5/12" />
                            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <div className="w-5/12">
                                <div className={`p-6 rounded-lg bg-secondary/40 border border-white/5 hover:border-primary/30 transition-colors ${index % 2 === 0 ? "text-right" : "text-left"
                                    }`}>
                                    <span className="text-2xl font-orbitron font-bold text-primary block mb-2">{milestone.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
