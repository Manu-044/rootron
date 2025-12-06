"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authUtils } from "@/lib/auth";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Call the login API
            const user = await authUtils.login(email, password);

            if (user) {
                // Route based on role
                if (user.role === 'admin') {
                    router.push('/admin');
                } else {
                    router.push('/dashboard');
                }
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError(err instanceof Error ? err.message : 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout title="Welcome Back" subtitle="Sign in to your account to continue">
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                        <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="••••••••"
                    />
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-md px-4 py-2 text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="text-center text-sm text-gray-400 mt-4">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
