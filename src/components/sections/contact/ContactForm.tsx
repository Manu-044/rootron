"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        alert("Message sent successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/40 p-8 rounded-xl border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                        id="name"
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input
                    id="subject"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="Collaboration / Inquiry"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message here..."
                />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
