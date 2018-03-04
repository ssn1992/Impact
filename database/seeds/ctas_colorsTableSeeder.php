<?php

use Illuminate\Database\Seeder;

class ctas_colorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cta_colors')
       ->insert([
        [
            'name' => 'Black',
        ],
        [
            'name' => 'White',
        ],
        [
            'name' => 'Grey',
        ],
        [
            'name' => 'Gold',
        ],
        [
            'name' => 'Red',
        ],
        [
            'name' => 'Orange',
        ],
        [
            'name' => 'Green',
        ],
        [
            'name' => 'Blue',
        ],
        [
            'name' => 'Indigo',
        ],
        [
            'name' => 'Violet',
        ]
       ]);
    }
}
