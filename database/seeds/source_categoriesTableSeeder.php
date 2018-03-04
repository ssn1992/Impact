<?php

use Illuminate\Database\Seeder;

class source_categoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('source_categories')
       ->insert([
        [
            'name' => 'Chat Website',
        
        ],
        [
            'name' => 'Forms',
        
        ],
        [
            'name' => 'Direct Email',
        
        ],
        [
            'name' => 'Email Marketing',
        
        ],
        [
            'name' => 'Cross',
        
        ],
        [
            'name' => 'Newsletters',

        ],
        [
            'name' => 'Engagement',
        
        ],
        [
            'name' => 'Online Advertising',
         
        
        ],
        [
            'name' => 'Other',
           
        
        ],
        [
            'name' => 'Internal',
           
        
        ],
        [
            'name' => 'External',
           
        
        ],
        [
            'name' => 'Booth',
         
        
        ],
        [
            'name' => 'Press',
            
        
        ],
        [
            'name' => 'Partner',
            
        
        ],
        [
            'name' => 'Marketing',
           
        
        ],
        [
            'name' => 'Phone',
            
        
        ],
        [
            'name' => 'Cross Selling',
          
        
        ],
        [
            'name' => 'Up Selling',
           
        
        ]
       ]);
    }
}
