import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-white/5 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="font-orbitron text-2xl font-bold text-white tracking-wider">
                                ROOT<span className="text-primary">RON</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Ignite. Innovate. Implement. Building the next generation of innovators through technology and collaboration.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-orbitron text-white text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-orbitron text-white text-lg mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/rootron_?igsh=MXYxZThoZGN4dGZiZg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="mailto:rootron25@gmail.com" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ROOTRON. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
