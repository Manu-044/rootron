"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Gradient orb class
        class GradientOrb {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            color: string;
            targetX: number;
            targetY: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.radius = 150 + Math.random() * 200;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;

                // Cyan/blue color variations
                const colors = [
                    "rgba(6, 182, 212, 0.15)",   // Cyan
                    "rgba(14, 165, 233, 0.12)",  // Sky blue
                    "rgba(59, 130, 246, 0.1)",   // Blue
                    "rgba(99, 102, 241, 0.08)",  // Indigo
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                this.targetX = this.x;
                this.targetY = this.y;
            }

            update() {
                // Smooth movement towards target
                this.x += (this.targetX - this.x) * 0.01;
                this.y += (this.targetY - this.y) * 0.01;

                // Randomly change target
                if (Math.random() < 0.01) {
                    this.targetX = Math.random() * canvas!.width;
                    this.targetY = Math.random() * canvas!.height;
                }

                // Keep within bounds
                if (this.x < -this.radius) this.x = canvas!.width + this.radius;
                if (this.x > canvas!.width + this.radius) this.x = -this.radius;
                if (this.y < -this.radius) this.y = canvas!.height + this.radius;
                if (this.y > canvas!.height + this.radius) this.y = -this.radius;
            }

            draw() {
                if (!ctx) return;

                // Create radial gradient
                const gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    this.radius
                );

                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, "rgba(6, 182, 212, 0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create gradient orbs
        const orbs: GradientOrb[] = [];
        const orbCount = 5;

        for (let i = 0; i < orbCount; i++) {
            orbs.push(new GradientOrb());
        }

        // Animation loop
        const animate = () => {
            // Clear with dark background
            ctx.fillStyle = "#020617";
            ctx.fillRect(0, 0, canvas!.width, canvas!.height);

            // Update and draw orbs
            for (const orb of orbs) {
                orb.update();
                orb.draw();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "#020617" }}
        />
    );
}
