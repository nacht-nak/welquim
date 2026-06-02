<?php

use App\Http\Controllers\Admin\AboutController as AdminAboutController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\MediaController as AdminMediaController;
use App\Http\Controllers\Admin\MessageController as AdminMessageController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;
use App\Http\Controllers\Admin\SettingController as AdminSettingController;
use App\Http\Controllers\Admin\SkillController as AdminSkillController;
use App\Http\Controllers\Admin\TestimonialController as AdminTestimonialController;
use App\Http\Controllers\Portfolio\ContactController;
use App\Http\Controllers\Portfolio\HomeController;
use App\Http\Controllers\Portfolio\ProjectController;
use App\Http\Middleware\ConvertFormDataTypes;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
Route::get('/projects/{project:slug}', [ProjectController::class, 'show'])->name('projects.show');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/resume/download', [HomeController::class, 'downloadResume'])->name('resume.download');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
});

Route::prefix('admin')
    ->middleware(['auth', 'verified', ConvertFormDataTypes::class])
    ->name('admin.')
    ->group(function () {
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');

        // About (single resource)
        Route::get('/about', [AdminAboutController::class, 'index'])->name('about.index');
        Route::put('/about', [AdminAboutController::class, 'update'])->name('about.update');

        // CRUD Resources
        Route::resource('skills', AdminSkillController::class);
        Route::resource('projects', AdminProjectController::class);
        Route::resource('services', AdminServiceController::class);
        Route::resource('testimonials', AdminTestimonialController::class);

        // Messages
        Route::get('/messages', [AdminMessageController::class, 'index'])->name('messages.index');
        Route::get('/messages/{message}', [AdminMessageController::class, 'show'])->name('messages.show');
        Route::patch('/messages/{message}/read', [AdminMessageController::class, 'markRead'])->name('messages.read');
        Route::delete('/messages/{message}', [AdminMessageController::class, 'destroy'])->name('messages.destroy');

        // Settings
        Route::get('/settings', [AdminSettingController::class, 'index'])->name('settings.index');
        Route::put('/settings', [AdminSettingController::class, 'update'])->name('settings.update');

        // Media
        Route::post('/media/upload', [AdminMediaController::class, 'upload'])->name('media.upload');
    });

require __DIR__.'/settings.php';
