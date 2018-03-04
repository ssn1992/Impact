<?php

use Illuminate\Database\Seeder;

class lead_classesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('lead_classes')
        ->insert([
        [
            'name' => 'Top',
        
        ],
        [
            'name' => 'Target',
        
        ],
        [
            'name' => 'Cliente marca',
        
        ],
        [
            'name' => 'Cliente grupo',
        
        ]
        ]);
    }
}
