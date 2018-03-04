<?php

use Illuminate\Database\Seeder;

class showroomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('showrooms')
       ->insert([
        [
            'name' => 'Covet House',
            'name_salesforce' => 'Covet House',
        ],
        [
            'name' => 'Covet London',
            'name_salesforce' => 'Covet London',
        ],
       ]);
    }
}
