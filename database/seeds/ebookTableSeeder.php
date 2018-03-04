<?php

use Illuminate\Database\Seeder;

class ebookTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ebooks')
        ->insert([
        [
            'name' => 'Ebook-100-Modern-Floor-Lamps',
            "ebook_category_id" => 1,
        ],
        [
            'name' => 'bedroom ideas-final',
            "ebook_category_id" => 2,
        ],
        [
            'name' => '100-Dining-Room-Ideas',
            "ebook_category_id" => 3,
        ],
        [
            'name' => '100-Lighting-ideas-for-Dining-Room',
            "ebook_category_id" => 4,
        ],
        [
            'name' => '100_modern_chairs',
            "ebook_category_id" => 5,
        ],
        [
            'name' => '100-home-decor-ideas',
            "ebook_category_id" => 6,
        ],
        [
            'name' => 'LivingRoomIdeas',
            "ebook_category_id" => 7,
        ],
        [
            'name' => 'ebook-100-buffets-and-cabinets',
            "ebook_category_id" => 9,
        ],
        [
            'name' => '60-modern-dining-tables',
            "ebook_category_id" => 3,
        ],
        [
            'name' => '100-home-inpiration-ideas',
            "ebook_category_id" => 6,
        ],
        [
            'name' => '100-mustsee-luxurybathrooms-ideas',
            "ebook_category_id" => 12,
        ],
        [
            'name' => '100-home-design-ideas',
            "ebook_category_id" => 6,
        ],
        [
            'name' => 'ebook-interiordesignmagazines',
            "ebook_category_id" => 6,
        ],
        [
            'name' => '100-Kids-Bedroom-Ideas',
            "ebook_category_id" => 2,
        ],
        [
            'name' => 'MasterBedroomIdeas-Ebook',
            "ebook_category_id" => 2,
        ],
        [
            'name' => 'ebook-100-chandelier-by-luxxu-blog',
            "ebook_category_id" => 15,
        ],
        [
            'name' => '100-mustsee-wallmirrors-ideas',
            "ebook_category_id" => 16,
        ],
        [
            'name' => '100-contemporayrugs',
            "ebook_category_id" => 16,
        ],
        [
            'name' => '100-Contemporary-Floor-Lamps',
            "ebook_category_id" => 1,
        ],
        [
            'name' => 'IdeasForYourLivingRoom',
            "ebook_category_id" => 7,
        ],
        [
            'name' => '100-ebook_modernsofas',
            "ebook_category_id" => 16,
        ],
        [
            'name' => '100-modern-console-tables',
            "ebook_category_id" => 16,
        ],
        ]);
    }
}