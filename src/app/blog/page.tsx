import { blogs } from "@/data/blogs";
import BlogCard from "@/components/sections/blog/BlogCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function BlogPage() {
    return (
        <div className="pt-20">
            <div className="bg-secondary/20 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    Our <span className="text-primary">Blog</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Insights, tutorials, and stories from the ROOTRON community.
                </p>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
