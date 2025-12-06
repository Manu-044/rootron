"use client";



const stats = [
    { label: "Members", value: "20+" },
    { label: "Projects", value: "15+" },
    { label: "Workshops", value: "10+" },
    { label: "Domains", value: "6+" },
];

export default function Stats() {
    return (
        <div className="border-y border-white/5 bg-secondary/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 text-glow">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
