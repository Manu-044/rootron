import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
    const blog = blogs.find((b) => b.id === params.id);

    if (!blog) {
        notFound();
    }

    return (
        <div className="pt-20 min-h-screen">
            <div className="bg-secondary/20 py-16 text-center border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mb-6">
                        <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {blog.date}</span>
                        <span className="flex items-center gap-2"><User size={16} className="text-primary" /> {blog.author}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-8 leading-tight">
                        {blog.title}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                                <Tag size={12} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <SectionWrapper className="max-w-4xl mx-auto">
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                        {blog.preview}
                    </p>
                    <div className="bg-secondary/40 p-8 rounded-xl border border-white/5 mb-8">
                        <p className="text-gray-400">
                            {blog.content}
                        </p>
                        <p className="text-gray-400 mt-4">
                            (This is a placeholder for the full blog content. In a real application, this would be rendered from Markdown or a CMS.)
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <Button asChild variant="ghost">
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Link>
                    </Button>
                </div>
            </SectionWrapper>
        </div>
    );
}
