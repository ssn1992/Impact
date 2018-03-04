<?php

use Illuminate\Database\Seeder;

class country_continentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('country_continents')
       ->insert([
        [
            'name' => 'Africa',
        ],
        [
            'name' => 'America',
        ],
        [
            'name' => 'Asia',
        ],
        [
            'name' => 'Europe',
        ],
        [
            'name' => 'Oceania',
        ],
        [
            'name' => 'Antártica'
        ],
       ]);
    }
}
