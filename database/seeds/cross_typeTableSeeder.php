<?php

use Illuminate\Database\Seeder;

class cross_typeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cross_types')
            ->insert([
                [
                    'name' => 'Cross Selling',
                ]
            ]);
    }
}
