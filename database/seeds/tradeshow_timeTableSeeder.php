<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class tradeshow_timeTableSeeder extends Seeder
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
        DB::table('tradeshow_times')
        ->insert([
        [
            'name'                  => 'Fall',
            'dateTo'                => Carbon::now()->format('Y-m-d H:i:s'),
            'dateFrom'              => Carbon::now()->format('Y-m-d H:i:s'),
        ],
        [
            'name'                  => 'Spring',
            'dateTo'                => Carbon::now()->format('Y-m-d H:i:s'),
            'dateFrom'              => Carbon::now()->format('Y-m-d H:i:s'),
        ],
        [
            'name'                  => 'January',
            'dateTo'                => Carbon::now()->format('Y-m-d H:i:s'),
            'dateFrom'              => Carbon::now()->format('Y-m-d H:i:s'),
        ],
        [
            'name'                  => 'September',
            'dateTo'                => Carbon::now()->format('Y-m-d H:i:s'),
            'dateFrom'              => Carbon::now()->format('Y-m-d H:i:s'),
        ],
        ]);
         * */
    }
}
