"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Trophy, Award, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
}

interface AchievementCardProps {
    achievement: Achievement;
}

const getIcon = (category: string) => {
    switch (category) {
        case "Hackathon":
            return <Trophy size={24} className="text-yellow-500" />;
        case "Publication":
            return <FileText size={24} className="text-blue-500" />;
        case "Certification":
            return <Award size={24} className="text-green-500" />;
        default:
            return <Trophy size={24} className="text-primary" />;
    }
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <Card className="h-full border-white/5 bg-secondary/40 hover:bg-secondary/60 transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-secondary/60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-orbitron">
                        {achievement.title}
                    </div>
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                        {getIcon(achievement.category)}
                    </div>
                </div>

                <CardHeader>
                    <div className="text-sm text-primary mb-1">{achievement.date}</div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
