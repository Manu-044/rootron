import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pt-20 pb-12">
            <div className="w-full max-w-md px-4">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-6">
                        <span className="font-orbitron text-3xl font-bold text-white tracking-wider">
                            ROOT<span className="text-primary">RON</span>
                        </span>
                    </Link>
                    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-gray-400 text-sm">{subtitle}</p>
                </div>

                <div className="bg-secondary/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    {children}
                </div>
            </div>
        </div>
    );
}
