<?php

use Illuminate\Database\Seeder;

class formsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('forms')
       ->insert([
        [
            'name' => 'Catalogue',
            
        ],
        [
            'name' => 'WhatsApp',
            
        ],
        [
            'name' => 'Price',
            
        ],
        [
            'name' => 'Buy Now',
            
        ],
        [
            'name' => 'Product sheet',
            
        ],
        [
            'name' => 'Stock',
            
        ],
        [
            'name' => 'PriceList',
            
        ],
        [
            'name' => 'Campaign',
            
        ],
        [
            'name' => 'Samples',
            
        ],
        [
            'name' => '3D file',
            
        ],
        [
            'name' => 'HR Image',
            
        ],
        [
            'name' => 'Brochure',
            
        ],
        [
            'name' => 'Review',
            
        ],
        [
            'name' => 'Contact',
            
        ],
        [
            'name' => 'Send to a Friend',
            
        ],
        [
            'name' => 'Book a Meeting',
            
        ],
        [
            'name' => 'Subscriber',
            
        ],
        [
            'name' => 'Product info',
            
        ],
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
            'name' => 'Download',
            
        ],
        [
            'name' => 'Ebook',
            
        ],
        [
            'name' => 'Ezines',
            
        ],
        [
            'name' => 'Infographic',
            
        ],
       ]);
    }
}
