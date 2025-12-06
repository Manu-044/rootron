"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

export default function Intro() {
    return (
        <SectionWrapper>
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6"
                >
                    What is <span className="text-primary">ROOTRON</span>?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-400 leading-relaxed"
                >
                    ROOTRON is not just a club; it&apos;s a movement. We are a community of passionate technologists, innovators, and creators dedicated to pushing the boundaries of what&apos;s possible. Founded in 2020, we have grown from a small group of enthusiasts to a thriving ecosystem of over 100 active members working on cutting-edge projects in AI, Robotics, IoT, and more.
                </motion.p>
            </div>
        </SectionWrapper>
    );
}
