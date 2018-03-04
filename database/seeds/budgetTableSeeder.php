<?php

use Illuminate\Database\Seeder;

class budgetTableSeeder extends Seeder
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
         */
		for ($brand=1; $brand <= 15; $brand++)
		{
			for ($year=2017; $year >= 2016 ; $year--)
			{ 
				
				for ($i=1; $i <= 52; $i++) 
				{
					DB::table('budgets')
					->insert([
						[
						'year'     => $year,
						'week'     => "$i",
						"price"    => rand(0,1) ,
						"brand_id" => "$brand",
						]
					]);
				}
			}
		}

	}


}
