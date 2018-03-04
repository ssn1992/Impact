<?php

use Illuminate\Database\Seeder;

class cataloguesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('catalogues')
        ->insert([
        [
            'name' => 'Brand Catalogue',
        
        ],
        [
            'name' => 'Covet Catalogue',
        
        ],
        [
            'name' => 'Inspirations Book',
        
        ],
        [
            'name' => 'Coolors',
        
        ],
        [
            'name' => 'Master Bedroom',
        
        ],
        [
            'name' => 'Private',
        
        ],
        [
            'name' => 'Soho',
        
        ],
        [
            'name' => 'Samples',
        
        ],
        [
            'name' => 'Other',
        
        ],
        ]);
    }
}
