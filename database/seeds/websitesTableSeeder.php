<?php

use Illuminate\Database\Seeder;

class websitesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('websites')
        ->insert([
        [
            'name' => 'Chat Website',
            'name_salesforce' => 'Chat Website',
        ],
        [
            'name' => 'Form',
            'name_salesforce' => 'Forms',
        ],
        ]);
    }
}
