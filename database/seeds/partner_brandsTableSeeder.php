<?php

use Illuminate\Database\Seeder;

class partner_brandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('partner_brands')
        ->insert([
        [
            'name' => 'Boca do Lobo',
            "name_salesforce" => 'Boca do Lobo',
        ],
        [
            'name' => 'Delightfull',
            "name_salesforce" => 'Delightfull',
        ],
        [
            'name' => 'Brabbu',
            "name_salesforce" => 'Brabbu',
        ],
        [
            'name' => 'Covet House',
            "name_salesforce" => 'Covet House',
        ],
        [
            'name' => 'Maison Valentina',
            "name_salesforce" => 'Maison Valentina',
        ],
        [
            'name' => 'Luxxu',
            "name_salesforce" => 'Luxxu',
        ],
        [
            'name' => 'Circu',
            "name_salesforce" => 'Circu',
        ],
        [
            'name' => 'Essential Home',
            "name_salesforce" => 'Essential Home',
        ],
        ]);
    }
}
