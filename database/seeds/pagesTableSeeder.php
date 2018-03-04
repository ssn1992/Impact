<?php

use Illuminate\Database\Seeder;

class pagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('form_pages')
        ->insert([
        [
            'name' => 'Homepage',
        
        ],
        [
            'name' => 'Catalogue',
        
        ],
        [
            'name' => 'Downloads',
        
        ],
        [
            'name' => 'Inspirations',
        
        ],
        [
            'name' => 'News',
        
        ],
        [
            'name' => 'Press',
        
        ],
        [
            'name' => 'Blog',
        
        ],
        [
            'name' => 'Contact',
        
        ],
        [
            'name' => 'All Products',
        
        ],
        [
            'name' => 'Product',
        
        ],
        [
            'name' => 'Welcoming Pages',
        
        ],
        [
            'name' => 'Shop by Room',
        
        ],
        [
            'name' => 'Videos',
        
        ],
        [
            'name' => 'StockList',
        
        ],
        [
            'name' => 'Pricelist',
        
        ],
        [
            'name' => 'Price',
        
        ],
        [
            'name' => 'Samples',
        
        ],
        [
            'name' => 'Partners',
        
        ],
        [
            'name' => 'Ebook',
        
        ]
        ]);
    }
}
