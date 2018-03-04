<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\Models\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],
    
    'sendinblue' => [
        'url' => 'https://api.sendinblue.com/v2.0',
        'key' => env('SENDINBLUE_KEY'),
     ],

    'salesforce' => [
        'client_id'     => env('SALESFORCE_CLIENT_ID'),
        'client_secret' => env('SALESFORCE_CLIENT_SECRET'),
        'username'      => env('SALESFORCE_USERNAME'),
        'password'      => env('SALESFORCE_PASSWORD'),
        'grant_type'    => env('SALESFORCE_GRANT_TYPE', 'password'),
        'url'           => env('SALESFORCE_URL', 'https://login.salesforce.com/services/oauth2/token'),
        'srv_url'       => env('SALESFORCE_SRV_URL', '/services/data/v20.0/'), 
    ],

    'geoip' => [
        'url' => env('GEOIP_URL', 'http://freegeoip.net/json/'),
    ]

];
