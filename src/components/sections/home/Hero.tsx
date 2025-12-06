"use client";

import { motion } from "framer-motion";



import { useEffect, useState } from "react";
import { settingsService } from "@/lib/settingsService";

export default function Hero() {
    const [settings, setSettings] = useState({
        heroTitle: "Ignite. Innovate. Implement.",
        heroSubtitle: "ROOTRON is a student-led technical community dedicated to exploring the frontiers of technology, from AI and Robotics to Cybersecurity and Cloud Computing.",
    });

    useEffect(() => {
        const savedSettings = settingsService.get();
        setSettings({
            heroTitle: savedSettings.heroTitle,
            heroSubtitle: savedSettings.heroSubtitle,
        });
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        {settings.heroTitle}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="mb-8 relative"
                >
                    {/* Animated Glow Background */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/40 via-accent-red/40 to-primary/40 -z-10"
                    />

                    {/* Main Logo Image with Floating Animation */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative"
                    >
                        <motion.img
                            src="/rootron-logo.png"
                            alt="ROOTRON - Building the next generation of innovators"
                            className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />

                        {/* Animated Circuit Nodes */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.4, 1, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.25,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute w-2 h-2 bg-primary rounded-full"
                                    style={{
                                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                >
                    {settings.heroSubtitle}
                </motion.p>


            </div>

            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
        </section>
    );
}
