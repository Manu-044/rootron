"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authUtils } from "@/lib/auth";

export default function SignupPage() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Validate passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            // Register the user
            await authUtils.register(name, email, password);
            setSuccess(true);

            // Redirect to login after 2 seconds
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err) {
            console.error('Registration failed:', err);
            setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout title="Join ROOTRON" subtitle="Create an account to become a member">
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                    />
                </div>
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
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="confirm-password" className="text-sm font-medium text-gray-300">Confirm</label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-md px-4 py-2 text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-500/10 border border-green-500/50 rounded-md px-4 py-2 text-green-400 text-sm">
                        Account created successfully! Redirecting to login...
                    </div>
                )}

                <Button type="submit" className="w-full" disabled={loading || success}>
                    {loading ? "Creating Account..." : success ? "Success!" : "Create Account"}
                </Button>

                <div className="text-center text-sm text-gray-400 mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
