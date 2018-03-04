<?php

use Illuminate\Database\Seeder;

class infographicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('infographics')
        ->insert([
        [
            'name' => 'Poster',
        
        ],
        [
            'name' => 'Moodboards',
        
        ],
        [
            'name' => 'Trends',
        
        ],
        ]);
    }
}
