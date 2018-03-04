<?php

use Illuminate\Database\Seeder;

class ctasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('ctas')
       ->insert([
        [
            'name' => 'Request Now',
        ],
        [
            'name' => 'Order Now',
        ],
        [
            'name' => 'Buy Now',
        ],
        [
            'name' => 'Get Price',
        ],
        [
            'name' => 'Get Info',
        ],
        [
            'name' => 'Download Now',
        ],
        [
            'name' => 'Request Product PDF',
        ],
        [
            'name' => 'Request 3D',
        ],
        [
            'name' => 'Get Stock List',
        ],
        [
            'name' => 'Get Price List',
        ]
       ]);
    }
}
