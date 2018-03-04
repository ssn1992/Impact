<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LoginTestFail extends DuskTestCase
{

    public function loginFail()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                    ->type('email', 'teste@teste.pt')
                    ->type('password', 'teste')
                    ->press('sign in')
                    ->assertSee('Admin');
        });
    }
}
