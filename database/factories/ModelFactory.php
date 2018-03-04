<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory  $faker->lastName*/

    $factory->define(App\Models\User::class, function (Faker\Generator $faker) {
        static $password;

        return [
            'name' => $faker->name,
            'email' => $faker->unique()->safeEmail,
            'password' => $password ?: $password = bcrypt('secret'),
            'remember_token' => str_random(10),
        ];
    });


    $factory->define(\App\Models\Lead::class, function ($faker) use ($factory) {

            return [
                'email' => $faker->unique()->safeEmail,
                'first_name' => $faker->firstName,
                'last_name' => null,
            ];
        });

    $factory->define(App\Models\Lead_detail::class, function (Faker\Generator $faker) {
            static $password;

            return [
                'lead_id'       => factory(\App\Models\Lead::class)->create()->id,
                'job_position'  => $faker->jobTitle,
                'company'       => $faker->company,
                'mobile'        => $faker->e164PhoneNumber,
                'phone'         => $faker->e164PhoneNumber,
                'website'       => $faker->url,
                'address'       => $faker->streetAddress,
            ];
    });

    $factory->define(\App\Models\Lead_request::class, function ($faker) use ($factory) {

        switch (rand(1,4))
        {
            case '1':
                $country = $faker->numberBetween(1, App\Models\Country::count());
                $state = $faker->numberBetween(1, App\Models\Country_state::count());
                return [
                    'lead_id' => factory(\App\Models\Lead::class)->create()->id,
                    'brand_id' => $faker->numberBetween(1, App\Models\Brand::count()),
                    'country_id' => $country,
                    'state_id' => ($country == 234) ? $state : null ,
                    'country_detected' => $faker->country,
                    'region_detected' => $faker->city,
                    'browser_language' => $faker->country,
                    'source_id' => 1,
                    'source_categoryable_id' => 2,
                    'source_categoryable_type' => 'App\Models\Website',
                    'interested_nameable_id' => $faker->numberBetween(1, App\Models\Form::count()),
                    'interested_nameable_type' => 'App\Models\Form',
                    'interested_categoryable_id' => 1,
                    'interested_categoryable_type' => 'App\Models\Catalogue',
                    'lead_class_id' => $faker->numberBetween(1, App\Models\Lead_class::count()),
                    'lead_type_id' => $faker->numberBetween(1, App\Models\Lead_type::count()),
                    'lead_potencial' => $faker->randomNumber(4),
                    'url_origin' => $faker->url,
                    'url_converted' => $faker->url,
                    'heard_about' => $faker->domainWord,
                    'cta_id' => $faker->numberBetween(1, App\Models\Cta::count()),
                    'cta_color_id' => $faker->numberBetween(1, App\Models\Cta_color::count()),
                    'form_page_id' => $faker->numberBetween(1, App\Models\Form_page::count()),
                    'form_page_position_id' => $faker->numberBetween(1, App\Models\Form_page_position::count()),
                    'created_at' => Carbon\carbon::now()->subDays($faker->numberBetween(0, 7))->subYear($faker->numberBetween(0, 1))->subHours($faker->numberBetween(0,10))->subMinutes($faker->numberBetween(0,60)),
                    'salesforce_id'=> $faker->name,
                ];
            break;

            case '2':
                $id = $faker->numberBetween(1, App\Models\Tradeshow_tradeshow_edition::count());
                $state = $faker->numberBetween(1, App\Models\Country_state::count());
                $country = $faker->numberBetween(1, App\Models\Country::count());
                $lead = factory(\App\Models\Lead_detail::class)->create();
                return [
                    'lead_id' => $lead->lead_id,
                    'brand_id' => $faker->numberBetween(1, App\Models\Brand::count()),
                    'country_id' => $country,
                    'state_id' => ($country == 234) ? $state : null ,
                    'country_detected' => $faker->country,
                    'region_detected' => $faker->city,
                    'browser_language' => $faker->country,
                    'source_id' => 8,
                    'source_categoryable_id' => 1,
                    'source_categoryable_type' => 'App\Models\Tradeshow_category',
                    'interested_nameable_id' => $id,
                    'interested_nameable_type' => 'App\Models\Tradeshow',
                    'interested_categoryable_id' => $id,
                    'interested_categoryable_type' => 'App\Models\Tradeshow_tradeshow_edition',
                    'lead_class_id' => $faker->numberBetween(1, App\Models\Lead_class::count()),
                    'lead_type_id' => $faker->numberBetween(1, App\Models\Lead_type::count()),
                    'lead_potencial' => $faker->randomNumber(4),
                    'url_origin' => $faker->url,
                    'url_converted' => $faker->url,
                    'heard_about' => $faker->domainWord,
                    'cta_id' => $faker->numberBetween(1, App\Models\Cta::count()),
                    'cta_color_id' => $faker->numberBetween(1, App\Models\Cta_color::count()),
                    'form_page_id' => $faker->numberBetween(1, App\Models\Form_page::count()),
                    'form_page_position_id' => $faker->numberBetween(1, App\Models\Form_page_position::count()),
                    'created_at' => Carbon\carbon::now()->subDays($faker->numberBetween(0, 7))->subHours($faker->numberBetween(0,10))->subMinutes($faker->numberBetween(0,60)),
                    'salesforce_id'=> $faker->name,
                ];
            break;

            case '3':
            $country = $faker->numberBetween(1, App\Models\Country::count());
            $state = $faker->numberBetween(1, App\Models\Country_state::count());
                return [
                    'lead_id' => factory(\App\Models\Lead::class)->create()->id,
                    'brand_id' => $faker->numberBetween(1, App\Models\Brand::count()),
                    'country_id' => $country,
                    'state_id' => ($country == 234) ? $state : null ,
                    'country_detected' => $faker->country,
                    'region_detected' => $faker->city,
                    'browser_language' => $faker->country,
                    'source_id' => 3,
                    'source_categoryable_id' => $faker->numberBetween(1, App\Models\Blog::count()),
                    'source_categoryable_type' => 'App\Models\Blog',
                    'interested_nameable_id' => 24,
                    'interested_nameable_type' => 'App\Models\Form',
                    'interested_categoryable_id' =>  $faker->numberBetween(1, App\Models\Ebook::count()),
                    'interested_categoryable_type' => 'App\Models\Ebook',
                    'lead_class_id' => $faker->numberBetween(1, App\Models\Lead_class::count()),
                    'lead_type_id' => $faker->numberBetween(1, App\Models\Lead_type::count()),
                    'lead_potencial' => $faker->randomNumber(4),
                    'url_origin' => $faker->url,
                    'url_converted' => $faker->url,
                    'heard_about' => $faker->domainWord,
                    'cta_id' => $faker->numberBetween(1, App\Models\Cta::count()),
                    'cta_color_id' => $faker->numberBetween(1, App\Models\Cta_color::count()),
                    'form_page_id' => $faker->numberBetween(1, App\Models\Form_page::count()),
                    'form_page_position_id' => $faker->numberBetween(1, App\Models\Form_page_position::count()),
                    'created_at' => Carbon\carbon::now()->subDays($faker->numberBetween(0, 7))->subHours($faker->numberBetween(0,10))->subMinutes($faker->numberBetween(0,60)),
                    'salesforce_id'=> $faker->name,
                ];
            break;

            case '4':
            $country = $faker->numberBetween(1, App\Models\Country::count());
            $state = $faker->numberBetween(1, App\Models\Country_state::count());
            return [
                'lead_id' => $faker->numberBetween(1, App\Models\User::count()),
                'brand_id' => $faker->numberBetween(1, App\Models\Brand::count()),
                'country_id' => $country,
                'state_id' => ($country == 234) ? $state : null ,
                'country_detected' => $faker->country,
                'region_detected' => $faker->city,
                'browser_language' => $faker->country,
                'source_id' => 1,
                'source_categoryable_id' => 2,
                'source_categoryable_type' => 'App\Models\Website',
                'interested_nameable_id' => $faker->numberBetween(1, App\Models\Form::count()),
                'interested_nameable_type' => 'App\Models\Form',
                'interested_categoryable_id' => 1,
                'interested_categoryable_type' => 'App\Models\Catalogue',
                'lead_class_id' => $faker->numberBetween(1, App\Models\Lead_class::count()),
                'lead_type_id' => $faker->numberBetween(1, App\Models\Lead_type::count()),
                'lead_potencial' => $faker->randomNumber(4),
                'url_origin' => $faker->url,
                'url_converted' => $faker->url,
                'heard_about' => $faker->domainWord,
                'cta_id' => $faker->numberBetween(1, App\Models\Cta::count()),
                'cta_color_id' => $faker->numberBetween(1, App\Models\Cta_color::count()),
                'form_page_id' => $faker->numberBetween(1, App\Models\Form_page::count()),
                'form_page_position_id' => $faker->numberBetween(1, App\Models\Form_page_position::count()),
                'created_at' => Carbon\carbon::now()->subDays($faker->numberBetween(0, 7))->subHours($faker->numberBetween(0,10))->subMinutes($faker->numberBetween(0,60)),
                'salesforce_id'=> $faker->name,
            ];
            break;
        }
    });
