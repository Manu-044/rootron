"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import { motion } from "framer-motion";

export default function SoundToggle() {
    const { isMuted, toggleMute, playSound } = useSoundEffect();

    const handleToggle = () => {
        toggleMute();
        // Play a sound when unmuting to give feedback
        if (isMuted) {
            setTimeout(() => playSound('click'), 100);
        }
    };

    return (
        <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full border border-primary/20 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
            title={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
            {isMuted ? (
                <VolumeX size={20} className="text-gray-500" />
            ) : (
                <Volume2 size={20} className="text-primary" />
            )}
        </motion.button>
    );
}
