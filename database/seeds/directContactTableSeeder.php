<?php

use Illuminate\Database\Seeder;

class directContactTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('direct_contacts')
        ->insert([
        [
            'name' => 'Phone',
            'name_salesforce' => 'Phone',
        ],
        ]);
    }
}
