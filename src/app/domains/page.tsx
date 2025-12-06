"use client";

import DomainSection from "@/components/sections/domains/DomainSection";
import { Shield, Brain, Cpu, Cloud, Code, Bot } from "lucide-react";

const domains = [
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        subtitle: "Defending the Digital Frontier",
        description: "In an increasingly connected world, security is paramount. Our Cybersecurity domain focuses on understanding threats, vulnerabilities, and defense mechanisms to protect digital assets.",
        tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Python"],
        outcomes: [
            "Network Security & Cryptography",
            "Ethical Hacking & Penetration Testing",
            "Web Application Security",
            "Digital Forensics",
        ],
        icon: Shield,
        color: "text-red-500",
    },
    {
        id: "iot",
        title: "Internet of Things",
        subtitle: "Connecting the Physical and Digital Worlds",
        description: "IoT is about smart devices communicating with each other. We build connected systems that gather data, analyze it, and act on it to create smarter environments.",
        tools: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Node-RED"],
        outcomes: [
            "Embedded Systems Programming",
            "Sensor Integration & Data Acquisition",
            "Wireless Communication Protocols",
            "Smart Home Automation",
        ],
        icon: Cpu,
        color: "text-accent-yellow",
    },
    {
        id: "webdev",
        title: "Web Development",
        subtitle: "Crafting Digital Experiences",
        description: "Web development is the art of building the internet. We focus on modern full-stack development to create responsive, dynamic, and performant web applications.",
        tools: ["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
        outcomes: [
            "Modern Frontend Frameworks",
            "Backend API Development",
            "Database Management",
            "Responsive UI/UX Design",
        ],
        icon: Code,
        color: "text-accent-orange",
    },
];

export default function DomainsPage() {
    return (
        <div className="pt-20">
            <div className="bg-secondary/20 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    Our <span className="text-primary">Domains</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Dive deep into the technologies that are shaping the future. Choose your path and start your journey with ROOTRON.
                </p>
            </div>

            {domains.map((domain, index) => (
                <DomainSection
                    key={domain.id}
                    {...domain}
                    reverse={index % 2 !== 0}
                />
            ))}
        </div>
    );
}
