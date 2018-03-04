<?php

use Illuminate\Database\Seeder;

class SocialNetwork_subType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('social_network_sub_types')
            ->insert([
                [
                    'name' => 'Brand',

                ],
                [
                    'name' => 'Ambassador',

                ],
                [
                    'name' => 'Blogger',

                ],
            ]);
    }
}
