import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 60;

        const colors = [
            'rgba(168, 85, 247, 0.25)', // purple
            'rgba(59, 130, 246, 0.25)',  // blue
            'rgba(6, 182, 212, 0.25)',  // cyan
            'rgba(236, 72, 153, 0.25)',  // pink
        ];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = p.size * 2;
                ctx.shadowColor = p.color;
                ctx.fill();

                // Move particle
                p.x += p.speedX;
                p.y += p.speedY;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            });
        };

        const animate = () => {
            drawParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        createParticles();
        animate();

        // Mouse hover effect (particles interact subtly with mouse)
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            particles.forEach((p) => {
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    p.x += (dx / dist) * force * 1.5;
                    p.y += (dy / dist) * force * 1.5;
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
        />
    );
}
