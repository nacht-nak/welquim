<?php

namespace Database\Seeders;

use App\Models\About;
use App\Models\Message;
use App\Models\Project;
use App\Models\Service;
use App\Models\Setting;
use App\Models\Skill;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin user
        User::factory()->create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@portfolio.com',
        ]);

        // About
        About::create([
            'title' => 'Full Stack Developer',
            'subtitle' => 'Building Digital Experiences That Matter',
            'description' => "I'm a passionate full-stack developer with over 3 years of experience crafting modern web applications. I specialize in building scalable, performant, and visually stunning digital products using cutting-edge technologies.\n\nMy journey in software development started with a curiosity about how things work on the web, and it has evolved into a deep expertise spanning frontend frameworks, backend systems, cloud infrastructure, and everything in between.\n\nI believe great software is not just about writing code — it's about solving real problems with elegant solutions that delight users.",
            'email' => 'welpanogaling12@gmail.com',
            'phone' => '+639659374441',
            'location' => 'Hinoba-an Negros Occidental',
            'github_url' => 'https://github.com',
            'linkedin_url' => 'https://linkedin.com',
            'twitter_url' => 'https://twitter.com',
            'years_experience' => 5,
            'projects_completed' => 50,
            'happy_clients' => 30,
        ]);

        // Skills
        $skills = [
            ['name' => 'React', 'category' => 'frontend', 'proficiency' => 95, 'icon' => 'react', 'sort_order' => 1],
            ['name' => 'TypeScript', 'category' => 'frontend', 'proficiency' => 90, 'icon' => 'typescript', 'sort_order' => 2],
            ['name' => 'Next.js', 'category' => 'frontend', 'proficiency' => 88, 'icon' => 'nextjs', 'sort_order' => 3],
            ['name' => 'Tailwind CSS', 'category' => 'frontend', 'proficiency' => 92, 'icon' => 'tailwind', 'sort_order' => 4],
            ['name' => 'Vue.js', 'category' => 'frontend', 'proficiency' => 80, 'icon' => 'vue', 'sort_order' => 5],
            ['name' => 'Laravel', 'category' => 'backend', 'proficiency' => 93, 'icon' => 'laravel', 'sort_order' => 6],
            ['name' => 'Node.js', 'category' => 'backend', 'proficiency' => 88, 'icon' => 'nodejs', 'sort_order' => 7],
            ['name' => 'PHP', 'category' => 'backend', 'proficiency' => 90, 'icon' => 'php', 'sort_order' => 8],
            ['name' => 'Python', 'category' => 'backend', 'proficiency' => 75, 'icon' => 'python', 'sort_order' => 9],
            ['name' => 'MySQL', 'category' => 'backend', 'proficiency' => 85, 'icon' => 'mysql', 'sort_order' => 10],
            ['name' => 'Docker', 'category' => 'tools', 'proficiency' => 82, 'icon' => 'docker', 'sort_order' => 11],
            ['name' => 'Git', 'category' => 'tools', 'proficiency' => 92, 'icon' => 'git', 'sort_order' => 12],
            ['name' => 'AWS', 'category' => 'tools', 'proficiency' => 78, 'icon' => 'aws', 'sort_order' => 13],
            ['name' => 'Figma', 'category' => 'tools', 'proficiency' => 75, 'icon' => 'figma', 'sort_order' => 14],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        // Projects
        $projects = [
            [
                'title' => 'E-Commerce Platform',
                'slug' => 'e-commerce-platform',
                'short_description' => 'A full-featured e-commerce platform with real-time inventory management and AI-powered recommendations.',
                'description' => "Built a comprehensive e-commerce platform handling 10,000+ daily transactions. Features include real-time inventory tracking, AI-powered product recommendations, multi-vendor support, and a sophisticated admin dashboard.\n\nThe platform uses microservices architecture with React on the frontend and Laravel on the backend, connected via REST APIs and WebSocket for real-time updates.",
                'technologies' => ['React', 'Laravel', 'MySQL', 'Redis', 'Stripe', 'AWS'],
                'category' => 'web',
                'is_featured' => true,
                'live_url' => 'https://example.com',
                'github_url' => 'https://github.com',
                'sort_order' => 1,
            ],
            [
                'title' => 'AI Dashboard Analytics',
                'slug' => 'ai-dashboard-analytics',
                'short_description' => 'An intelligent analytics dashboard with ML-powered insights and beautiful data visualizations.',
                'description' => "Designed and developed an analytics dashboard that leverages machine learning to provide actionable business insights. Features real-time data streaming, interactive charts, customizable widgets, and automated report generation.\n\nBuilt with Next.js and Python FastAPI, featuring WebSocket-based live data updates and D3.js visualizations.",
                'technologies' => ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
                'category' => 'web',
                'is_featured' => true,
                'live_url' => 'https://example.com',
                'github_url' => 'https://github.com',
                'sort_order' => 2,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // Services
        $services = [
            [
                'title' => 'Web Development',
                'description' => 'Custom web applications built with modern frameworks and best practices. From single-page apps to complex enterprise solutions.',
                'icon' => 'Globe',
                'features' => ['Custom Web Applications', 'E-Commerce Solutions', 'Progressive Web Apps', 'API Development', 'Database Design'],
                'sort_order' => 1,
            ],
            [
                'title' => 'Mobile Development',
                'description' => 'Cross-platform mobile applications that deliver native-like experiences on both iOS and Android platforms.',
                'icon' => 'Smartphone',
                'features' => ['iOS & Android Apps', 'React Native Development', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
                'sort_order' => 2,
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'User-centered design that combines aesthetics with functionality. Creating interfaces that users love to interact with.',
                'icon' => 'Palette',
                'features' => ['User Interface Design', 'User Experience Research', 'Wireframing & Prototyping', 'Design Systems', 'Responsive Design'],
                'sort_order' => 3,
            ],
            [
                'title' => 'Cloud & DevOps',
                'description' => 'Scalable cloud infrastructure and CI/CD pipelines that ensure your applications run smoothly in production.',
                'icon' => 'Cloud',
                'features' => ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Performance Monitoring', 'Security Hardening'],
                'sort_order' => 4,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }

        // Testimonials
        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'position' => 'CEO',
                'company' => 'TechStart Inc.',
                'content' => 'Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule with exceptional quality. The attention to detail and proactive communication made the entire process seamless.',
                'rating' => 5,
                'sort_order' => 1,
            ],
            [
                'name' => 'Michael Chen',
                'position' => 'CTO',
                'company' => 'DataFlow Systems',
                'content' => 'The analytics dashboard they built transformed how we understand our data. The real-time visualizations and ML-powered insights have directly contributed to a 30% increase in our decision-making efficiency.',
                'rating' => 5,
                'sort_order' => 2,
            ],
            [
                'name' => 'Emily Rodriguez',
                'position' => 'Product Manager',
                'company' => 'InnovateLab',
                'content' => 'Exceptional technical skills combined with a genuine understanding of user needs. They didn\'t just build what we asked for — they improved upon our vision and delivered something truly remarkable.',
                'rating' => 5,
                'sort_order' => 3,
            ],
            [
                'name' => 'David Park',
                'position' => 'Founder',
                'company' => 'GreenTech Solutions',
                'content' => 'The mobile app they developed exceeded all our expectations. It\'s fast, beautiful, and our users love it. We\'ve seen a 50% increase in user engagement since launch.',
                'rating' => 4,
                'sort_order' => 4,
            ],
            [
                'name' => 'Lisa Thompson',
                'position' => 'Marketing Director',
                'company' => 'BrandWave Agency',
                'content' => 'Not only is the website stunning, but the performance optimizations they implemented resulted in a 40% improvement in page load times. A true expert in their craft.',
                'rating' => 5,
                'sort_order' => 5,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }

        // Sample Messages
        $messages = [
            [
                'name' => 'John Smith',
                'email' => 'john@example.com',
                'subject' => 'Project Inquiry',
                'message' => 'Hi! I\'m interested in building a web application for my startup. Could we schedule a call to discuss the project requirements and timeline?',
                'is_read' => false,
            ],
            [
                'name' => 'Anna Williams',
                'email' => 'anna@example.com',
                'subject' => 'Collaboration Opportunity',
                'message' => 'I came across your portfolio and I\'m impressed with your work. We\'re looking for a developer to join our team on a freelance basis for a 3-month project.',
                'is_read' => true,
            ],
            [
                'name' => 'Robert Davis',
                'email' => 'robert@example.com',
                'subject' => 'Website Redesign',
                'message' => 'We need our company website redesigned with modern UI/UX. Your portfolio shows exactly the style we\'re looking for. Can you provide a quote?',
                'is_read' => false,
            ],
        ];

        foreach ($messages as $message) {
            Message::create($message);
        }

        // Settings
        $settings = [
            ['key' => 'site_name', 'value' => 'Portfolio', 'type' => 'string', 'group' => 'general'],
            ['key' => 'site_description', 'value' => 'Full Stack Developer Portfolio', 'type' => 'string', 'group' => 'general'],
            ['key' => 'hero_title', 'value' => 'Hi, I\'m a Creative Developer', 'type' => 'string', 'group' => 'hero'],
            ['key' => 'hero_subtitle', 'value' => 'I build exceptional digital experiences', 'type' => 'string', 'group' => 'hero'],
            ['key' => 'hero_cta_text', 'value' => 'View My Work', 'type' => 'string', 'group' => 'hero'],
            ['key' => 'footer_text', 'value' => '© 2026 Portfolio. All rights reserved.', 'type' => 'string', 'group' => 'general'],
            ['key' => 'show_testimonials', 'value' => '1', 'type' => 'boolean', 'group' => 'sections'],
            ['key' => 'show_services', 'value' => '1', 'type' => 'boolean', 'group' => 'sections'],
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }
    }
}
