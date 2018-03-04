<?php

use Illuminate\Database\Seeder;

class lead_token_brandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lead_token_brands')
        ->insert([
        [
            'token' => 'xv6Cv8BC3ng8uJ1RxZYRNbYpEXx5yNOg',
            'brand_id' => 1,
        
        ],
        [
            'token' => '3QuL5TpfUNhH3KovVx4MGSOYkvNWIxCj',
            'brand_id' => 2,
        
        ],
        [
            'token' => '1S73KKjvXjf8rCMr6IJ5Wi7pcalzRXo7',
            'brand_id' => 3,
        
        ],
        [
            'token' => 'R5x8jhBRKUGXmpTLNT9BxYXLfLRfuRzP',
            'brand_id' => 4,
        
        ],
        [
            'token' => '4fdjTefMnXEJHMT4MaHATg1eRmD3FSOF',
            'brand_id' => 5,
        
        ],
        [
            'token' => '45hMRM4dTLdIc3xKqODxUhtNS2cWnLjo',
            'brand_id' => 6,
        
        ],
        [
            'token' => '8xTJeLo9b8aVLwUvuDXq2nqBJmTHGvSY',
            'brand_id' => 7,
        
        ],
        [
            'token' => 'c3PUjlyY1vUgLuRaqc8MSgBbj2Z00nJC',
            'brand_id' => 8,
        
        ],
        [
            'token' => 'E6d5AhJ7vMN5l4anPT3NoNl8lQQLqMDn',
            'brand_id' => 9,
        
        ],
        [
            'token' => 'kDqLPsoQJ4olsXfhkPSfCr2g3PMq267D',
            'brand_id' => 10,
        
        ],
        [
            'token' => 'LiPE5fydqdu5lmC0g2LNFBTf0Osf3jvy',
            'brand_id' => 11,
        
        ],
        [
            'token' => 'ZqrNtDWNEtUcTaf8fczzYpPMdHewUwpt',
            'brand_id' => 12,
        
        ],


        ]);
    }
}
