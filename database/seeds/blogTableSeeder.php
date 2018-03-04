<?php

use Illuminate\Database\Seeder;

class blogTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blogs')
        ->insert([
            [
                'name'              =>  'Buffets and Cabinets',
                'brand_id'          =>  1,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Contemporary Lighting',
                'brand_id'          =>  7,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Contemporary Rugs',
                'brand_id'          =>  2,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Lighting Stores',
                'brand_id'          =>  7,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Modern Chairs',
                'brand_id'          =>  2,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Modern Console Tables',
                'brand_id'          =>  1,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Modern Dining Tables',
                'brand_id'          =>  1,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Modern Floor Lamps',
                'brand_id'          =>  7,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Modern Sofas',
                'brand_id'          =>  2,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Coffee and Side Tables',
                'brand_id'          =>  1,
                'blog_category_id'  =>  3,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Kids Room Ideas',
                'brand_id'          =>  4,
                'blog_category_id'  =>  2,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Living Room Ideas',
                'brand_id'          =>  7,
                'blog_category_id'  =>  2,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Dining Room Ideas',
                'brand_id'          =>  2,
                'blog_category_id'  =>  2,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Luxury Bathrooms',
                'brand_id'          =>  10,
                'blog_category_id'  =>  2,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Master Bedroom Ideas',
                'brand_id'          =>  1,
                'blog_category_id'  =>  2,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Boca do Lobo Blog',
                'brand_id'          =>  1,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Brabbu Blog',
                'brand_id'          =>  2,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Unique',
                'brand_id'          =>  7,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Maison Valentina Blog',
                'brand_id'          =>  10,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Luxxu Blog',
                'brand_id'          =>  9,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Mid centrury Furniture',
                'brand_id'          =>  8,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Covet House blog',
                'brand_id'          =>  5,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Circu Blog',
                'brand_id'          =>  4,
                'blog_category_id'  =>  6,
                'level_id'          =>  2,
            ],
            /*[
                'name'              =>  'Dining and Living Room',
                'brand_id'          =>  KK,
                'blog_category_id'  =>  2,
                'level_id'          =>  5,
            ],
            [
                'name'              =>  'Bedroom Ideas',
                'brand_id'          =>  '',
                'blog_category_id'  =>  2,
                'level_id'          =>  2,
            ],
            [
                'name'              =>  'Wall Mirrors',
                'brand_id'          =>  KK,
                'blog_category_id'  =>  3,
                'level_id'          =>  2,
            ],*/
        ]);
    }
}
