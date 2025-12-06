"use client";

import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "@/data/events";
import { useState, useEffect } from "react";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function UpcomingEvent() {
    const upcomingEvents = events.filter(event => event.type === "upcoming");
    const [currentIndex, setCurrentIndex] = useState(0);
    const { playSound } = useSoundEffect();

    const handleNext = () => {
        playSound('carouselSlide');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
    };

    const handlePrevious = () => {
        playSound('carouselSlide');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + upcomingEvents.length) % upcomingEvents.length);
    };

    useEffect(() => {
        if (upcomingEvents.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [upcomingEvents.length]);

    if (upcomingEvents.length === 0) return null;

    const currentEvent = upcomingEvents[currentIndex];

    return (
        <SectionWrapper className="py-0">
            <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-accent-red/20 border border-primary/20 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Upcoming Event {upcomingEvents.length > 1 && `(${currentIndex + 1}/${upcomingEvents.length})`}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">
                            {currentEvent.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-300 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                <span>{currentEvent.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span>{currentEvent.mode}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {upcomingEvents.length > 1 && (
                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrevious}
                                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20"
                                    aria-label="Previous event"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20"
                                    aria-label="Next event"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                        <a href="https://webathon25.netlify.app" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="shrink-0">
                                Register Now
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
