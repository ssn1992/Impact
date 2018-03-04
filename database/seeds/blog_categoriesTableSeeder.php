<?php

use Illuminate\Database\Seeder;

class blog_categoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blog_categories')
        ->insert([
        [
            'name' => 'Product',     
        ],
        [
            'name' => 'Room Divisions',
        ],
        [
            'name' => 'Product Category',
        ],
        [
            'name' => 'Thematic',        
        ],
        [
            'name' => 'Local',        
        ],
        [
            'name' => 'Brand',        
        ]
        ]);
    }
}
