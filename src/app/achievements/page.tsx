import { achievements } from "@/data/achievements";
import AchievementCard from "@/components/sections/achievements/AchievementCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AchievementsPage() {
    return (
        <div className="pt-20">
            <div className="bg-secondary/20 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    Our <span className="text-primary">Achievements</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Celebrating the milestones, victories, and recognitions that define our journey of excellence.
                </p>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
