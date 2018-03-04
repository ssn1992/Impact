<?php

use Illuminate\Database\Seeder;

class socialNetworksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        DB::table('social_networks')
        ->insert([
        [
            'name' => 'Facebook',
            'level_id' => 2,
        
        ],
        [
            'name' => 'Linkedin',
            'level_id' => 2,

        ],
        [
            'name' => 'googleplus',
            'level_id' => 2,
            
        ],
        [
            'name' => 'Instagram',
            'level_id' => 2,
            
        ],
        [
            'name' => 'Pinterest',
            'level_id' => 2,
            
        ],
        [
            'name' => 'Twitter',
            'level_id' => 2,
            
        ],
        [
            'name' => 'Youtube',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Houzz',
            'level_id' => 3,
            
        ],
        [
            'name' => 'ISSUU',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Behance',
            'level_id' => 3,
            
        ],
        [
            'name' => 'The Fancy',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Scribd',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Vimeo',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Stumbleupon',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Tumblr',
            'level_id' => 3,
            
        ],
        [
            'name' => 'Google Adwords',
            'level_id' => 3,
            
        ],
        [
            'name' => 'VKontakte',
            'level_id' => 4,
            
        ],
        [
            'name' => 'Xing',
            'level_id' => 4,
            
        ],
        ]);

        DB::table('social_network_categories')
        ->insert([
        [
            'name' => 'Online Advertising',
        
        ],
        [
            'name' => 'Engagement',
        
        ],
        [
            'name' => 'Other',
        
        ],
        ]);
    }
}
