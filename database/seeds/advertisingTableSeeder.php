<?php

use Illuminate\Database\Seeder;

class advertisingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('advertisings')
        ->insert([
        [
            'name' => 'Press',
            'name_salesforce' => "Press"
        ],
        [
            'name' => 'Coveted',
            'name_salesforce' => "Coveted"
        ],
        [
            'name' => 'Blogs',
            'name_salesforce' => "Blogs"
        ],
        ]);
    }
}
