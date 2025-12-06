import Intro from "@/components/sections/about/Intro";
import MissionVision from "@/components/sections/about/MissionVision";
import Team from "@/components/sections/about/Team";

export default function About() {
    return (
        <div className="pt-20">
            <Intro />
            <MissionVision />
            <Team />
        </div>
    );
}
