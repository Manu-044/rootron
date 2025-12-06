import ContactForm from "@/components/sections/contact/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-20 min-h-screen">
            <div className="bg-secondary/20 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    Get in <span className="text-primary">Touch</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Have a question, idea, or want to collaborate? We&apos;d love to hear from you.
                </p>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-gray-300">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white mb-1">Email Us</h3>
                                        <p>rootron25@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-gray-300">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white mb-1">Visit Us</h3>
                                        <p>Sri Siddhartha Institute of Technology</p>
                                        <p>Tumakuru - 572102</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-6">Follow Us</h2>
                            <div className="flex gap-4">
                                <a href="mailto:rootron25@gmail.com" className="p-3 rounded-lg bg-secondary/40 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                                    <Mail size={24} />
                                </a>
                                <a href="#" className="p-3 rounded-lg bg-secondary/40 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://www.instagram.com/rootron_?igsh=MXYxZThoZGN4dGZiZg==" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary/40 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
