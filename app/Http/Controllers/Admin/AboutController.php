<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/about/index', [
            'about' => About::getInstance(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:50',
            'location' => 'nullable|string|max:255',
            'github_url' => 'nullable|url|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'twitter_url' => 'nullable|url|max:255',
            'years_experience' => 'nullable|integer|min:0',
            'projects_completed' => 'nullable|integer|min:0',
            'happy_clients' => 'nullable|integer|min:0',
            'profile_image' => 'nullable|image|max:2048',
            'resume_file' => 'nullable|file|mimes:pdf|max:5120',
        ]);

        $about = About::getInstance();

        if ($request->hasFile('profile_image')) {
            if ($about->profile_image) {
                Storage::disk('public')->delete($about->profile_image);
            }
            $validated['profile_image'] = $request->file('profile_image')->store('about', 'public');
        } else {
            unset($validated['profile_image']);
        }

        if ($request->hasFile('resume_file')) {
            if ($about->resume_file) {
                Storage::disk('public')->delete($about->resume_file);
            }
            $validated['resume_file'] = $request->file('resume_file')->store('about', 'public');
        } else {
            unset($validated['resume_file']);
        }

        $about->update($validated);

        return back()->with('success', 'About section updated successfully.');
    }
}
