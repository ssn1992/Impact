<?php

use Illuminate\Database\Seeder;

class rolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('roles')
         ->insert([
        [
            'name' => 'Accounter',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'WebPR',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Marketer',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Ambassador',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Guest',
            'guard_name' => 'web',
        
        ]
       ]);
    }
}
