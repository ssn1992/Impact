<?php

use Illuminate\Database\Seeder;

class tradeshowsCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('tradeshow_categories')
         ->insert([
        [
            'name' => 'Booth',
            'name_salesforce' => 'Booth',
        ],
        [
            'name' => 'Press',
            'name_salesforce' => 'Press',
        ],
        [
            'name' => 'Partner',
            'name_salesforce' => 'Partner',
        ],
        [
            'name' => 'Marketing',
            'name_salesforce' => 'Marketing',
        ],
        ]);
    }
}
