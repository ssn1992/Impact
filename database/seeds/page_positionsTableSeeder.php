<?php

use Illuminate\Database\Seeder;

class page_positionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('form_page_positions')
        ->insert([
        [
            'name' => 'Top',
        
        ],
        [
            'name' => 'Center',
        
        ],
        [
            'name' => 'Bottom',
        
        ],
        [
            'name' => 'Header',
        
        ],
        [
            'name' => 'Footer',
        
        ],
        [
            'name' => 'Sidebar',
        
        ],
        [
            'name' => 'Dynamic',
        
        ]
       ]);
    }
}
