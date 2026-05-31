<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use App\Models\About;
use App\Models\Message;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        $about = About::getInstance();

        return Inertia::render('portfolio/contact', [
            'contactInfo' => [
                'email' => $about->email,
                'phone' => $about->phone,
                'location' => $about->location,
                'github_url' => $about->github_url,
                'linkedin_url' => $about->linkedin_url,
                'twitter_url' => $about->twitter_url,
            ],
        ]);
    }

    public function store(ContactFormRequest $request): RedirectResponse
    {
        Message::create($request->validated());

        return back()->with('success', 'Thank you for your message! I\'ll get back to you soon.');
    }
}
