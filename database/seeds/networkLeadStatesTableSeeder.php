<?php

use Illuminate\Database\Seeder;

class networkLeadStatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('network_lead_states')
        ->insert([
            [
                'name' => 'No Action',
            ],
            [
                'name' => 'Not Found',
            ],
            [
                'name' => 'Request',
            ],
            [
                'name' => 'Accepted',
            ],
        ]);
    }
}
