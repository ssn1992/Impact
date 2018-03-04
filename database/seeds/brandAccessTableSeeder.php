<?php

use Illuminate\Database\Seeder;

class brandAccessTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brand_accesses')
        ->insert([
        [
            'brand_id' => "1",
            'brand_access' => "1",
        ],
        [
            'brand_id' => "2",
            'brand_access' => "2",
        ],
        [
            'brand_id' => "3",
            'brand_access' => "3",
        ],
        [
            'brand_id' => "4",
            'brand_access' => "4",
        ],
        [
            'brand_id' => "5",
            'brand_access' => "5",
        ],
        [
            'brand_id' => "6",
            'brand_access' => "6",
        ],
        [
            'brand_id' => "7",
            'brand_access' => "7",
        ],
        [
            'brand_id' => "8",
            'brand_access' => "8",
        ],
        [
            'brand_id' => "9",
            'brand_access' => "9",
        ],
        [
            'brand_id' => "10",
            'brand_access' => "10",
        ],
        [
            'brand_id' => "11",
            'brand_access' => "11",
        ],
        [
            'brand_id' => "12",
            'brand_access' => "12",
        ],
        [
            'brand_id' => "13",
            'brand_access' => "13",
        ],
        [
            'brand_id' => "14",
            'brand_access' => "14",
        ],
        [
            'brand_id' => "15",
            'brand_access' => "15",
        ],
        [
            'brand_id' => "2",
            'brand_access' => "3",
        ],
        [
            'brand_id' => "3",
            'brand_access' => "2",
        ],
        [
            'brand_id' => "2",
            'brand_access' => "10",
        ],
        [
            'brand_id' => "10",
            'brand_access' => "2",
        ],
        [
            'brand_id' => "7",
            'brand_access' => "8",
        ],
        [
            'brand_id' => "8",
            'brand_access' => "7",
        ],
        ]);
    }
}
