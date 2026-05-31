import { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (totalHeight > 0) {
                const currentProgress = (window.scrollY / totalHeight) * 100;
                setProgress(currentProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className="scroll-progress" 
            style={{ width: `${progress}%` }} 
            aria-hidden="true"
        />
    );
}
