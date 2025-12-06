import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function GalleryPage() {
    return (
        <div className="pt-20 min-h-screen">
            <div className="bg-secondary/20 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    Our <span className="text-primary">Gallery</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Capturing moments of innovation, collaboration, and fun.
                </p>
            </div>

            <SectionWrapper>
                <GalleryGrid />
            </SectionWrapper>
        </div>
    );
}
