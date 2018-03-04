<?php

use Illuminate\Database\Seeder;

class partner_brand_typeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('partner_brand_types')
        ->insert([
        [
            'name' => 'Intern',
        ],
        [
            'name' => 'External',
        ]
        ]);
    }
}
