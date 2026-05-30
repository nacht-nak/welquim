import { motion } from 'framer-motion';

interface SkillBarProps {
    name: string;
    proficiency: number;
    iconName?: string | null;
}

export default function SkillBar({ name, proficiency, iconName }: SkillBarProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-foreground flex items-center gap-2">
                    {name}
                </span>
                <span className="text-primary font-mono">{proficiency}%</span>
            </div>
            
            <div className="h-2.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                />
            </div>
        </div>
    );
}
