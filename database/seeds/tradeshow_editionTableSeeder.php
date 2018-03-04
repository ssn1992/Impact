<?php

use Illuminate\Database\Seeder;

class tradeshow_editionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         *

        DB::table('tradeshow_editions')
        ->insert([
        [
            'name' => 'Paris',
        ],
        [
            'name' => 'Milao',
        ],
        [
            'name' => 'Italia',
        ],
        [
            'name' => 'ChinaTown',
        ],
        [
            'name' => 'New York',
        ],
        ]);


        DB::table('tradeshow_tradeshow_edition')
        ->insert([
        [
            'tradeshow_id'          => '1',
            'tradeshow_edition_id'  => '1',
            'tradeshow_times_id'    => '1',
        ],
        [
            'tradeshow_id'          => '2',
            'tradeshow_edition_id'  => '2',
            'tradeshow_times_id'    => '2',
        ],
        [
            'tradeshow_id'          => '3',
            'tradeshow_edition_id'  => '3',
            'tradeshow_times_id'    => '3',
        ],
        [
            'tradeshow_id'          => '4',
            'tradeshow_edition_id'  => '4',
            'tradeshow_times_id'    => '4',
        ],
        [
            'tradeshow_id'          => '5',
            'tradeshow_edition_id'  => '1',
            'tradeshow_times_id'    => '1',
        ],
        [
            'tradeshow_id'          => '6',
            'tradeshow_edition_id'  => '2',
            'tradeshow_times_id'    => '2',
        ],
        [
            'tradeshow_id'          => '7',
            'tradeshow_edition_id'  => '3',
            'tradeshow_times_id'    => '3',
        ],
        [
            'tradeshow_id'          => '8',
            'tradeshow_edition_id'  => '4',
            'tradeshow_times_id'    => '4',
        ],
        [
            'tradeshow_id'          => '9',
            'tradeshow_edition_id'  => '1',
            'tradeshow_times_id'    => '4',
        ],
        [
            'tradeshow_id'          => '10',
            'tradeshow_edition_id'  => '1',
            'tradeshow_times_id'    => '1',
        ],
        [
            'tradeshow_id'          => '11',
            'tradeshow_edition_id'  => '2',
            'tradeshow_times_id'    => '2',
        ],
        [
            'tradeshow_id'          => '12',
            'tradeshow_edition_id'  => '3',
            'tradeshow_times_id'    => '3',
        ],
        [
            'tradeshow_id'          => '13',
            'tradeshow_edition_id'  => '4',
            'tradeshow_times_id'    => '4',
        ],
        [
            'tradeshow_id'          => '14',
            'tradeshow_edition_id'  => '1',
            'tradeshow_times_id'    => '4',
        ],
        [
            'tradeshow_id'          => '15',
            'tradeshow_edition_id'  => '1',
            'tradeshow_times_id'    => '4',
        ],
        ]);
         * */
    }
}
