<?php

use Illuminate\Database\Seeder;

class pressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('presses')
         ->insert([
        [
            'name' => 'Password',
        
        ],
        [
            'name' => 'Login',
        
        ],
        [
            'name' => 'Ready to Publish',
        
        ],
        [
            'name' => 'Press Release',
        
        ],
        [
            'name' => 'Downloads',
        
        ],
        ]);
    }
}
