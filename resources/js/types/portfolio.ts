export type About = {
    id: number;
    title: string;
    subtitle: string | null;
    description: string | null;
    profile_image: string | null;
    resume_file: string | null;
    github_url: string | null;
    linkedin_url: string | null;
    twitter_url: string | null;
    email: string | null;
    phone: string | null;
    location: string | null;
    years_experience: number;
    projects_completed: number;
    happy_clients: number;
};

export type Skill = {
    id: number;
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'other';
    proficiency: number;
    icon: string | null;
    sort_order: number;
    is_active: boolean;
};

export type Project = {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    short_description: string | null;
    image: string | null;
    gallery: string[] | null;
    technologies: string[] | null;
    live_url: string | null;
    github_url: string | null;
    category: string;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
};

export type Service = {
    id: number;
    title: string;
    description: string | null;
    icon: string | null;
    features: string[] | null;
    is_active: boolean;
    sort_order: number;
};

export type Testimonial = {
    id: number;
    name: string;
    position: string | null;
    company: string | null;
    content: string;
    avatar: string | null;
    rating: number;
    is_active: boolean;
    sort_order: number;
};

export type ContactMessage = {
    id: number;
    name: string;
    email: string;
    subject: string | null;
    message: string;
    is_read: boolean;
    replied_at: string | null;
    created_at: string;
    updated_at: string;
};

export type SiteSetting = {
    id: number;
    key: string;
    value: string | null;
    type: 'string' | 'text' | 'boolean' | 'json';
    group: string;
};

export type PortfolioSettings = {
    hero_title: string;
    hero_subtitle: string;
    hero_cta_text: string;
    site_name: string;
    footer_text: string;
    show_testimonials: boolean;
    show_services: boolean;
};

export type AdminStats = {
    total_projects: number;
    active_projects: number;
    total_skills: number;
    total_testimonials: number;
    unread_messages: number;
    total_messages: number;
};
