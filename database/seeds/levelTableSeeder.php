<?php

use Illuminate\Database\Seeder;

class levelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('levels')
        ->insert([
            [
                "name" => "Nivel 1",
            ],
            [
                "name" => "Nivel 1.1",
            ],
            [
                "name" => "Nivel 2",
            ],
            [
                "name" => "Nivel 3",
            ],
            [
                "name" => "Nivel 4",
            ],
            [
                "name" => "Nivel 5",
            ],
        ]);
    }
}