<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('about', function (Blueprint $table) {
            $table->id();
            $table->string('title')->default('Full Stack Developer');
            $table->string('subtitle')->nullable();
            $table->text('description')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('resume_file')->nullable();
            $table->string('github_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('location')->nullable();
            $table->integer('years_experience')->default(0);
            $table->integer('projects_completed')->default(0);
            $table->integer('happy_clients')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('about');
    }
};
