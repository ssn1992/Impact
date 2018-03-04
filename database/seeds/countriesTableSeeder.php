<?php

use Illuminate\Database\Seeder;

class countriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')
        ->insert([
        [
            'name' => 'Afghanistan',
            'iso' => 'AF',
            'continent_id' =>3 ,
        ],
        [
            'name' => 'Aland Islands',
            'iso' => 'AX',
            'continent_id' =>4 ,
        ],
        [
            'name' => 'Albania',
            'iso' => 'AL',
            'continent_id' =>4 ,
        ],
       [
            'name' => 'Algeria',
            'iso' => 'DZ',
            'continent_id' =>1 ,
        ],
        [
            'name' => 'American Samoa',
            'iso' => 'AS',
            'continent_id' => 5,
        ],
        [
            'name' => 'Andorra',
            'iso' => 'AD',
            'continent_id' =>4 ,
        ],
        [
            'name' => 'Angola',
            'iso' => 'AO',
            'continent_id' =>1 ,
        ],
        [
            'name' => 'Anguilla',
            'iso' => 'AI',
            'continent_id' =>2 ,
        ],
        [
            'name' => 'Antarctica',
            'iso' => 'AQ',
            'continent_id' => 6,
        ],
        [
            'name' => 'Antigua And Barbuda',
            'iso' => 'AG',
            'continent_id' => 2,
        ],
        [
            'name' => 'Argentina',
            'iso' => 'AR',
            'continent_id' =>2 ,
        ],
        [
            'name' => 'Armenia',
            'iso' => 'AM',
            'continent_id' => 3,
        ],
        [
            'name' => 'Aruba',
            'iso' => 'AW',
            'continent_id' => 2,
        ],
        [
            'name' => 'Australia',
            'iso' => 'AU',
            'continent_id' => 5,
        ],
        [
            'name' => 'Austria',
            'iso' => 'AT',
            'continent_id' => 4,
        ],
        [
            'name' => 'Azerbaijan',
            'iso' => 'AZ',
            'continent_id' => 3,
        ],
        [
            'name' => 'Bahamas',
            'iso' => 'BS',
            'continent_id' => 2,
        ],
        [
            'name' => 'Bahrain',
            'iso' => 'BH',
            'continent_id' => 3,
        ],
        [
            'name' => 'Bangladesh',
            'iso' => 'BD',
            'continent_id' => 3,
        ],
        [
            'name' => 'Barbados',
            'iso' => 'BB',
            'continent_id' => 2,
        ],
        [
            'name' => 'Belarus',
            'iso' => 'BY',
            'continent_id' => 4,
        ],
        [
            'name' => 'Belgium',
            'iso' => 'BE',
            'continent_id' => 4,
        ],
        [
            'name' => 'Belize',
            'iso' => 'BZ',
            'continent_id' => 2,
        ],
        [
            'name' => 'Benin',
            'iso' => 'BJ',
            'continent_id' => 1,
        ],
        [
            'name' => 'Bermuda',
            'iso' => 'BM',
            'continent_id' => 2,
        ],
        [
            'name' => 'Bhutan',
            'iso' => 'BT',
            'continent_id' => 3,
        ],
        [
            'name' => 'Bolivia',
            'iso' => 'BO',
            'continent_id' => 2,
        ],
        [
            'name' => 'Bosnia And Herzegovina',
            'iso' => 'BA',
            'continent_id' => 4,
        ],
        [
            'name' => 'Botswana',
            'iso' => 'BW',
            'continent_id' => 1,
        ],
        [
            'name' => 'Bouvet Island',
            'iso' => 'BV',
            'continent_id' => 6,
        ],
        [
            'name' => 'Brazil',
            'iso' => 'BR',
            'continent_id' => 2,
        ],
        [
            'name' => 'British Indian Ocean Territory',
            'iso' => 'IO',
            'continent_id' => 1,
        ],
        [
            'name' => 'Brunei Darussalam',
            'iso' => 'BN',
            'continent_id' => 3,
        ],
        [
            'name' => 'Bulgaria',
            'iso' => 'BG',
            'continent_id' => 4,
        ],
        [
            'name' => 'Burkina Faso',
            'iso' => 'BF',
            'continent_id' => 1,
        ],
        [
            'name' => 'Burundi',
            'iso' => 'BI',
            'continent_id' => 1,
        ],
        [
            'name' => 'Cambodia',
            'iso' => 'KH',
            'continent_id' => 3,
        ],
        [
            'name' => 'Cameroon',
            'iso' => 'CM',
            'continent_id' => 1,
        ],
        [
            'name' => 'Canada',
            'iso' => 'CA',
            'continent_id' => 2,
        ],
        [
            'name' => 'Cape Verde',
            'iso' => 'CV',
            'continent_id' => 1,
        ],
        [
            'name' => 'Cayman Islands',
            'iso' => 'KY',
            'continent_id' => 2,
        ],
        [
            'name' => 'Central African Republic',
            'iso' => 'CF',
            'continent_id' => 1,
        ],
        [
            'name' => 'Chad',
            'iso' => 'TD',
            'continent_id' => 1,
        ],
        [
            'name' => 'Chile',
            'iso' => 'CL',
            'continent_id' => 2,
        ],
        [
            'name' => 'China',
            'iso' => 'CN',
            'continent_id' => 3,
        ],
        [
            'name' => 'Christmas Island',
            'iso' => 'CX',
            'continent_id' => 5,
        ],
        [
            'name' => 'Cocos (Keeling) Islands',
            'iso' => 'CC',
            'continent_id' => 5,
        ],
        [
            'name' => 'Colombia',
            'iso' => 'CO',
            'continent_id' => 2,
        ],
        [
            'name' => 'Comoros',
            'iso' => 'KM',
            'continent_id' => 1,
        ],
        [
            'name' => 'Congo',
            'iso' => 'CG',
            'continent_id' => 1,
        ],
        [
            'name' => 'Congo Democratic Republic',
            'iso' => 'CD',
            'continent_id' => 1,
        ],
        [
            'name' => 'Cook Islands',
            'iso' => 'CK',
            'continent_id' => 5,
        ],
        [
            'name' => 'Costa Rica',
            'iso' => 'CR',
            'continent_id' => 2,
        ],
        [
            'name' => 'Cote D\'Ivoire',
            'iso' => 'CI',
            'continent_id' => 1,
        ],
        [
            'name' => 'Croatia',
            'iso' => 'HR',
            'continent_id' => 4,
        ],
        [
            'name' => 'Cuba',
            'iso' => 'CU',
            'continent_id' => 2,
        ],
        [
            'name' => 'Cyprus',
            'iso' => 'CY',
            'continent_id' => 3,
        ],
        [
            'name' => 'Czech Republic',
            'iso' => 'CZ',
            'continent_id' => 4,
        ],
        [
            'name' => 'Denmark',
            'iso' => 'DK',
            'continent_id' => 4,
        ],
        [
            'name' => 'Djibouti',
            'iso' => 'DJ',
            'continent_id' => 1,
        ],
        [
            'name' => 'Dominica',
            'iso' => 'DM',
            'continent_id' => 2,
        ],
        [
            'name' => 'Dominican Republic',
            'iso' => 'DO',
            'continent_id' => 2,
        ],
        [
            'name' => 'Ecuador',
            'iso' => 'EC',
            'continent_id' => 2,
        ],
        [
            'name' => 'Egypt',
            'iso' => 'EG',
            'continent_id' => 1,
        ],
        [
            'name' => 'El Salvador',
            'iso' => 'SV',
            'continent_id' => 2,
        ],
        [
            'name' => 'Equatorial Guinea',
            'iso' => 'GQ',
            'continent_id' => 1,
        ],
        [
            'name' => 'Eritrea',
            'iso' => 'ER',
            'continent_id' => 1,
        ],
        [
            'name' => 'Estonia',
            'iso' => 'EE',
            'continent_id' => 4,
        ],
        [
            'name' => 'Ethiopia',
            'iso' => 'ET',
            'continent_id' => 1,
        ],
        [
            'name' => 'Falkland Islands (Malvinas)',
            'iso' => 'FK',
            'continent_id' => 2,
        ],
        [
            'name' => 'Faroe Islands',
            'iso' => 'FO',
            'continent_id' => 4,
        ],
        [
            'name' => 'Fiji',
            'iso' => 'FJ',
            'continent_id' => 5,
        ],
        [
            'name' => 'Finland',
            'iso' => 'FI',
            'continent_id' => 4,
        ],
        [
            'name' => 'France',
            'iso' => 'FR',
            'continent_id' => 4,
        ],
        [
            'name' => 'French Guiana',
            'iso' => 'GF',
            'continent_id' => 2,
        ],
        [
            'name' => 'French Polynesia',
            'iso' => 'PF',
            'continent_id' => 5,
        ],
        [
            'name' => 'French Southern Territories',
            'iso' => 'TF',
            'continent_id' => 6,
        ],
        [
            'name' => 'Gabon',
            'iso' => 'GA',
            'continent_id' => 1,
        ],
        [
            'name' => 'Gambia',
            'iso' => 'GM',
            'continent_id' => 1,
        ],
        [
            'name' => 'Georgia',
            'iso' => 'GE',
            'continent_id' => 3,
        ],
        [
            'name' => 'Germany',
            'iso' => 'DE',
            'continent_id' => 4,
        ],
        [
            'name' => 'Ghana',
            'iso' => 'GH',
            'continent_id' => 1,
        ],
        [
            'name' => 'Gibraltar',
            'iso' => 'GI',
            'continent_id' => 4,
        ],
        [
            'name' => 'Greece',
            'iso' => 'GR',
            'continent_id' => 4,
        ],
        [
            'name' => 'Greenland',
            'iso' => 'GL',
            'continent_id' => 2,
        ],
        [
            'name' => 'Grenada',
            'iso' => 'GD',
            'continent_id' => 2,
        ],
        [
            'name' => 'Guadeloupe',
            'iso' => 'GP',
            'continent_id' => 2,
        ],
        [
            'name' => 'Guam',
            'iso' => 'GU',
            'continent_id' => 5,
        ],
        [
            'name' => 'Guatemala',
            'iso' => 'GT',
            'continent_id' => 2,
        ],
        [
            'name' => 'Guernsey',
            'iso' => 'GG',
            'continent_id' => 4,
        ],
        [
            'name' => 'Guinea',
            'iso' => 'GN',
            'continent_id' => 1,
        ],
        [
            'name' => 'Guinea-Bissau',
            'iso' => 'GW',
            'continent_id' => 1,
        ],
        [
            'name' => 'Guyana',
            'iso' => 'GY',
            'continent_id' => 2,
        ],
        [
            'name' => 'Haiti',
            'iso' => 'HT',
            'continent_id' => 2,
        ],
        [
            'name' => 'Heard Island & Mcdonald Islands',
            'iso' => 'HM',
            'continent_id' => 5,
        ],
        [
            'name' => 'Holy See (Vatican City State)',
            'iso' => 'VA',
            'continent_id' => 4,
        ],
        [
            'name' => 'Honduras',
            'iso' => 'HN',
            'continent_id' => 2,
        ],
        [
            'name' => 'Hong Kong',
            'iso' => 'HK',
            'continent_id' => 3,
        ],
        [
            'name' => 'Hungary',
            'iso' => 'HU',
            'continent_id' => 4,
        ],
        [
            'name' => 'Iceland',
            'iso' => 'IS',
            'continent_id' => 4,
        ],
        [
            'name' => 'India',
            'iso' => 'IN',
            'continent_id' => 3,
        ],
        [
            'name' => 'Indonesia',
            'iso' => 'ID',
            'continent_id' => 3,
        ],
        [
            'name' => 'Iran, Islamic Republic Of',
            'iso' => 'IR',
            'continent_id' => 3,
        ],
        [
            'name' => 'Iraq',
            'iso' => 'IQ',
            'continent_id' => 3,
        ],
        [
            'name' => 'Ireland',
            'iso' => 'IE',
            'continent_id' => 4,
        ],
        [
            'name' => 'Isle Of Man',
            'iso' => 'IM',
            'continent_id' => 4,
        ],
        [
            'name' => 'Israel',
            'iso' => 'IL',
            'continent_id' => 3,
        ],
        [
            'name' => 'Italy',
            'iso' => 'IT',
            'continent_id' => 4,
        ],
        [
            'name' => 'Jamaica',
            'iso' => 'JM',
            'continent_id' => 2,
        ],
        [
            'name' => 'Japan',
            'iso' => 'JP',
            'continent_id' => 3,
        ],
        [
            'name' => 'Jersey',
            'iso' => 'JE',
            'continent_id' => 4,
        ],
        [
            'name' => 'Jordan',
            'iso' => 'JO',
            'continent_id' => 3,
        ],
        [
            'name' => 'Kazakhstan',
            'iso' => 'KZ',
            'continent_id' => 3,
        ],
        [
            'name' => 'Kenya',
            'iso' => 'KE',
            'continent_id' => 1,
        ],
        [
            'name' => 'Kiribati',
            'iso' => 'KI',
            'continent_id' => 5,
        ],
        [
            'name' => 'Korea, Democratic People\'s Republic of',
            'iso' => 'KP',
            'continent_id' => 3,
        ],
        [
            'name' => 'Korea, Republic of',
            'iso' => 'KR',
            'continent_id' => 3,
        ],
        [
            'name' => 'Kuwait',
            'iso' => 'KW',
            'continent_id' => 3,
        ],
        [
            'name' => 'Kyrgyzstan',
            'iso' => 'KG',
            'continent_id' => 3,
        ],
        [
            'name' => 'Lao People\'s Democratic Republic',
            'iso' => 'LA',
            'continent_id' => 3,
        ],
        [
            'name' => 'Latvia',
            'iso' => 'LV',
            'continent_id' => 4,
        ],
        [
            'name' => 'Lebanon',
            'iso' => 'LB',
            'continent_id' => 3,
        ],
        [
            'name' => 'Lesotho',
            'iso' => 'LS',
            'continent_id' => 1,
        ],
        [
            'name' => 'Liberia',
            'iso' => 'LR',
            'continent_id' => 1,
        ],
        [
            'name' => 'Libyan Arab Jamahiriya',
            'iso' => 'LY',
            'continent_id' => 1,
        ],
        [
            'name' => 'Liechtenstein',
            'iso' => 'LI',
            'continent_id' => 4,
        ],
        [
            'name' => 'Lithuania',
            'iso' => 'LT',
            'continent_id' => 4,
        ],
        [
            'name' => 'Luxembourg',
            'iso' => 'LU',
            'continent_id' => 4,
        ],
        [
            'name' => 'Macao',
            'iso' => 'MO',
            'continent_id' => 3,
        ],
        [
            'name' => 'Macedonia',
            'iso' => 'MK',
            'continent_id' => 4,
        ],
        [
            'name' => 'Madagascar',
            'iso' => 'MG',
            'continent_id' => 1,
        ],
        [
            'name' => 'Malawi',
            'iso' => 'MW',
            'continent_id' => 1,
        ],
        [
            'name' => 'Malaysia',
            'iso' => 'MY',
            'continent_id' => 3,
        ],
        [
            'name' => 'Maldives',
            'iso' => 'MV',
            'continent_id' => 3,
        ],
        [
            'name' => 'Mali',
            'iso' => 'ML',
            'continent_id' => 1,
        ],
        [
            'name' => 'Malta',
            'iso' => 'MT',
            'continent_id' => 4,
        ],
        [
            'name' => 'Marshall Islands',
            'iso' => 'MH',
            'continent_id' => 5,
        ],
        [
            'name' => 'Martinique',
            'iso' => 'MQ',
            'continent_id' => 2,
        ],
        [
            'name' => 'Mauritania',
            'iso' => 'MR',
            'continent_id' => 1,
        ],
        [
            'name' => 'Mauritius',
            'iso' => 'MU',
            'continent_id' => 1,
        ],
        [
            'name' => 'Mayotte',
            'iso' => 'YT',
            'continent_id' => 1,
        ],
        [
            'name' => 'Mexico',
            'iso' => 'MX',
            'continent_id' => 2,
        ],
        [
            'name' => 'Micronesia Federated States Of',
            'iso' => 'FM',
            'continent_id' => 5,
        ],
        [
            'name' => 'Moldova',
            'iso' => 'MD',
            'continent_id' => 4,
        ],
        [
            'name' => 'Monaco',
            'iso' => 'MC',
            'continent_id' => 4,
        ],
        [
            'name' => 'Mongolia',
            'iso' => '',
            'continent_id' => 3,
        ],
        [
            'name' => 'Montenegro',
            'iso' => 'MN',
            'continent_id' => 4,
        ],
        [
            'name' => 'Montserrat',
            'iso' => 'ME',
            'continent_id' => 2,
        ],
        [
            'name' => 'Morocco',
            'iso' => 'MA',
            'continent_id' => 1,
        ],
        [
            'name' => 'Mozambique',
            'iso' => 'MZ',
            'continent_id' => 1,
        ],
        [
            'name' => 'Myanmar',
            'iso' => 'MM',
            'continent_id' => 3,
        ],
        [
            'name' => 'Namibia',
            'iso' => 'NA',
            'continent_id' => 1,
        ],
        [
            'name' => 'Nauru',
            'iso' => 'NR',
            'continent_id' => 5,
        ],
        [
            'name' => 'Nepal',
            'iso' => 'NP',
            'continent_id' => 3,
        ],
        [
            'name' => 'Netherlands',
            'iso' => 'NL',
            'continent_id' => 4,
        ],
        [
            'name' => 'Netherlands Antilles',
            'iso' => 'AN',
            'continent_id' => 4,
        ],
        [
            'name' => 'New Caledonia',
            'iso' => 'NC',
            'continent_id' => 5,
        ],
        [
            'name' => 'New Zealand',
            'iso' => 'NZ',
            'continent_id' => 5,
        ],
        [
            'name' => 'Nicaragua',
            'iso' => 'NI',
            'continent_id' => 2,
        ],
        [
            'name' => 'Niger',
            'iso' => 'NE',
            'continent_id' => 1,
        ],
        [
            'name' => 'Nigeria',
            'iso' => 'NG',
            'continent_id' => 1,
        ],
        [
            'name' => 'Niue',
            'iso' => 'NU',
            'continent_id' => 5,
        ],
        [
            'name' => 'Norfolk Island',
            'iso' => 'NF',
            'continent_id' => 5,
        ],
        [
            'name' => 'Northern Mariana Islands',
            'iso' => 'MP',
            'continent_id' => 5,
        ],
        [
            'name' => 'Norway',
            'iso' => 'NO',
            'continent_id' => 4,
        ],
        [
            'name' => 'Oman',
            'iso' => 'OM',
            'continent_id' => 3,
        ],
        [
            'name' => 'Pakistan',
            'iso' => 'PK',
            'continent_id' => 3,
        ],
        [
            'name' => 'Palau',
            'iso' => 'PW',
            'continent_id' => 5,
        ],
        [
            'name' => 'Palestinian Territory Occupied',
            'iso' => 'PS',
            'continent_id' => 3,
        ],
        [
            'name' => 'Panama',
            'iso' => 'PA',
            'continent_id' => 2,
        ],
        [
            'name' => 'Papua New Guinea',
            'iso' => 'PG',
            'continent_id' => 5,
        ],
        [
            'name' => 'Paraguay',
            'iso' => 'PY',
            'continent_id' => 2,
        ],
        [
            'name' => 'Peru',
            'iso' => 'PE',
            'continent_id' => 2,
        ],
        [
            'name' => 'Philippines',
            'iso' => 'PH',
            'continent_id' => 3,
        ],
        [
            'name' => 'Pitcairn',
            'iso' => 'PN',
            'continent_id' => 5,
        ],
        [
            'name' => 'Poland',
            'iso' => 'PL',
            'continent_id' => 4,
        ],
        [
            'name' => 'Portugal',
            'iso' => 'PT',
            'continent_id' => 4,
        ],
        [
            'name' => 'Puerto Rico',
            'iso' => 'PR',
            'continent_id' => 2,
        ],
        [
            'name' => 'Qatar',
            'iso' => 'QA',
            'continent_id' => 3,
        ],
        [
            'name' => 'Reunion',
            'iso' => 'RE',
            'continent_id' => 1,
        ],
        [
            'name' => 'Romania',
            'iso' => 'RO',
            'continent_id' => 4,
        ],
        [
            'name' => 'Russian Federation',
            'iso' => 'RU',
            'continent_id' => 3,
        ],
        [
            'name' => 'Rwanda',
            'iso' => 'RW',
            'continent_id' => 1,
        ],
        [
            'name' => 'Saint Barthelemy',
            'iso' => 'BL',
            'continent_id' => 2,
        ],
        [
            'name' => 'Saint Helena',
            'iso' => 'SH',
            'continent_id' => 1,
        ],
        [
            'name' => 'Saint Kitts And Nevis',
            'iso' => 'KN',
            'continent_id' => 2,
        ],
        [
            'name' => 'Saint Lucia',
            'iso' => 'LC',
            'continent_id' => 2,
        ],
        [
            'name' => 'Saint Martin',
            'iso' => 'MF',
            'continent_id' => 2,
        ],
        [
            'name' => 'Saint Pierre And Miquelfon',
            'iso' => 'PM',
            'continent_id' => 2,
        ],
        [
            'name' => 'Saint Vincent And Grenadines',
            'iso' => 'VC',
            'continent_id' => 2,
        ],
        [
            'name' => 'Samoa',
            'iso' => 'WS',
            'continent_id' => 5,
        ],
        [
            'name' => 'San Marino',
            'iso' => 'SM',
            'continent_id' => 4,
        ],
        [
            'name' => 'Sao Tome And Principe',
            'iso' => 'ST',
            'continent_id' => 1,
        ],
        [
            'name' => 'Saudi Arabia',
            'iso' => 'SA',
            'continent_id' => 3,
        ],
        [
            'name' => 'Senegal',
            'iso' => 'SN',
            'continent_id' => 1,
        ],
        [
            'name' => 'Serbia',
            'iso' => 'RS',
            'continent_id' => 4,
        ],
        [
            'name' => 'Seychelles',
            'iso' => 'SC',
            'continent_id' => 1,
        ],
        [
            'name' => 'Sierra Leone',
            'iso' => 'SL',
            'continent_id' => 1,
        ],
        [
            'name' => 'Singapore',
            'iso' => 'SG',
            'continent_id' => 3,
        ],
        [
            'name' => 'Slovakia',
            'iso' => 'SK',
            'continent_id' => 4,
        ],
        [
            'name' => 'Slovenia',
            'iso' => 'SI',
            'continent_id' => 4,
        ],
        [
            'name' => 'Solomon Islands',
            'iso' => 'SB',
            'continent_id' => 5,
        ],
        [
            'name' => 'Somalia',
            'iso' => 'SO',
            'continent_id' => 1,
        ],
        [
            'name' => 'South Africa',
            'iso' => 'ZA',
            'continent_id' => 1,
        ],
        [
            'name' => 'South Georgia And Sandwich Isl.',
            'iso' => 'GS',
            'continent_id' => 2,
        ],
        [
            'name' => 'Spain',
            'iso' => 'ES',
            'continent_id' => 4,
        ],
        [
            'name' => 'Sri Lanka',
            'iso' => 'LK',
            'continent_id' => 3,
        ],
        [
            'name' => 'Sudan',
            'iso' => 'SD',
            'continent_id' => 1,
        ],
        [
            'name' => 'South Sudan',
            'iso'  => 'SS',
            'continent_id' => 1,
        ],
        [
            'name' => 'Suriname',
            'iso' => 'SR',
            'continent_id' => 2,
        ],
        [
            'name' => 'Svalbard And Jan Mayen',
            'iso' => 'SJ',
            'continent_id' => 4,
        ],
        [
            'name' => 'Swaziland',
            'iso' => 'SZ',
            'continent_id' => 1,
        ],
        [
            'name' => 'Sweden',
            'iso' => 'SE',
            'continent_id' => 4,
        ],
        [
            'name' => 'Switzerland',
            'iso' => 'CH',
            'continent_id' => 4,
        ],
        [
            'name' => 'Syrian Arab Republic',
            'iso' => 'SY',
            'continent_id' => 3,
        ],
        [
            'name' => 'Taiwan',
            'iso' => 'TW',
            'continent_id' => 3,
        ],
        [
            'name' => 'Tajikistan',
            'iso' => 'TJ',
            'continent_id' => 3,
        ],
        [
            'name' => 'Tanzania',
            'iso' => 'TZ',
            'continent_id' => 1,
        ],
        [
            'name' => 'Thailand',
            'iso' => 'TH',
            'continent_id' => 3,
        ],
        [
            'name' => 'Timor-Leste',
            'iso' => 'TP',
            'continent_id' => 3,
        ],
        [
            'name' => 'Togo',
            'iso' => 'TG',
            'continent_id' => 1,
        ],
        [
            'name' => 'Tokelau',
            'iso' => 'TK',
            'continent_id' => 5,
        ],
        [
            'name' => 'Tonga',
            'iso' => 'TO',
            'continent_id' => 5,
        ],
        [
            'name' => 'Trinidad And Tobago',
            'iso' => 'TT',
            'continent_id' => 2,
        ],
        [
            'name' => 'Tunisia',
            'iso' => 'TN',
            'continent_id' => 1,
        ],
        [
            'name' => 'Turkey',
            'iso' => 'TR',
            'continent_id' => 3,
        ],
        [
            'name' => 'Turkmenistan',
            'iso' => 'TM',
            'continent_id' => 3,
        ],
        [
            'name' => 'Turks And Caicos Islands',
            'iso' => 'TC',
            'continent_id' => 2,
        ],
        [
            'name' => 'Tuvalu',
            'iso' => 'TV',
            'continent_id' => 5,
        ],
        [
            'name' => 'Uganda',
            'iso' => 'UG',
            'continent_id' => 1,
        ],
        [
            'name' => 'Ukraine',
            'iso' => 'UA',
            'continent_id' => 4,
        ],
        [
            'name' => 'United Arab Emirates',
            'iso' => 'AE',
            'continent_id' => 3,
        ],
        [
            'name' => 'United Kingdom',
            'iso' => 'GB',
            'continent_id' => 4,
        ],
        [
            'name' => 'United States',
            'iso' => 'US',
            'continent_id' => 2,
        ],
        [
            'name' => 'United States Outlying Islands',
            'iso' => 'UM',
            'continent_id' => 2,
        ],
        [
            'name' => 'Uruguay',
            'iso' => 'UY',
            'continent_id' => 2,
        ],
        [
            'name' => 'Uzbekistan',
            'iso' => 'UZ',
            'continent_id' => 3,
        ],
        [
            'name' => 'Vanuatu',
            'iso' => 'VU',
            'continent_id' => 5,
        ],
        [
            'name' => 'Venezuela',
            'iso' => 'VE',
            'continent_id' => 2,
        ],
        [
            'name' => 'Viet Nam',
            'iso' => 'VN',
            'continent_id' => 3,
        ],
        [
            'name' => 'Virgin Islands, British',
            'iso' => 'VG',
            'continent_id' => 2,
        ],
        [
            'name' => 'Virgin Islands, U.S.',
            'iso' => 'VI',
            'continent_id' => 2,
        ],
        [
            'name' => 'Wallis And Futuna',
            'iso' => 'WF',
            'continent_id' => 5,
        ],
        [
            'name' => 'Western Sahara',
            'iso' => 'EH',
            'continent_id' => 1,
        ],
        [
            'name' => 'Yemen',
            'iso' => 'YE',
            'continent_id' => 3,
        ],
        [
            'name' => 'Zambia',
            'iso' => 'ZM',
            'continent_id' => 1,
        ],
        [
            'name' => 'Zimbabwe',
            'iso' => 'ZW',
            'continent_id' => 1,
        ],
        [
            'name' => 'Rest Worlds',
            'iso' => 'RTW',
            'continent_id' => 6,
        ],
        ]);
    }
}
