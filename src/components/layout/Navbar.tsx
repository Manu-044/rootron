"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import SoundToggle from "@/components/ui/SoundToggle";
import { useSoundEffect } from "@/hooks/useSoundEffect";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Domains", href: "/domains" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { playSound } = useSoundEffect();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <span className="font-orbitron text-2xl font-bold text-white tracking-wider group-hover:text-primary transition-colors duration-300">
                            ROOT<span className="text-primary group-hover:text-white transition-colors duration-300">RON</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => playSound('pageTransition')}
                                    className={cn(
                                        "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-primary/10",
                                        pathname === link.href
                                            ? "text-primary bg-primary/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                                            : "text-gray-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sound Toggle & Login Button (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <SoundToggle />
                        <Link
                            href="/login"
                            onClick={() => playSound('buttonClick')}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 text-sm font-medium shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        >
                            <User size={16} />
                            <span>Login</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <SoundToggle />
                        <button
                            onClick={() => {
                                playSound('click');
                                setIsOpen(!isOpen);
                            }}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        playSound('pageTransition');
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-primary/10 transition-colors",
                                        pathname === link.href ? "text-primary bg-primary/10" : "text-gray-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/login"
                                onClick={() => {
                                    playSound('buttonClick');
                                    setIsOpen(false);
                                }}
                                className="block w-full text-center mt-4 px-4 py-2 rounded-md bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-black transition-all duration-300"
                            >
                                Login / Dashboard
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
