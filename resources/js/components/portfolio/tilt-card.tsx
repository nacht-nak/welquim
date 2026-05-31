import type { MouseEvent, ReactNode} from 'react';
import { useRef, useState } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    maxTilt?: number;
    perspective?: number;
}

export default function TiltCard({
    children,
    className = '',
    maxTilt = 10,
    perspective = 1000,
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [tiltStyle, setTiltStyle] = useState({});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;

        if (!card) {
return;
}

        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Mouse position relative to the element
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Normalized positions (-0.5 to 0.5)
        const xVal = (mouseX / width - 0.5) * 2;
        const yVal = (mouseY / height - 0.5) * 2;

        // Calculate rotation degrees
        const rotateX = (-yVal * maxTilt).toFixed(2);
        const rotateY = (xVal * maxTilt).toFixed(2);

        setTiltStyle({
            transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        });
    };

    return (
        <div
            ref={cardRef}
            className={`transition-all duration-300 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
        >
            {children}
        </div>
    );
}
