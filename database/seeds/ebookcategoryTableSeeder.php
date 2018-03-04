<?php

use Illuminate\Database\Seeder;

class ebookcategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ebook_categories')
        ->insert([
        [
            'name' => 'Floor Lamps',
        ],
        [
            'name' => 'Bedroom',
        ],
        [
            'name' => 'Dining Room',
        ],
        [
            'name' => 'Lighting',
        ],
        [
            'name' => 'Chairs',
        ],
        [
            'name' => 'Home Inspirations',
        ],
        [
            'name' => 'Living Room',
        ],
        [
            'name' => 'Inspirations Home Decor',
        ],
        [
            'name' => 'Buffets and Cabinets',
        ],
        [
            'name' => 'Home Decor Ideas',
        ],
        [
            'name' => 'Bathrooms',
        ],
        [
            'name' => 'Chandeliers',
        ],
        [
            'name' => 'Rugs',
        ],
        [
            'name' => 'Sofas',
        ],
        [
            'name' => 'Mirrors',
        ],
        [
            'name' => 'Console Tables',
        ],
        ]);
    }
}
