function ModalForm() {
    return (


        <section className="flex justify-center py-5  mb-5 items-center bg-gray-200">
            <div className="max-w-lg w-full px-6 py-10 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-slate-900">Register for the Event</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <div className="flex">
                            <select
                                id="countryCode"
                                name="countryCode"
                                className="shadow appearance-none border rounded-l w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                {/* Generate options dynamically */}
                                {countryCodes.map((countryCode, index) => (
                                    <option key={index} value={countryCode.dial_code}>
                                        {`${countryCode.dial_code} (${countryCode.code})`}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="shadow appearance-none border rounded-r w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ModalForm;
const countryCodes = [
    { code: "+237", dial_code: "CM" },
    { code: "+1", dial_code: "CA" },
    { code: "NG", name: "Nigeria", dial_code: "+234" },
    { code: "+93", dial_code: "AF" },
    { code: "+355", dial_code: "AL" },
    { code: "+213", dial_code: "DZ" },
    { code: "+1-684", dial_code: "AS" },
    { code: "+376", dial_code: "AD" },
    { code: "+244", dial_code: "AO" },
    { code: "+1-264", dial_code: "AI" },
    { code: "+672", dial_code: "AQ" },
    { code: "+1-268", dial_code: "AG" },
    { code: "+54", dial_code: "AR" },
    { code: "+374", dial_code: "AM" },
    { code: "+297", dial_code: "AW" },
    { code: "+61", dial_code: "AU" },
    { code: "+43", dial_code: "AT" },
    { code: "+994", dial_code: "AZ" },
    { code: "+1-242", dial_code: "BS" },
    { code: "+973", dial_code: "BH" },
    { code: "+880", dial_code: "BD" },
    { code: "+1-246", dial_code: "BB" },
    { code: "+375", dial_code: "BY" },
    { code: "+32", dial_code: "BE" },
    { code: "+501", dial_code: "BZ" },
    { code: "+229", dial_code: "BJ" },
    { code: "+1-441", dial_code: "BM" },
    { code: "+975", dial_code: "BT" },
    { code: "+591", dial_code: "BO" },
    { code: "+387", dial_code: "BA" },
    { code: "+267", dial_code: "BW" },
    { code: "+55", dial_code: "BR" },
    { code: "+246", dial_code: "IO" },
    { code: "+1-284", dial_code: "VG" },
    { code: "+673", dial_code: "BN" },
    { code: "+359", dial_code: "BG" },
    { code: "+226", dial_code: "BF" },
    { code: "+257", dial_code: "BI" },
    { code: "+855", dial_code: "KH" },

    { code: "+238", dial_code: "CV" },
    { code: "+1-345", dial_code: "KY" },
    { code: "+236", dial_code: "CF" },
    { code: "+235", dial_code: "TD" },
    { code: "+56", dial_code: "CL" },
    { code: "+86", dial_code: "CN" },
    { code: "+61", dial_code: "CX" },
    { code: "+61", dial_code: "CC" },
    { code: "+57", dial_code: "CO" },
    { code: "+269", dial_code: "KM" },
    { code: "+682", dial_code: "CK" },
    { code: "+506", dial_code: "CR" },
    { code: "+385", dial_code: "HR" },
    { code: "+53", dial_code: "CU" },
    { code: "+599", dial_code: "CW" },
    { code: "+357", dial_code: "CY" },
    { code: "+420", dial_code: "CZ" },
    { code: "+243", dial_code: "CD" },
    { code: "+45", dial_code: "DK" },
    { code: "+253", dial_code: "DJ" },
    { code: "+1-767", dial_code: "DM" },
    { code: "+1-809", dial_code: "DO" },
    { code: "+670", dial_code: "TL" },
    { code: "+593", dial_code: "EC" },
    { code: "+20", dial_code: "EG" },
    { code: "+503", dial_code: "SV" },
    { code: "+240", dial_code: "GQ" },
    { code: "+291", dial_code: "ER" },
    { code: "+372", dial_code: "EE" },
    { code: "+251", dial_code: "ET" },
    { code: "+500", dial_code: "FK" },
    { code: "+298", dial_code: "FO" },
    { code: "+679", dial_code: "FJ" },
    { code: "+358", dial_code: "FI" },
    { code: "+33", dial_code: "FR" },
    { code: "+689", dial_code: "PF" },
    { code: "+241", dial_code: "GA" },
    { code: "+220", dial_code: "GM" },
    { code: "+995", dial_code: "GE" },
    { code: "+49", dial_code: "DE" },
    { code: "+233", dial_code: "GH" },
    { code: "+350", dial_code: "GI" },
    { code: "+30", dial_code: "GR" },
    { code: "+299", dial_code: "GL" },
    { code: "+1-473", dial_code: "GD" },
    { code: "+1-671", dial_code: "GU" },
    { code: "+502", dial_code: "GT" },
    { code: "+44-1481", dial_code: "GG" },
    { code: "+224", dial_code: "GN" },
    { code: "+245", dial_code: "GW" },
    { code: "+592", dial_code: "GY" },
    { code: "+509", dial_code: "HT" },
    { code: "+504", dial_code: "HN" },
    { code: "+852", dial_code: "HK" },
    { code: "+36", dial_code: "HU" },
    { code: "+354", dial_code: "IS" },
    { code: "+91", dial_code: "IN" },
    { code: "+62", dial_code: "ID" },
    { code: "+98", dial_code: "IR" },
    { code: "+964", dial_code: "IQ" },
    { code: "+353", dial_code: "IE" },
    { code: "+44-1624", dial_code: "IM" },
    { code: "+972", dial_code: "IL" },
    { code: "+39", dial_code: "IT" },
    { code: "+225", dial_code: "CI" },
    { code: "+1-876", dial_code: "JM" },
    { code: "+81", dial_code: "JP" },
    { code: "+44-1534", dial_code: "JE" },
    { code: "+962", dial_code: "JO" },
    { code: "+7", dial_code: "KZ" },
    { code: "+254", dial_code: "KE" },
    { code: "+686", dial_code: "KI" },
    { code: "+383", dial_code: "XK" },
    { code: "+965", dial_code: "KW" },
    { code: "KG", name: "Kyrgyzstan", dial_code: "+996" },
    { code: "LA", name: "Laos", dial_code: "+856" },
    { code: "LV", name: "Latvia", dial_code: "+371" },
    { code: "LB", name: "Lebanon", dial_code: "+961" },
    { code: "LS", name: "Lesotho", dial_code: "+266" },
    { code: "LR", name: "Liberia", dial_code: "+231" },
    { code: "LY", name: "Libya", dial_code: "+218" },
    { code: "LI", name: "Liechtenstein", dial_code: "+423" },
    { code: "LT", name: "Lithuania", dial_code: "+370" },
    { code: "LU", name: "Luxembourg", dial_code: "+352" },
    { code: "MO", name: "Macao", dial_code: "+853" },
    { code: "MK", name: "North Macedonia", dial_code: "+389" },
    { code: "MG", name: "Madagascar", dial_code: "+261" },
    { code: "MW", name: "Malawi", dial_code: "+265" },
    { code: "MY", name: "Malaysia", dial_code: "+60" },
    { code: "MV", name: "Maldives", dial_code: "+960" },
    { code: "ML", name: "Mali", dial_code: "+223" },
    { code: "MT", name: "Malta", dial_code: "+356" },
    { code: "MH", name: "Marshall Islands", dial_code: "+692" },
    { code: "MR", name: "Mauritania", dial_code: "+222" },
    { code: "MU", name: "Mauritius", dial_code: "+230" },
    { code: "YT", name: "Mayotte", dial_code: "+262" },
    { code: "MX", name: "Mexico", dial_code: "+52" },
    { code: "FM", name: "Micronesia", dial_code: "+691" },
    { code: "MD", name: "Moldova", dial_code: "+373" },
    { code: "MC", name: "Monaco", dial_code: "+377" },
    { code: "MN", name: "Mongolia", dial_code: "+976" },
    { code: "ME", name: "Montenegro", dial_code: "+382" },
    { code: "MS", name: "Montserrat", dial_code: "+1-664" },
    { code: "MA", name: "Morocco", dial_code: "+212" },
    { code: "MZ", name: "Mozambique", dial_code: "+258" },
    { code: "MM", name: "Myanmar", dial_code: "+95" },
    { code: "NA", name: "Namibia", dial_code: "+264" },
    { code: "NR", name: "Nauru", dial_code: "+674" },
    { code: "NP", name: "Nepal", dial_code: "+977" },
    { code: "NL", name: "Netherlands", dial_code: "+31" },
    { code: "AN", name: "Netherlands Antilles", dial_code: "+599" },
    { code: "NC", name: "New Caledonia", dial_code: "+687" },
    { code: "NZ", name: "New Zealand", dial_code: "+64" },
    { code: "NI", name: "Nicaragua", dial_code: "+505" },
    { code: "NE", name: "Niger", dial_code: "+227" },

    { code: "NU", name: "Niue", dial_code: "+683" },
    { code: "KP", name: "North Korea", dial_code: "+850" },
    { code: "MP", name: "Northern Mariana Islands", dial_code: "+1-670" },
    { code: "NO", name: "Norway", dial_code: "+47" },
    { code: "OM", name: "Oman", dial_code: "+968" },
    { code: "PK", name: "Pakistan", dial_code: "+92" },
    { code: "PW", name: "Palau", dial_code: "+680" },
    { code: "PS", name: "Palestine", dial_code: "+970" },
    { code: "PA", name: "Panama", dial_code: "+507" },
    { code: "PG", name: "Papua New Guinea", dial_code: "+675" },
    { code: "PY", name: "Paraguay", dial_code: "+595" },
    { code: "PE", name: "Peru", dial_code: "+51" },
    { code: "PH", name: "Philippines", dial_code: "+63" },
    { code: "PN", name: "Pitcairn", dial_code: "+64" },
    { code: "PL", name: "Poland", dial_code: "+48" },
    { code: "PT", name: "Portugal", dial_code: "+351" },
    { code: "PR", name: "Puerto Rico", dial_code: "+1-787" },
    { code: "QA", name: "Qatar", dial_code: "+974" },
    { code: "CG", name: "Republic of the Congo", dial_code: "+242" },
    { code: "RE", name: "Réunion", dial_code: "+262" },
    { code: "RO", name: "Romania", dial_code: "+40" },
    { code: "RU", name: "Russia", dial_code: "+7" },
    { code: "RW", name: "Rwanda", dial_code: "+250" },
    { code: "BL", name: "Saint Barthélemy", dial_code: "+590" },
    { code: "SH", name: "Saint Helena", dial_code: "+290" },
    { code: "KN", name: "Saint Kitts and Nevis", dial_code: "+1-869" },
    { code: "LC", name: "Saint Lucia", dial_code: "+1-758" },
    { code: "MF", name: "Saint Martin", dial_code: "+590" },
    { code: "PM", name: "Saint Pierre and Miquelon", dial_code: "+508" },
    { code: "VC", name: "Saint Vincent and the Grenadines", dial_code: "+1-784" },
    { code: "WS", name: "Samoa", dial_code: "+685" },
    { code: "SM", name: "San Marino", dial_code: "+378" },
    { code: "ST", name: "Sao Tome and Principe", dial_code: "+239" },
    { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
    { code: "SN", name: "Senegal", dial_code: "+221" },
    { code: "RS", name: "Serbia", dial_code: "+381" },
    { code: "SC", name: "Seychelles", dial_code: "+248" },
    { code: "SL", name: "Sierra Leone", dial_code: "+232" },
    { code: "SG", name: "Singapore", dial_code: "+65" },
    { code: "SX", name: "Sint Maarten (Dutch part)", dial_code: "+1-721" },
    { code: "SK", name: "Slovakia", dial_code: "+421" },
    { code: "SI", name: "Slovenia", dial_code: "+386" },
    { code: "SB", name: "Solomon Islands", dial_code: "+677" },
    { code: "SO", name: "Somalia", dial_code: "+252" },
    { code: "ZA", name: "South Africa", dial_code: "+27" },
    { code: "KR", name: "South Korea", dial_code: "+82" },
    { code: "SS", name: "South Sudan", dial_code: "+211" },
    { code: "ES", name: "Spain", dial_code: "+34" },
    { code: "LK", name: "Sri Lanka", dial_code: "+94" },
    { code: "SD", name: "Sudan", dial_code: "+249" },
    { code: "SR", name: "Suriname", dial_code: "+597" },
    { code: "SJ", name: "Svalbard and Jan Mayen", dial_code: "+47" },
    { code: "SZ", name: "Swaziland", dial_code: "+268" },
    { code: "SE", name: "Sweden", dial_code: "+46" },
    { code: "CH", name: "Switzerland", dial_code: "+41" },
    { code: "SY", name: "Syrian Arab Republic", dial_code: "+963" },
    { code: "TW", name: "Taiwan, Province of China", dial_code: "+886" },
    { code: "TJ", name: "Tajikistan", dial_code: "+992" },
    { code: "TZ", name: "Tanzania, United Republic of", dial_code: "+255" },
    { code: "TH", name: "Thailand", dial_code: "+66" },
    { code: "TG", name: "Togo", dial_code: "+228" },
    { code: "TK", name: "Tokelau", dial_code: "+690" },
    { code: "TO", name: "Tonga", dial_code: "+676" },
    { code: "TT", name: "Trinidad and Tobago", dial_code: "+1-868" },
    { code: "TN", name: "Tunisia", dial_code: "+216" },
    { code: "TR", name: "Turkey", dial_code: "+90" },
    { code: "TM", name: "Turkmenistan", dial_code: "+993" },
    { code: "TC", name: "Turks and Caicos Islands", dial_code: "+1-649" },
    { code: "TV", name: "Tuvalu", dial_code: "+688" },
    { code: "VI", name: "U.S. Virgin Islands", dial_code: "+1-340" },
    { code: "UG", name: "Uganda", dial_code: "+256" },
    { code: "UA", name: "Ukraine", dial_code: "+380" },
    { code: "AE", name: "United Arab Emirates", dial_code: "+971" },
    { code: "GB", name: "United Kingdom", dial_code: "+44" },
    { code: "US", name: "United States", dial_code: "+1" },
    { code: "UY", name: "Uruguay", dial_code: "+598" },
    { code: "UZ", name: "Uzbekistan", dial_code: "+998" },
    { code: "VU", name: "Vanuatu", dial_code: "+678" },
    { code: "VA", name: "Vatican City", dial_code: "+379" },
    { code: "VE", name: "Venezuela", dial_code: "+58" },
    { code: "VN", name: "Vietnam", dial_code: "+84" },
    { code: "WF", name: "Wallis and Futuna", dial_code: "+681" },
    { code: "EH", name: "Western Sahara", dial_code: "+212" },
    { code: "YE", name: "Yemen", dial_code: "+967" },
    { code: "ZM", name: "Zambia", dial_code: "+260" },
    { code: "ZW", name: "Zimbabwe", dial_code: "+263" }
]