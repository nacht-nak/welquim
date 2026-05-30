import { Link, usePage } from '@inertiajs/react';
import { 
    LayoutGrid, 
    User, 
    Code2, 
    Briefcase, 
    Gem, 
    MessageSquare, 
    Inbox, 
    Settings2,
    BookOpen, 
    FolderGit2
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes/admin';
import type { NavItem } from '@/types';

export function AppSidebar() {
    const page = usePage();
    const isAdmin = page.component.startsWith('admin/');
    
    const dashboardUrl = page.props.currentTeam
        ? dashboard()
        : '/';

    const mainNavItems: NavItem[] = isAdmin ? [
        {
            title: 'Dashboard',
            href: '/admin',
            icon: LayoutGrid,
        },
        {
            title: 'About Me',
            href: '/admin/about',
            icon: User,
        },
        {
            title: 'Skills',
            href: '/admin/skills',
            icon: Code2,
        },
        {
            title: 'Projects',
            href: '/admin/projects',
            icon: Briefcase,
        },
        {
            title: 'Services',
            href: '/admin/services',
            icon: Gem,
        },
        {
            title: 'Testimonials',
            href: '/admin/testimonials',
            icon: MessageSquare,
        },
        {
            title: 'Messages',
            href: '/admin/messages',
            icon: Inbox,
        },
        {
            title: 'Settings',
            href: '/admin/settings',
            icon: Settings2,
        },
    ] : [
        {
            title: 'Dashboard',
            href: dashboardUrl,
            icon: LayoutGrid,
        },
    ];

    const footerNavItems: NavItem[] = isAdmin ? [
        {
            title: 'View Live Site',
            href: '/',
            icon: BookOpen,
        }
    ] : [
        {
            title: 'Repository',
            href: 'https://github.com/laravel/react-starter-kit',
            icon: FolderGit2,
        },
        {
            title: 'Documentation',
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboardUrl} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <TeamSwitcher />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
