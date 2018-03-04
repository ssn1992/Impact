<?php

use Illuminate\Database\Seeder;

class emailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('emails')
        ->insert([
        [
            'name' => 'Direct Email',
            "name_salesforce" => 'Direct Email',
        ],
        [
            'name' => 'Email Marketing',
            "name_salesforce" => 'Email Marketing',
        ],
        [
            'name' => 'Cross',
            "name_salesforce" => 'Cross',
        ],
        [
            'name' => 'Newsletter',
            "name_salesforce" => 'Newsletters',
        ]
        ]);
    }
}
