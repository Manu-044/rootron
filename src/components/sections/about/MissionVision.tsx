"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <SectionWrapper className="bg-secondary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-accent-red/20 bg-secondary/40">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-accent-red/10 flex items-center justify-center mb-4 text-accent-red">
                                <Lightbulb size={24} />
                            </div>
                            <CardTitle>Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">
                                To be a leading student technical community that empowers the next generation of engineers and leaders to shape the future of technology.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-primary/20 bg-secondary/40">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Target size={24} />
                            </div>
                            <CardTitle>Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">
                                To foster a culture of innovation and technical excellence by providing a platform for students to learn, collaborate, and build real-world solutions that solve tangible problems.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
