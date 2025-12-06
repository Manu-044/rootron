"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Github, Twitter, Mail, Briefcase } from "lucide-react";
import { TeamMember } from "@/data/members";
import { useEffect } from "react";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface TeamMemberModalProps {
    member: TeamMember | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
    const { playSound } = useSoundEffect();

    // Play sound when modal opens
    useEffect(() => {
        if (isOpen) {
            playSound('modalOpen');
        }
    }, [isOpen, playSound]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                playSound('modalClose');
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose, playSound]);

    if (!member) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        playSound('modalClose');
                        onClose();
                    }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-6xl h-[90vh] bg-background border border-primary/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                playSound('modalClose');
                                onClose();
                            }}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        >
                            <X size={24} />
                        </button>

                        {/* Split Screen Layout */}
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Left Half - Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="w-full md:w-1/2 relative bg-secondary/40 flex items-center justify-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-red/20" />
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                                {/* Member Image */}
                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                                    <div className="w-64 h-64 rounded-full bg-secondary/60 border-4 border-primary/30 overflow-hidden mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)] relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            style={{
                                                objectPosition: member.id === 'sai-manoj-v' ? '35% center' :
                                                    member.id === 'chaithanya' ? '65% center' :
                                                        member.id === 'goutham' ? 'center 35%' :
                                                            'center center',
                                                transform: 'scale(1.3)',
                                                transformOrigin: 'center center'
                                            }}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const fallback = target.nextElementSibling as HTMLElement;
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                        />
                                        <div className="absolute inset-0 hidden items-center justify-center">
                                            <span className="text-6xl font-orbitron font-bold text-primary/50">
                                                {member.name.split(" ").map(n => n[0]).join("")}
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-orbitron font-bold text-white text-center mb-2">
                                        {member.name}
                                    </h2>
                                    <p className="text-xl text-primary font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Half - Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12 bg-background/95"
                            >
                                {/* Bio Section */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2 flex items-center gap-2">
                                        <Briefcase size={24} className="text-primary" />
                                        {member.name}
                                    </h3>
                                    <p className="text-primary/80 text-sm font-medium mb-4 ml-8">
                                        Computer Science Engineering (Cyber Security)
                                    </p>
                                </div>

                                {/* Skills Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                                        Skills & Expertise
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {member.skills.map((skill, index) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + index * 0.05 }}
                                                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                                        Connect
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => playSound('click')}
                                                className="flex items-center gap-2 px-4 py-2 bg-secondary/40 border border-primary/20 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                                            >
                                                <Linkedin size={20} />
                                                <span>LinkedIn</span>
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-secondary/40 border border-primary/20 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                                            >
                                                <Github size={20} />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-secondary/40 border border-primary/20 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                                            >
                                                <Twitter size={20} />
                                                <span>Twitter</span>
                                            </a>
                                        )}
                                        {member.social.email && (
                                            <a
                                                href={`mailto:${member.social.email}`}
                                                className="flex items-center gap-2 px-4 py-2 bg-secondary/40 border border-primary/20 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                                            >
                                                <Mail size={20} />
                                                <span>Email</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
