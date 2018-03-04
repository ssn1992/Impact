<?php

use Illuminate\Database\Seeder;

class sourcesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sources')
       ->insert([
        [
            'name'              => 'Website',
            "name_salesforce"   => 'Website',
        ],
        [
            'name'              => 'Advertising',
            "name_salesforce"   => 'Advertising',
        ],
        [
            'name'              => 'Blogs',
            "name_salesforce"   => 'Blogs',
        ],
        [
            'name'              => 'Email',
            "name_salesforce"   => 'Email',
        ],
        [
            'name'              => 'Platforms',
            "name_salesforce"   => 'Plataforms',
        ],
        [
            'name'              => 'Social Network',
            "name_salesforce"   => 'Social Network',
        ],
        [
            'name'              => 'Partner Brands',
            "name_salesforce"   => 'Partner Brands',
        ],
        [
            'name'              => 'Tradeshow',
            "name_salesforce"   => 'Tradeshow',
        ],
        [
            'name'              => 'Direct Contact',
            "name_salesforce"   => 'Direct Contact',
        ],
        [
            'name'              => 'Showroom',
            "name_salesforce"   => 'Showroom',
        ],
        [
            'name'              => 'Cross',
            "name_salesforce"   => 'Cross',
        ]
       ]);
    }
}
