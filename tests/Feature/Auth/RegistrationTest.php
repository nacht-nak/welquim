<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Fortify\Features;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered()
    {
        if (! Features::enabled(Features::registration())) {
            $this->markTestSkipped('Registration is disabled.');
        }

        $response = $this->get(route('register'));

        $response->assertOk();
    }

    public function test_new_users_can_register()
    {
        if (! Features::enabled(Features::registration())) {
            $this->markTestSkipped('Registration is disabled.');
        }

        $response = $this->post(route('register.store'), [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();

        $user = User::where('email', 'test@example.com')->first();
        $team = $user->currentTeam ?? $user->personalTeam();
        $response->assertRedirect('/' . $team->slug . '/dashboard');
    }
}
