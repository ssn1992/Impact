<?php

use Illuminate\Database\Seeder;

class typeClassTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('type_classifications')
        ->insert([
            [
                'name' => 'Internal' 
            ],
            [
                'name' => 'External' 
            ]
        ]);
    }
}
