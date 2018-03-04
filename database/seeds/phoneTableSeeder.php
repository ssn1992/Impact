<?php

use Illuminate\Database\Seeder;

class phoneTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phones')
        ->insert([
        [
            'name' => 'Call',
        ],
        [
            'name' => 'WhatsApp',
        ],
        [
            'name' => 'Wechat',
        ],
        [
            'name' => 'Skype',
        ],
        [
            'name' => 'Line',
        ],
        ]);
    }
}
