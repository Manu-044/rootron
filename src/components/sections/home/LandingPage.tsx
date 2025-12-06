"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface LandingPageProps {
    onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
    const [isEntering, setIsEntering] = useState(false);
    const [currentScene, setCurrentScene] = useState(0);
    const { playSound } = useSoundEffect();

    useEffect(() => {
        // Scene progression: 0->1 at 2s, 1->2 at 4s, 2->3 at 6s
        const timers = [
            setTimeout(() => setCurrentScene(1), 2000),
            setTimeout(() => setCurrentScene(2), 4000),
            setTimeout(() => setCurrentScene(3), 6000),
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    const handleClick = () => {
        playSound('success');
        setIsEntering(true);
        setTimeout(() => {
            onEnter();
        }, 1200);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClick}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden cursor-pointer"
            >
                {/* Deep black background */}
                <div className="absolute inset-0 bg-black" />

                {/* Vignette overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.8) 80%, #000 100%)'
                    }}
                />

                {/* Atmospheric fog layer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)',
                            backgroundSize: '200% 200%'
                        }}
                    />
                </div>

                {/* Scene 1: Egyptian Armor (0-2s) */}
                <AnimatePresence>
                    {currentScene === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <motion.img
                                src="/egyptian-armor.png"
                                alt="Egyptian Armor"
                                className="w-full h-full object-cover"
                                animate={{ x: [0, -30] }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                style={{
                                    filter: 'brightness(0.8) contrast(1.3)',
                                    mixBlendMode: 'screen'
                                }}
                            />
                            {/* Fog overlay for scene 1 */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scene 2: Egyptian Statue (2-4s) */}
                <AnimatePresence>
                    {currentScene === 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <motion.img
                                src="/egyptian-statue.png"
                                alt="Egyptian Statue"
                                className="w-full h-full object-cover"
                                animate={{ scale: [1, 1.05] }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                style={{
                                    filter: 'brightness(0.7) contrast(1.4)',
                                }}
                            />
                            {/* Crescent moon glow */}
                            <motion.div
                                className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    background: 'radial-gradient(circle, rgba(192, 192, 192, 0.4) 0%, transparent 70%)',
                                    filter: 'blur(20px)'
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scene 3: Hooded Figure (4-6s) */}
                <AnimatePresence>
                    {currentScene === 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Smoke effect background */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    background: 'radial-gradient(circle at 50% 60%, rgba(100, 100, 100, 0.2) 0%, transparent 60%)',
                                    filter: 'blur(40px)'
                                }}
                            />

                            <motion.img
                                src="/hooded-figure.png"
                                alt="Hooded Figure"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.2, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                style={{
                                    filter: 'brightness(0.9) contrast(1.3)',
                                }}
                            />

                            {/* Swirling smoke overlay */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    background: 'radial-gradient(ellipse at 30% 50%, rgba(150, 150, 150, 0.1) 0%, transparent 50%)',
                                    filter: 'blur(30px)'
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scene 4: Title Card with Crescent Moon (6s+) */}
                <AnimatePresence>
                    {currentScene === 3 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Crescent moon background */}
                            <motion.img
                                src="/crescent-moon.png"
                                alt="Crescent Moon"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                style={{
                                    filter: 'brightness(0.5) blur(2px)',
                                }}
                            />

                            {/* Moon glow effect */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    background: 'radial-gradient(circle at 50% 40%, rgba(192, 192, 192, 0.3) 0%, transparent 50%)',
                                    filter: 'blur(60px)'
                                }}
                            />

                            {/* Title Typography */}
                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider"
                                    style={{
                                        background: 'linear-gradient(180deg, #ffffff 0%, #c0c0c0 50%, #808080 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textShadow: '0 0 40px rgba(192, 192, 192, 0.5), 0 0 80px rgba(192, 192, 192, 0.3)',
                                        filter: 'drop-shadow(0 4px 20px rgba(192, 192, 192, 0.4))'
                                    }}
                                >
                                    ROOTRON
                                </motion.h1>

                                {/* Subtitle with stagger effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                    className="flex gap-2 text-sm md:text-base tracking-[0.3em] text-gray-400 uppercase"
                                >
                                    {['T', 'E', 'C', 'H', 'N', 'I', 'C', 'A', 'L', ' ', 'T', 'E', 'A', 'M'].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 1.5 + i * 0.05 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Click to Enter hint - appears after title card */}
                {currentScene === 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.6, 0.6] }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute bottom-20 text-gray-500 text-xs md:text-sm tracking-widest uppercase z-20"
                    >
                        Click to Enter
                    </motion.div>
                )}

                {/* Exit animation overlay */}
                {isEntering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-30"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 1) 50%)',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 3, opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div
                                className="w-32 h-32 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                                    filter: 'blur(20px)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
