const countryList = [
  {
    code: 'AF',
    countryName: 'Afghanistan',
    timeZones: ['Asia/Kabul'],
  },
  {
    code: 'AL',
    countryName: 'Albania',
    timeZones: ['Europe/Tirane'],
  },
  {
    code: 'DZ',
    countryName: 'Algeria',
    timeZones: ['Africa/Algiers'],
  },
  {
    code: 'AR',
    countryName: 'Argentina',
    timeZones: [
      'America/Argentina/Buenos_Aires',
      'America/Argentina/Cordoba',
      'America/Argentina/Salta',
      'America/Argentina/Jujuy',
      'America/Argentina/Tucuman',
      'America/Argentina/Catamarca',
      'America/Argentina/La_Rioja',
      'America/Argentina/San_Juan',
      'America/Argentina/Mendoza',
      'America/Argentina/San_Luis',
      'America/Argentina/Rio_Gallegos',
      'America/Argentina/Ushuaia',
    ],
  },
  {
    code: 'AM',
    countryName: 'Armenia',
    timeZones: ['Asia/Yerevan'],
  },
  {
    code: 'AU',
    countryName: 'Australia',
    timeZones: [
      'Australia/Lord_Howe',
      'Antarctica/Macquarie',
      'Australia/Hobart',
      'Australia/Currie',
      'Australia/Melbourne',
      'Australia/Sydney',
      'Australia/Broken_Hill',
      'Australia/Brisbane',
      'Australia/Lindeman',
      'Australia/Adelaide',
      'Australia/Darwin',
      'Australia/Perth',
      'Australia/Eucla',
    ],
  },
  {
    code: 'AT',
    countryName: 'Austria',
    timeZones: ['Europe/Vienna'],
  },
  {
    code: 'AZ',
    countryName: 'Azerbaijan',
    timeZones: ['Asia/Baku'],
  },
  {
    code: 'BH',
    countryName: 'Bahrain',
    timeZones: ['Asia/Bahrain'],
  },
  {
    code: 'BD',
    countryName: 'Bangladesh',
    timeZones: ['Asia/Dhaka'],
  },
  {
    code: 'BY',
    countryName: 'Belarus',
    timeZones: ['Europe/Minsk'],
  },
  {
    code: 'BE',
    countryName: 'Belgium',
    timeZones: ['Europe/Brussels'],
  },
  {
    code: 'BZ',
    countryName: 'Belize',
    timeZones: ['America/Belize'],
  },
  {
    code: 'BT',
    countryName: 'Bhutan',
    timeZones: ['Asia/Thimphu'],
  },
  {
    code: 'BO',
    countryName: 'Bolivia',
    timeZones: ['America/La_Paz'],
  },
  {
    code: 'BA',
    countryName: 'Bosnia and Herzegovina',
    timeZones: ['Europe/Sarajevo'],
  },
  {
    code: 'BW',
    countryName: 'Botswana',
    timeZones: ['Africa/Gaborone'],
  },
  {
    code: 'BR',
    countryName: 'Brazil',
    timeZones: [
      'America/Noronha',
      'America/Belem',
      'America/Fortaleza',
      'America/Recife',
      'America/Araguaina',
      'America/Maceio',
      'America/Bahia',
      'America/Sao_Paulo',
      'America/Campo_Grande',
      'America/Cuiaba',
      'America/Santarem',
      'America/Porto_Velho',
      'America/Boa_Vista',
      'America/Manaus',
      'America/Eirunepe',
      'America/Rio_Branco',
    ],
  },
  {
    code: 'BN',
    countryName: 'Brunei',
    timeZones: ['Asia/Brunei'],
  },
  {
    code: 'BG',
    countryName: 'Bulgaria',
    timeZones: ['Europe/Sofia'],
  },
  {
    code: 'KH',
    countryName: 'Cambodia',
    timeZones: ['Asia/Phnom_Penh'],
  },
  {
    code: 'CM',
    countryName: 'Cameroon',
    timeZones: ['Africa/Douala'],
  },
  {
    code: 'CA',
    countryName: 'Canada',
    timeZones: [
      'America/St_Johns',
      'America/Halifax',
      'America/Glace_Bay',
      'America/Moncton',
      'America/Goose_Bay',
      'America/Blanc-Sablon',
      'America/Toronto',
      'America/Nipigon',
      'America/Thunder_Bay',
      'America/Iqaluit',
      'America/Pangnirtung',
      'America/Atikokan',
      'America/Winnipeg',
      'America/Rainy_River',
      'America/Resolute',
      'America/Rankin_Inlet',
      'America/Regina',
      'America/Swift_Current',
      'America/Edmonton',
      'America/Cambridge_Bay',
      'America/Yellowknife',
      'America/Inuvik',
      'America/Creston',
      'America/Dawson_Creek',
      'America/Fort_Nelson',
      'America/Vancouver',
      'America/Whitehorse',
      'America/Dawson',
    ],
  },
  {
    code: 'CL',
    countryName: 'Chile',
    timeZones: ['America/Santiago', 'Pacific/Easter'],
  },
  {
    code: 'CN',
    countryName: 'China',
    timeZones: ['Asia/Shanghai', 'Asia/Urumqi'],
  },
  {
    code: 'CO',
    countryName: 'Colombia',
    timeZones: ['America/Bogota'],
  },
  {
    code: 'CD',
    countryName: 'Congo (DRC)',
    timeZones: ['Africa/Kinshasa', 'Africa/Lubumbashi'],
  },
  {
    code: 'CR',
    countryName: 'Costa Rica',
    timeZones: ['America/Costa_Rica'],
  },
  {
    code: 'CI',
    countryName: 'Côte d’Ivoire',
    timeZones: ['Africa/Abidjan'],
  },
  {
    code: 'HR',
    countryName: 'Croatia',
    timeZones: ['Europe/Zagreb'],
  },
  {
    code: 'CU',
    countryName: 'Cuba',
    timeZones: ['America/Havana'],
  },
  {
    code: 'CZ',
    countryName: 'Czech Republic',
    timeZones: ['Europe/Prague'],
  },
  {
    code: 'DK',
    countryName: 'Denmark',
    timeZones: ['Europe/Copenhagen'],
  },
  {
    code: 'DJ',
    countryName: 'Djibouti',
    timeZones: ['Africa/Djibouti'],
  },
  {
    code: 'DO',
    countryName: 'Dominican Republic',
    timeZones: ['America/Santo_Domingo'],
  },
  {
    code: 'EC',
    countryName: 'Ecuador',
    timeZones: ['America/Guayaquil', 'Pacific/Galapagos'],
  },
  {
    code: 'EG',
    countryName: 'Egypt',
    timeZones: ['Africa/Cairo'],
  },
  {
    code: 'SV',
    countryName: 'El Salvador',
    timeZones: ['America/El_Salvador'],
  },
  {
    code: 'ER',
    countryName: 'Eritrea',
    timeZones: ['Africa/Asmara'],
  },
  {
    code: 'EE',
    countryName: 'Estonia',
    timeZones: ['Europe/Tallinn'],
  },
  {
    code: 'ET',
    countryName: 'Ethiopia',
    timeZones: ['Africa/Addis_Ababa'],
  },
  {
    code: 'FO',
    countryName: 'Faroe Islands',
    timeZones: ['Atlantic/Faroe'],
  },
  {
    code: 'FI',
    countryName: 'Finland',
    timeZones: ['Europe/Helsinki'],
  },
  {
    code: 'FR',
    countryName: 'France',
    timeZones: ['Europe/Paris'],
  },
  {
    code: 'GE',
    countryName: 'Georgia',
    timeZones: ['Asia/Tbilisi'],
  },
  {
    code: 'DE',
    countryName: 'Germany',
    timeZones: ['Europe/Berlin', 'Europe/Busingen'],
  },
  {
    code: 'GR',
    countryName: 'Greece',
    timeZones: ['Europe/Athens'],
  },
  {
    code: 'GL',
    countryName: 'Greenland',
    timeZones: ['America/Godthab', 'America/Danmarkshavn', 'America/Scoresbysund', 'America/Thule'],
  },
  {
    code: 'GT',
    countryName: 'Guatemala',
    timeZones: ['America/Guatemala'],
  },
  {
    code: 'HT',
    countryName: 'Haiti',
    timeZones: ['America/Port-au-Prince'],
  },
  {
    code: 'HN',
    countryName: 'Honduras',
    timeZones: ['America/Tegucigalpa'],
  },
  {
    code: 'HK',
    countryName: 'Hong Kong SAR',
    timeZones: ['Asia/Hong_Kong'],
  },
  {
    code: 'HU',
    countryName: 'Hungary',
    timeZones: ['Europe/Budapest'],
  },
  {
    code: 'IS',
    countryName: 'Iceland',
    timeZones: ['Atlantic/Reykjavik'],
  },
  {
    code: 'IN',
    countryName: 'India',
    timeZones: ['Asia/Kolkata'],
  },
  {
    code: 'ID',
    countryName: 'Indonesia',
    timeZones: ['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Makassar', 'Asia/Jayapura'],
  },
  {
    code: 'IR',
    countryName: 'Iran',
    timeZones: ['Asia/Tehran'],
  },
  {
    code: 'IQ',
    countryName: 'Iraq',
    timeZones: ['Asia/Baghdad'],
  },
  {
    code: 'IE',
    countryName: 'Ireland',
    timeZones: ['Europe/Dublin'],
  },
  {
    code: 'IL',
    countryName: 'Israel',
    timeZones: ['Asia/Jerusalem'],
  },
  {
    code: 'IT',
    countryName: 'Italy',
    timeZones: ['Europe/Rome'],
  },
  {
    code: 'JM',
    countryName: 'Jamaica',
    timeZones: ['America/Jamaica'],
  },
  {
    code: 'JP',
    countryName: 'Japan',
    timeZones: ['Asia/Tokyo'],
  },
  {
    code: 'JO',
    countryName: 'Jordan',
    timeZones: ['Asia/Amman'],
  },
  {
    code: 'KZ',
    countryName: 'Kazakhstan',
    timeZones: ['Asia/Almaty', 'Asia/Qyzylorda', 'Asia/Aqtobe', 'Asia/Aqtau', 'Asia/Oral'],
  },
  {
    code: 'KE',
    countryName: 'Kenya',
    timeZones: ['Africa/Nairobi'],
  },
  {
    code: 'KR',
    countryName: 'Korea',
    timeZones: ['Asia/Seoul'],
  },
  {
    code: 'KW',
    countryName: 'Kuwait',
    timeZones: ['Asia/Kuwait'],
  },
  {
    code: 'KG',
    countryName: 'Kyrgyzstan',
    timeZones: ['Asia/Bishkek'],
  },
  {
    code: 'LA',
    countryName: 'Laos',
    timeZones: ['Asia/Vientiane'],
  },
  {
    code: 'LV',
    countryName: 'Latvia',
    timeZones: ['Europe/Riga'],
  },
  {
    code: 'LB',
    countryName: 'Lebanon',
    timeZones: ['Asia/Beirut'],
  },
  {
    code: 'LY',
    countryName: 'Libya',
    timeZones: ['Africa/Tripoli'],
  },
  {
    code: 'LI',
    countryName: 'Liechtenstein',
    timeZones: ['Europe/Vaduz'],
  },
  {
    code: 'LT',
    countryName: 'Lithuania',
    timeZones: ['Europe/Vilnius'],
  },
  {
    code: 'LU',
    countryName: 'Luxembourg',
    timeZones: ['Europe/Luxembourg'],
  },
  {
    code: 'MO',
    countryName: 'Macao SAR',
    timeZones: ['Asia/Macau'],
  },
  {
    code: 'MK',
    countryName: 'Macedonia, FYRO',
    timeZones: ['Europe/Skopje'],
  },
  {
    code: 'MY',
    countryName: 'Malaysia',
    timeZones: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
  },
  {
    code: 'MV',
    countryName: 'Maldives',
    timeZones: ['Indian/Maldives'],
  },
  {
    code: 'ML',
    countryName: 'Mali',
    timeZones: ['Africa/Bamako'],
  },
  {
    code: 'MT',
    countryName: 'Malta',
    timeZones: ['Europe/Malta'],
  },
  {
    code: 'MX',
    countryName: 'Mexico',
    timeZones: [
      'America/Mexico_City',
      'America/Cancun',
      'America/Merida',
      'America/Monterrey',
      'America/Matamoros',
      'America/Mazatlan',
      'America/Chihuahua',
      'America/Ojinaga',
      'America/Hermosillo',
      'America/Tijuana',
      'America/Bahia_Banderas',
    ],
  },
  {
    code: 'MD',
    countryName: 'Moldova',
    timeZones: ['Europe/Chisinau'],
  },
  {
    code: 'MC',
    countryName: 'Monaco',
    timeZones: ['Europe/Monaco'],
  },
  {
    code: 'MN',
    countryName: 'Mongolia',
    timeZones: ['Asia/Ulaanbaatar', 'Asia/Hovd', 'Asia/Choibalsan'],
  },
  {
    code: 'ME',
    countryName: 'Montenegro',
    timeZones: ['Europe/Podgorica'],
  },
  {
    code: 'MA',
    countryName: 'Morocco',
    timeZones: ['Africa/Casablanca'],
  },
  {
    code: 'MM',
    countryName: 'Myanmar',
    timeZones: ['Asia/Rangoon'],
  },
  {
    code: 'NP',
    countryName: 'Nepal',
    timeZones: ['Asia/Kathmandu'],
  },
  {
    code: 'NL',
    countryName: 'Netherlands',
    timeZones: ['Europe/Amsterdam'],
  },
  {
    code: 'NZ',
    countryName: 'New Zealand',
    timeZones: ['Pacific/Auckland', 'Pacific/Chatham'],
  },
  {
    code: 'NI',
    countryName: 'Nicaragua',
    timeZones: ['America/Managua'],
  },
  {
    code: 'NG',
    countryName: 'Nigeria',
    timeZones: ['Africa/Lagos'],
  },
  {
    code: 'NO',
    countryName: 'Norway',
    timeZones: ['Europe/Oslo'],
  },
  {
    code: 'OM',
    countryName: 'Oman',
    timeZones: ['Asia/Muscat'],
  },
  {
    code: 'PK',
    countryName: 'Pakistan',
    timeZones: ['Asia/Karachi'],
  },
  {
    code: 'PA',
    countryName: 'Panama',
    timeZones: ['America/Panama'],
  },
  {
    code: 'PY',
    countryName: 'Paraguay',
    timeZones: ['America/Asuncion'],
  },
  {
    code: 'PE',
    countryName: 'Peru',
    timeZones: ['America/Lima'],
  },
  {
    code: 'PH',
    countryName: 'Philippines',
    timeZones: ['Asia/Manila'],
  },
  {
    code: 'PL',
    countryName: 'Poland',
    timeZones: ['Europe/Warsaw'],
  },
  {
    code: 'PT',
    countryName: 'Portugal',
    timeZones: ['Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores'],
  },
  {
    code: 'PR',
    countryName: 'Puerto Rico',
    timeZones: ['America/Puerto_Rico'],
  },
  {
    code: 'QA',
    countryName: 'Qatar',
    timeZones: ['Asia/Qatar'],
  },
  {
    code: 'RE',
    countryName: 'Réunion',
    timeZones: ['Indian/Reunion'],
  },
  {
    code: 'RO',
    countryName: 'Romania',
    timeZones: ['Europe/Bucharest'],
  },
  {
    code: 'RU',
    countryName: 'Russia',
    timeZones: [
      'Europe/Kaliningrad',
      'Europe/Moscow',
      'Europe/Simferopol',
      'Europe/Volgograd',
      'Europe/Astrakhan',
      'Europe/Samara',
      'Europe/Ulyanovsk',
      'Asia/Yekaterinburg',
      'Asia/Omsk',
      'Asia/Novosibirsk',
      'Asia/Barnaul',
      'Asia/Novokuznetsk',
      'Asia/Krasnoyarsk',
      'Asia/Irkutsk',
      'Asia/Chita',
      'Asia/Yakutsk',
      'Asia/Khandyga',
      'Asia/Vladivostok',
      'Asia/Ust-Nera',
      'Asia/Magadan',
      'Asia/Sakhalin',
      'Asia/Srednekolymsk',
      'Asia/Kamchatka',
      'Asia/Anadyr',
    ],
  },
  {
    code: 'RW',
    countryName: 'Rwanda',
    timeZones: ['Africa/Kigali'],
  },
  {
    code: 'SA',
    countryName: 'Saudi Arabia',
    timeZones: ['Asia/Riyadh'],
  },
  {
    code: 'SN',
    countryName: 'Senegal',
    timeZones: ['Africa/Dakar'],
  },
  {
    code: 'RS',
    countryName: 'Serbia',
    timeZones: ['Europe/Belgrade'],
  },
  {
    code: 'SG',
    countryName: 'Singapore',
    timeZones: ['Asia/Singapore'],
  },
  {
    code: 'SK',
    countryName: 'Slovakia',
    timeZones: ['Europe/Bratislava'],
  },
  {
    code: 'SI',
    countryName: 'Slovenia',
    timeZones: ['Europe/Ljubljana'],
  },
  {
    code: 'SO',
    countryName: 'Somalia',
    timeZones: ['Africa/Mogadishu'],
  },
  {
    code: 'ZA',
    countryName: 'South Africa',
    timeZones: ['Africa/Johannesburg'],
  },
  {
    code: 'ES',
    countryName: 'Spain',
    timeZones: ['Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary'],
  },
  {
    code: 'LK',
    countryName: 'Sri Lanka',
    timeZones: ['Asia/Colombo'],
  },
  {
    code: 'SE',
    countryName: 'Sweden',
    timeZones: ['Europe/Stockholm'],
  },
  {
    code: 'CH',
    countryName: 'Switzerland',
    timeZones: ['Europe/Zurich'],
  },
  {
    code: 'SY',
    countryName: 'Syria',
    timeZones: ['Asia/Damascus'],
  },
  {
    code: 'TW',
    countryName: 'Taiwan',
    timeZones: ['Asia/Taipei'],
  },
  {
    code: 'TJ',
    countryName: 'Tajikistan',
    timeZones: ['Asia/Dushanbe'],
  },
  {
    code: 'TH',
    countryName: 'Thailand',
    timeZones: ['Asia/Bangkok'],
  },
  {
    code: 'TT',
    countryName: 'Trinidad and Tobago',
    timeZones: ['America/Port_of_Spain'],
  },
  {
    code: 'TN',
    countryName: 'Tunisia',
    timeZones: ['Africa/Tunis'],
  },
  {
    code: 'TR',
    countryName: 'Turkey',
    timeZones: ['Europe/Istanbul'],
  },
  {
    code: 'TM',
    countryName: 'Turkmenistan',
    timeZones: ['Asia/Ashgabat'],
  },
  {
    code: 'UA',
    countryName: 'Ukraine',
    timeZones: ['Europe/Kiev', 'Europe/Uzhgorod', 'Europe/Zaporozhye'],
  },
  {
    code: 'AE',
    countryName: 'United Arab Emirates',
    timeZones: ['Asia/Dubai'],
  },
  {
    code: 'GB',
    countryName: 'United Kingdom',
    timeZones: ['Europe/London'],
  },
  {
    code: 'US',
    countryName: 'United States',
    timeZones: [
      'America/New_York',
      'America/Detroit',
      'America/Kentucky/Louisville',
      'America/Kentucky/Monticello',
      'America/Indiana/Indianapolis',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Indiana/Marengo',
      'America/Indiana/Petersburg',
      'America/Indiana/Vevay',
      'America/Chicago',
      'America/Indiana/Tell_City',
      'America/Indiana/Knox',
      'America/Menominee',
      'America/North_Dakota/Center',
      'America/North_Dakota/New_Salem',
      'America/North_Dakota/Beulah',
      'America/Denver',
      'America/Boise',
      'America/Phoenix',
      'America/Los_Angeles',
      'America/Anchorage',
      'America/Juneau',
      'America/Sitka',
      'America/Metlakatla',
      'America/Yakutat',
      'America/Nome',
      'America/Adak',
      'Pacific/Honolulu',
    ],
  },
  {
    code: 'UY',
    countryName: 'Uruguay',
    timeZones: ['America/Montevideo'],
  },
  {
    code: 'UZ',
    countryName: 'Uzbekistan',
    timeZones: ['Asia/Samarkand', 'Asia/Tashkent'],
  },
  {
    code: 'VE',
    countryName: 'Venezuela',
    timeZones: ['America/Caracas'],
  },
  {
    code: 'VN',
    countryName: 'Vietnam',
    timeZones: ['Asia/Ho_Chi_Minh'],
  },
  {
    code: 'YE',
    countryName: 'Yemen',
    timeZones: ['Asia/Aden'],
  },
  {
    code: 'ZW',
    countryName: 'Zimbabwe',
    timeZones: ['Africa/Harare'],
  },
];

const isCountryExist = (countryCode) => {
  let foundCountry = countryList.find((countryItem) => {
    return countryItem.code == countryCode;
  });
  return !!foundCountry;
};

module.exports = {
  countryList,
  isCountryExist,
};
