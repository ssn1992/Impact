<?php

use Illuminate\Database\Seeder;

class brandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')
        ->insert([
        [
            'name' => 'Boca do Lobo',
            'abbr' => 'BL',
            'name_salesforce' => 'Boca do Lobo',
        ],
        [
            'name' => 'BRABBU',
            'abbr' => 'BB',
            'name_salesforce' => 'BRABBU',
        ],
        [
            'name' => 'BRABBU contract',
            'abbr' => 'BBC',
            'name_salesforce' => 'Not Provided',
        ],
         [
            'name' => 'Circu',
            'abbr' => 'CC',
            'name_salesforce' => 'Circu',
        ],
        [
            'name' => 'COVET House',
            'abbr' => 'CH',
            'name_salesforce' => 'COVET House',
        ],
        [
            'name' => 'Coveted Edition',
            'abbr' => 'CHE',
            'name_salesforce' => 'Not Provided',
        ],
        [
            'name' => 'DelightFULL',
            'abbr' => 'DL',
            'name_salesforce' => 'Delightfull',
        ],
        [
            'name' => 'Essential Home',
            'abbr' => 'EH',
            'name_salesforce' => 'Essential Home',
        ],
        [
            'name' => 'Luxxu',
            'abbr' => 'LX',
            'name_salesforce' => 'Luxxu',
        ],
        [
            'name' => 'Maison Valentina',
            'abbr' => 'MV',
            'name_salesforce' => 'Maison Valentina',
        ],
        [
            'name' => 'PULLCAST',
            'abbr' => 'PL',
            'name_salesforce' => 'PullCast',
        ],
        [
            'name' => 'RugSociety',
            'abbr' => 'RS',
            'name_salesforce' => 'Rug&#39;Society',
        ],
        [
            'name' => 'Coveted',
            'abbr' => 'CVT',
            'name_salesforce' => 'Covet Edition',
        ],
        [
            'name' => 'Weblog',
            'abbr' => 'WB',
            'name_salesforce' => 'Not Provided',
        ],
        [
            'name' => 'Webuzz',
            'abbr' => 'WBZ',
            'name_salesforce' => 'Not Provided',
        ],
        ]);
    }
}