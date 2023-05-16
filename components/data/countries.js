const countries = [
  {
    name: 'Vanuatu',
  },
  {
    name: 'Guernsey',
  },
  {
    name: 'Syria',
  },
  {
    name: 'Andorra',
  },
  {
    name: 'Malawi',
  },
  {
    name: 'France',
  },
  {
    name: 'Cambodia',
  },
  {
    name: 'Solomon Islands',
  },
  {
    name: 'Dominican Republic',
  },
  {
    name: 'Canada',
  },
  {
    name: 'Uruguay',
  },
  {
    name: 'Saint Lucia',
  },
  {
    name: 'Belarus',
  },
  {
    name: 'Pakistan',
  },
  {
    name: 'Saudi Arabia',
  },
  {
    name: 'Hungary',
  },
  {
    name: 'Sri Lanka',
  },
  {
    name: 'Réunion',
  },
  {
    name: 'Northern Mariana Islands',
  },
  {
    name: 'United States Minor Outlying Islands',
  },
  {
    name: 'Bosnia and Herzegovina',
  },
  {
    name: 'El Salvador',
  },
  {
    name: 'North Korea',
  },
  {
    name: 'Tanzania',
  },
  {
    name: 'Guyana',
  },
  {
    name: 'Nepal',
  },
  {
    name: 'Jordan',
  },
  {
    name: 'Iraq',
  },
  {
    name: 'Sierra Leone',
  },
  {
    name: 'South Georgia',
  },
  {
    name: 'Switzerland',
  },
  {
    name: 'Papua New Guinea',
  },
  {
    name: 'Macau',
  },
  {
    name: 'Laos',
  },
  {
    name: 'Brunei',
  },
  {
    name: 'United States Virgin Islands',
  },
  {
    name: 'American Samoa',
  },
  {
    name: 'Ecuador',
  },
  {
    name: 'Tajikistan',
  },
  {
    name: 'Iran',
  },
  {
    name: 'Madagascar',
  },
  {
    name: 'Sint Maarten',
  },
  {
    name: 'Azerbaijan',
  },
  {
    name: 'Austria',
  },
  {
    name: 'Armenia',
  },
  {
    name: 'Uganda',
  },
  {
    name: 'India',
  },
  {
    name: 'Wallis and Futuna',
  },
  {
    name: 'French Guiana',
  },
  {
    name: 'Malta',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Algeria',
  },
  {
    name: 'Netherlands',
  },
  {
    name: 'Martinique',
  },
  {
    name: 'Croatia',
  },
  {
    name: 'Niue',
  },
  {
    name: 'Bahrain',
  },
  {
    name: 'Thailand',
  },
  {
    name: 'Liechtenstein',
  },
  {
    name: 'Hong Kong',
  },
  {
    name: 'Cape Verde',
  },
  {
    name: 'Monaco',
  },
  {
    name: 'Anguilla',
  },
  {
    name: 'Uzbekistan',
  },
  {
    name: 'Qatar',
  },
  {
    name: 'South Sudan',
  },
  {
    name: 'Ghana',
  },
  {
    name: 'Belize',
  },
  {
    name: 'Cyprus',
  },
  {
    name: 'Taiwan',
  },
  {
    name: 'United States',
  },
  {
    name: 'Cocos (Keeling) Islands',
  },
  {
    name: 'Zimbabwe',
  },
  {
    name: 'Vietnam',
  },
  {
    name: 'Kenya',
  },
  {
    name: 'Central African Republic',
  },
  {
    name: 'Antigua and Barbuda',
  },
  {
    name: 'Senegal',
  },
  {
    name: 'Angola',
  },
  {
    name: 'Latvia',
  },
  {
    name: 'Tuvalu',
  },
  {
    name: 'United Kingdom',
  },
  {
    name: 'Mauritius',
  },
  {
    name: 'Ivory Coast',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Heard Island and McDonald Islands',
  },
  {
    name: 'Germany',
  },
  {
    name: 'French Polynesia',
  },
  {
    name: 'Seychelles',
  },
  {
    name: 'Åland Islands',
  },
  {
    name: 'Norfolk Island',
  },
  {
    name: 'Aruba',
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
  },
  {
    name: 'Christmas Island',
  },
  {
    name: 'Nigeria',
  },
  {
    name: 'Fiji',
  },
  {
    name: 'Zambia',
  },
  {
    name: 'Republic of the Congo',
  },
  {
    name: 'Bahamas',
  },
  {
    name: 'Turks and Caicos Islands',
  },
  {
    name: 'Micronesia',
  },
  {
    name: 'Ireland',
  },
  {
    name: 'Mali',
  },
  {
    name: 'Comoros',
  },
  {
    name: 'United Arab Emirates',
  },
  {
    name: 'Paraguay',
  },
  {
    name: 'Czechia',
  },
  {
    name: 'Saint Kitts and Nevis',
  },
  {
    name: 'Mexico',
  },
  {
    name: 'Moldova',
  },
  {
    name: 'Bolivia',
  },
  {
    name: 'China',
  },
  {
    name: 'Montserrat',
  },
  {
    name: 'Australia',
  },
  {
    name: 'Luxembourg',
  },
  {
    name: 'Bermuda',
  },
  {
    name: 'Burundi',
  },
  {
    name: 'Saint Pierre and Miquelon',
  },
  {
    name: 'São Tomé and Príncipe',
  },
  {
    name: 'Falkland Islands',
  },
  {
    name: 'Tokelau',
  },
  {
    name: 'Palestine',
  },
  {
    name: 'Montenegro',
  },
  {
    name: 'Vatican City',
  },
  {
    name: 'Guatemala',
  },
  {
    name: 'San Marino',
  },
  {
    name: 'Cuba',
  },
  {
    name: 'Slovakia',
  },
  {
    name: 'Equatorial Guinea',
  },
  {
    name: 'Caribbean Netherlands',
  },
  {
    name: 'Costa Rica',
  },
  {
    name: 'Georgia',
  },
  {
    name: 'South Africa',
  },
  {
    name: 'Dominica',
  },
  {
    name: 'Marshall Islands',
  },
  {
    name: 'Guam',
  },
  {
    name: 'Philippines',
  },
  {
    name: 'Greenland',
  },
  {
    name: 'Lithuania',
  },
  {
    name: 'Trinidad and Tobago',
  },
  {
    name: 'Bouvet Island',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Egypt',
  },
  {
    name: 'Greece',
  },
  {
    name: 'Kuwait',
  },
  {
    name: 'Benin',
  },
  {
    name: 'Lesotho',
  },
  {
    name: 'Curaçao',
  },
  {
    name: 'Togo',
  },
  {
    name: 'French Southern and Antarctic Lands',
  },
  {
    name: 'Iceland',
  },
  {
    name: 'Spain',
  },
  {
    name: 'Eswatini',
  },
  {
    name: 'Myanmar',
  },
  {
    name: 'Finland',
  },
  {
    name: 'Jamaica',
  },
  {
    name: 'Niger',
  },
  {
    name: 'Western Sahara',
  },
  {
    name: 'Singapore',
  },
  {
    name: 'Ethiopia',
  },
  {
    name: 'Gambia',
  },
  {
    name: 'Panama',
  },
  {
    name: 'Bulgaria',
  },
  {
    name: 'Mongolia',
  },
  {
    name: 'Bhutan',
  },
  {
    name: 'Pitcairn Islands',
  },
  {
    name: 'Samoa',
  },
  {
    name: 'Grenada',
  },
  {
    name: 'Israel',
  },
  {
    name: 'Turkmenistan',
  },
  {
    name: 'Cayman Islands',
  },
  {
    name: 'Eritrea',
  },
  {
    name: 'New Zealand',
  },
  {
    name: 'Oman',
  },
  {
    name: 'Romania',
  },
  {
    name: 'Jersey',
  },
  {
    name: 'DR Congo',
  },
  {
    name: 'Somalia',
  },
  {
    name: 'Chile',
  },
  {
    name: 'Svalbard and Jan Mayen',
  },
  {
    name: 'Saint Martin',
  },
  {
    name: 'Guadeloupe',
  },
  {
    name: 'Saint Vincent and the Grenadines',
  },
  {
    name: 'Slovenia',
  },
  {
    name: 'Sudan',
  },
  {
    name: 'Guinea-Bissau',
  },
  {
    name: 'Peru',
  },
  {
    name: 'Mayotte',
  },
  {
    name: 'Nicaragua',
  },
  {
    name: 'Morocco',
  },
  {
    name: 'Italy',
  },
  {
    name: 'Burkina Faso',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Nauru',
  },
  {
    name: 'Antarctica',
  },
  {
    name: 'North Macedonia',
  },
  {
    name: 'South Korea',
  },
  {
    name: 'Afghanistan',
  },
  {
    name: 'Venezuela',
  },
  {
    name: 'Guinea',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Haiti',
  },
  {
    name: 'Argentina',
  },
  {
    name: 'Lebanon',
  },
  {
    name: 'Estonia',
  },
  {
    name: 'Cameroon',
  },
  {
    name: 'Denmark',
  },
  {
    name: 'Turkey',
  },
  {
    name: 'Kyrgyzstan',
  },
  {
    name: 'New Caledonia',
  },
  {
    name: 'Barbados',
  },
  {
    name: 'Chad',
  },
  {
    name: 'Namibia',
  },
  {
    name: 'Norway',
  },
  {
    name: 'Suriname',
  },
  {
    name: 'Saint Barthélemy',
  },
  {
    name: 'Libya',
  },
  {
    name: 'Tunisia',
  },
  {
    name: 'Yemen',
  },
  {
    name: 'Belgium',
  },
  {
    name: 'Gibraltar',
  },
  {
    name: 'Japan',
  },
  {
    name: 'Liberia',
  },
  {
    name: 'Kosovo',
  },
  {
    name: 'Puerto Rico',
  },
  {
    name: 'Botswana',
  },
  {
    name: 'Kiribati',
  },
  {
    name: 'Bangladesh',
  },
  {
    name: 'Tonga',
  },
  {
    name: 'Mozambique',
  },
  {
    name: 'Honduras',
  },
  {
    name: 'Djibouti',
  },
  {
    name: 'Timor-Leste',
  },
  {
    name: 'British Virgin Islands',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'Palau',
  },
  {
    name: 'Faroe Islands',
  },
  {
    name: 'Mauritania',
  },
  {
    name: 'Isle of Man',
  },
  {
    name: 'Kazakhstan',
  },
  {
    name: 'Serbia',
  },
  {
    name: 'Rwanda',
  },
  {
    name: 'Colombia',
  },
  {
    name: 'Malaysia',
  },
  {
    name: 'Albania',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'Gabon',
  },
  {
    name: 'Cook Islands',
  },
  {
    name: 'British Indian Ocean Territory',
  },
  {
    name: 'Maldives',
  },
];

export default countries;
