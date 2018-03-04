<?php

use Illuminate\Database\Seeder;

class lead_typesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lead_types')
        ->insert([
        [
            'name' => 'Lead',
        
        ],
        [
            'name' => 'Lead Commercial',
        
        ]
        ]);
    }
}
