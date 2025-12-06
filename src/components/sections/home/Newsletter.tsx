"use client";

import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail } from "lucide-react";

export default function Newsletter() {
    return (
        <SectionWrapper className="bg-gradient-to-b from-transparent to-primary/5">
            <div className="max-w-3xl mx-auto text-center px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Mail size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                    Stay <span className="text-primary">Updated</span>
                </h2>
                <p className="text-gray-400 mb-8">
                    Subscribe to our newsletter to get the latest updates on workshops, events, and tech trends.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                    <Button type="submit" size="lg">
                        Subscribe
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
}
