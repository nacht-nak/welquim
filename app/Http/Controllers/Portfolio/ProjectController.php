<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Project::active()->ordered();

        if ($request->has('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('short_description', 'like', "%{$search}%");
            });
        }

        return Inertia::render('portfolio/projects', [
            'projects' => $query->get(),
            'categories' => Project::active()->distinct()->pluck('category'),
            'filters' => $request->only(['category', 'search']),
        ]);
    }

    public function show(Project $project): Response
    {
        abort_unless($project->is_active, 404);

        $relatedProjects = Project::active()
            ->where('id', '!=', $project->id)
            ->where('category', $project->category)
            ->limit(3)
            ->get();

        return Inertia::render('portfolio/project-detail', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
        ]);
    }
}
