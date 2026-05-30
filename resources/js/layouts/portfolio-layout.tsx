import { ReactNode } from 'react';
import Navbar from '@/components/portfolio/navbar';
import Footer from '@/components/portfolio/footer';
import ScrollProgress from '@/components/portfolio/scroll-progress';
import { About } from '@/types/portfolio';

interface PortfolioLayoutProps {
    children: ReactNode;
    about?: About | null;
}

export default function PortfolioLayout({ children, about }: PortfolioLayoutProps) {
    return (
        <div className="relative min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
            {/* Scroll completion progress bar */}
            <ScrollProgress />

            {/* Glowing top-right background blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
            {/* Glowing left-center background blob */}
            <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Header / Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-grow pt-24 relative z-10">
                {children}
            </main>

            {/* Footer */}
            <Footer
                githubUrl={about?.github_url}
                linkedinUrl={about?.linkedin_url}
                twitterUrl={about?.twitter_url}
                email={about?.email}
            />
        </div>
    );
}
