<?php

use Illuminate\Database\Seeder;

class platformsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('platforms')
         ->insert([
        [
            'name' => 'ArquiExpo',
            'name_salesforce' => 'ArquiExpo',
        ],
        [   
            'name' => 'MOM',
            'name_salesforce' => 'MOM',
        ],
        [
            'name' => 'ArquiProduct',
            'name_salesforce' => 'ArquiProduct',
        ],
        [
            'name' => 'Architonic',
            'name_salesforce' => 'Architonic',
        ],
        [
            'name' => 'interiordesign.net',
            'name_salesforce' => 'interiordesign.net',
        ],
        [
            'name' => 'Style Park',
            'name_salesforce' => 'Style Park',
        ],
        [
            'name' => 'Deco Finder',
            'name_salesforce' => 'Deco Finder',
        ],
        [
            'name' => 'Treniq',
            'name_salesforce' => 'Treniq',
        ],
        [
            'name' => '1st Dibs',
            'name_salesforce' => '1st Dibs',
        ],
        [
            'name' => 'We Transfer',
            'name_salesforce' => 'We Transfer',
        ],
        [
            'name' => 'Press Loft',
            'name_salesforce' => 'Press Loft',
        ],
        [
            'name' => 'Webuzz Impact',
            'name_salesforce' => 'Webuzz Impact',
        ],
        [
            'name' => 'Webuzz Insplosion',
            'name_salesforce' => 'Webuzz Insplosion',
        ],
       ]);
    }
}
