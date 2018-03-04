<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\SoftDeletes;


class lead_RequestTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Lead_request::class,500)->create();
    }
}
