<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function login()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
            ->type('email', 'admin@admin.pt')
            ->type('password', '1q1q1q')
            ->press('sign in')
            ->press('End tour')
            ->assertSee('Admin');
        });
    }
}
