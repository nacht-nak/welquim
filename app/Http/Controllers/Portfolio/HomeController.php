<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\About;
use App\Models\Project;
use App\Models\Service;
use App\Models\Setting;
use App\Models\Skill;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('portfolio/home', [
            'about' => About::getInstance(),
            'skills' => Skill::active()->ordered()->get(),
            'projects' => Project::active()->featured()->ordered()->get(),
            'services' => Service::active()->ordered()->get(),
            'testimonials' => Testimonial::active()->ordered()->get(),
            'settings' => [
                'hero_title' => Setting::get('hero_title', 'Hi, I\'m a Creative Developer'),
                'hero_subtitle' => Setting::get('hero_subtitle', 'I build exceptional digital experiences'),
                'hero_cta_text' => Setting::get('hero_cta_text', 'View My Work'),
                'site_name' => Setting::get('site_name', 'Portfolio'),
                'footer_text' => Setting::get('footer_text', '© 2026 Portfolio. All rights reserved.'),
                'show_testimonials' => Setting::get('show_testimonials', true),
                'show_services' => Setting::get('show_services', true),
            ],
        ]);
    }

    public function downloadResume(): BinaryFileResponse|null
    {
        $about = About::getInstance();

        if ($about->resume_file && Storage::disk('public')->exists($about->resume_file)) {
            return response()->download(
                Storage::disk('public')->path($about->resume_file),
                'resume.pdf'
            );
        }

        abort(404, 'Resume not available.');
    }
}
