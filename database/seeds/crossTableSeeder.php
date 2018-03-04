<?php

use Illuminate\Database\Seeder;

class crossTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('social_network_crosses')
        ->insert([
        [
            'social_network_id' => 1,
            
        ],
        [
            'social_network_id' => 2,
            
        ],
        [
            'social_network_id' => 3,
            
        ],
        [
            'social_network_id' => 4,
            
        ],
        [
            'social_network_id' => 5,
            
        ],
        [
            'social_network_id' => 6,
            
        ],
        [
            'social_network_id' => 17,
            
        ],
        [
            'social_network_id' => 18,
            
        ],
        ]);

        /**
         *
        DB::table('network_leads')
        ->insert([
        [
            'lead_id' => "1",
            'social_network_id' => "1",
            'link' => "http://www.google.pt",
        ]
        ]);

        DB::table('network_crosses')
        ->insert([
        [
            'user_id' => '1',
            'lead_id' => "1",
            "network_lead_state_id" => "1",
            'network_lead_id' => "1",
            'brand_id' => "1",
        ]
        ]);
         * */
    }
}
