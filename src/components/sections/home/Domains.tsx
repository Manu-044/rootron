import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Shield, Brain, Cpu, Cloud, Code, Bot } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const domains = [
    {
        title: "Cybersecurity",
        description: "Protecting digital assets and understanding network security protocols.",
        icon: Shield,
        color: "text-red-500",
        link: "/domains#cybersecurity",
    },
    {
        title: "IoT",
        description: "Connecting physical devices to the internet for smart solutions.",
        icon: Cpu,
        color: "text-accent-yellow",
        link: "/domains#iot",
    },
    {
        title: "Web Development",
        description: "Creating modern, responsive, and dynamic web applications.",
        icon: Code,
        color: "text-accent-orange",
        link: "/domains#webdev",
    },
];

export default function Domains() {
    return (
        <SectionWrapper id="domains" className="bg-secondary/20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                    Our <span className="text-primary">Domains</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore the various technical fields where we innovate, learn, and build together.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domains.map((domain, index) => (
                    <motion.div
                        key={domain.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href={domain.link}>
                            <Card className="h-full border-white/5 bg-secondary/40 hover:bg-secondary/60 cursor-pointer transition-all hover:border-primary/20">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${domain.color}`}>
                                        <domain.icon size={24} />
                                    </div>
                                    <CardTitle>{domain.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {domain.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
