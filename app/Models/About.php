<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    protected $table = 'about';

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'profile_image',
        'resume_file',
        'github_url',
        'linkedin_url',
        'twitter_url',
        'email',
        'phone',
        'location',
        'years_experience',
        'projects_completed',
        'happy_clients',
    ];

    protected function casts(): array
    {
        return [
            'years_experience' => 'integer',
            'projects_completed' => 'integer',
            'happy_clients' => 'integer',
        ];
    }

    /**
     * Get the single about record, creating one if it doesn't exist.
     */
    public static function getInstance(): self
    {
        return self::firstOrCreate([], [
            'title' => 'Full Stack Developer',
        ]);
    }
}
