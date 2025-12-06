"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryGrid() {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

    const filteredImages = filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter);

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === category
                                ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                                : "bg-secondary/40 text-gray-400 border-white/5 hover:border-primary/30 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative group cursor-pointer rounded-xl overflow-hidden bg-secondary/40 border border-white/5">
                                <div className="aspect-[4/3] bg-secondary/60 flex items-center justify-center text-gray-600">
                                    {/* Placeholder for actual image */}
                                    Image {image.id}
                                </div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white font-medium">{image.caption}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <div
                            className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden bg-secondary border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="aspect-video bg-secondary/80 flex items-center justify-center text-gray-500 text-2xl">
                                {selectedImage.caption} (Full View)
                            </div>
                            <div className="p-4 bg-secondary/90 border-t border-white/10">
                                <p className="text-white text-center">{selectedImage.caption}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
