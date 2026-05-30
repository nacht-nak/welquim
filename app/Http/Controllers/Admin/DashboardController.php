<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'total_projects' => Project::count(),
                'active_projects' => Project::active()->count(),
                'total_skills' => Skill::active()->count(),
                'total_testimonials' => Testimonial::active()->count(),
                'unread_messages' => Message::unread()->count(),
                'total_messages' => Message::count(),
            ],
            'recentMessages' => Message::latest()->limit(5)->get(),
            'recentProjects' => Project::latest()->limit(5)->get(),
        ]);
    }
}
