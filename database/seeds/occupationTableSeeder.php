<?php

use Illuminate\Database\Seeder;

class occupationTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('occupations')
		->insert([
			[
				'name' => "Agent",
			],
			[
				'name' => "Architect",
			],
			[
				'name' => "Dealer",
			],
			[
				'name' => "Designer",
			],
			[
				'name' => "Interior Designer",
			],
			[
				'name' => "Manufacturer",
			],
			[
				'name' => "Press",
			],
			[
				'name' => "Retail",
			],
			[
				'name' => "Student",
			],
			[
				'name' => "Other",
			],
		]);
	}
}