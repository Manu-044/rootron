"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { teamMembers, TeamMember } from "@/data/members";
import TeamMemberModal from "./TeamMemberModal";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { playSound } = useSoundEffect();

    const handleMemberClick = (member: TeamMember) => {
        playSound('memberCardClick');
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMember(null), 300);
    };

    return (
        <>
            <SectionWrapper id="team">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                        Meet the <span className="text-primary">Team</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The passionate individuals driving ROOTRON forward.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleMemberClick(member)}
                            className="cursor-pointer"
                        >
                            <Card className="h-full border-white/5 bg-secondary/40 text-center overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                                <div className="h-48 bg-secondary/60 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        style={{ objectPosition: 'center 20%' }}
                                        onError={(e) => {
                                            // Fallback to initials if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const fallback = target.nextElementSibling as HTMLElement;
                                            if (fallback) fallback.style.display = 'flex';
                                        }}
                                    />
                                    <div className="absolute inset-0 hidden items-center justify-center text-gray-500 font-orbitron text-4xl font-bold group-hover:text-primary transition-colors">
                                        {member.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                </div>
                                <CardHeader className="pt-4 pb-2">
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <p className="text-sm text-primary">{member.role}</p>
                                </CardHeader>
                                <CardContent className="pb-6">
                                    <div className="flex justify-center gap-4">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-gray-400 hover:text-primary transition-colors"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-gray-400 hover:text-primary transition-colors"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <TeamMemberModal
                member={selectedMember}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
