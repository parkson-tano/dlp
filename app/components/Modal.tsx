'use client'
import React, { useState } from "react";
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
function ModalForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (email !== "" || phoneNumber !== "") {
            setSubmitted(true);
            setEmail("");
            setFullName("");
            setPhoneNumber("");
        } else {
            alert("Please enter a phone number or an email address.");
        }
    }

    return (
        <MantineProvider>
            <section className="flex justify-center py-5  mb-5 items-center bg-gray-200">
                <div className="max-w-lg w-full px-6 py-10 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-center text-slate-900">Register for the Event</h2>
                    {
    submitted && (
        <p className="text-2xl font-bold mb-4 text-slate-900">
            Congratulations! You're officially registered. Keep an eye on your inbox for the meeting link—it's on its way!
        </p>
    )
}

                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                            <input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />

                        </div>

                        <button
                        onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-green-400 to-red-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </section>
        </MantineProvider>
    );
}

export default ModalForm;
const countryCodes = [
    { dial_code: "237", code: "CM" },
    { dial_code: "1", code: "CA" },
    { dial_code: "234", code: "NG" },
    { dial_code: "93", code: "AF" },
    { dial_code: "355", code: "AL" },
    { dial_code: "213", code: "DZ" },
    { dial_code: "1-684", code: "AS" },
    { dial_code: "376", code: "AD" },
    { dial_code: "244", code: "AO" },
    { dial_code: "1-264", code: "AI" },
    { dial_code: "672", code: "AQ" },
    { dial_code: "1-268", code: "AG" },
    { dial_code: "54", code: "AR" },
    { dial_code: "374", code: "AM" },
    { dial_code: "297", code: "AW" },
    { dial_code: "61", code: "AU" },
    { dial_code: "43", code: "AT" },
    { dial_code: "994", code: "AZ" },
    { dial_code: "1-242", code: "BS" },
    { dial_code: "973", code: "BH" },
    { dial_code: "880", code: "BD" },
    { dial_code: "1-246", code: "BB" },
    { dial_code: "375", code: "BY" },
    { dial_code: "32", code: "BE" },
    { dial_code: "501", code: "BZ" },
    { dial_code: "229", code: "BJ" },
    { dial_code: "1-441", code: "BM" },
    { dial_code: "975", code: "BT" },
    { dial_code: "591", code: "BO" },
    { dial_code: "387", code: "BA" },
    { dial_code: "267", code: "BW" },
    { dial_code: "55", code: "BR" },
    { dial_code: "246", code: "IO" },
    { dial_code: "1-284", code: "VG" },
    { dial_code: "673", code: "BN" },
    { dial_code: "359", code: "BG" },
    { dial_code: "226", code: "BF" },
    { dial_code: "257", code: "BI" },
    { dial_code: "855", code: "KH" },

    { dial_code: "238", code: "CV" },
    { dial_code: "1-345", code: "KY" },
    { dial_code: "236", code: "CF" },
    { dial_code: "235", code: "TD" },
    { dial_code: "56", code: "CL" },
    { dial_code: "86", code: "CN" },
    { dial_code: "61", code: "CX" },
    { dial_code: "61", code: "CC" },
    { dial_code: "57", code: "CO" },
    { dial_code: "269", code: "KM" },
    { dial_code: "682", code: "CK" },
    { dial_code: "506", code: "CR" },
    { dial_code: "385", code: "HR" },
    { dial_code: "53", code: "CU" },
    { dial_code: "599", code: "CW" },
    { dial_code: "357", code: "CY" },
    { dial_code: "420", code: "CZ" },
    { dial_code: "243", code: "CD" },
    { dial_code: "45", code: "DK" },
    { dial_code: "253", code: "DJ" },
    { dial_code: "1-767", code: "DM" },
    { dial_code: "1-809", code: "DO" },
    { dial_code: "670", code: "TL" },
    { dial_code: "593", code: "EC" },
    { dial_code: "20", code: "EG" },
    { dial_code: "503", code: "SV" },
    { dial_code: "240", code: "GQ" },
    { dial_code: "291", code: "ER" },
    { dial_code: "372", code: "EE" },
    { dial_code: "251", code: "ET" },
    { dial_code: "500", code: "FK" },
    { dial_code: "298", code: "FO" },
    { dial_code: "679", code: "FJ" },
    { dial_code: "358", code: "FI" },
    { dial_code: "33", code: "FR" },
    { dial_code: "689", code: "PF" },
    { dial_code: "241", code: "GA" },
    { dial_code: "220", code: "GM" },
    { dial_code: "995", code: "GE" },
    { dial_code: "49", code: "DE" },
    { dial_code: "233", code: "GH" },
    { dial_code: "350", code: "GI" },
    { dial_code: "30", code: "GR" },
    { dial_code: "299", code: "GL" },
    { dial_code: "1-473", code: "GD" },
    { dial_code: "1-671", code: "GU" },
    { dial_code: "502", code: "GT" },
    { dial_code: "44-1481", code: "GG" },
    { dial_code: "224", code: "GN" },
    { dial_code: "245", code: "GW" },
    { dial_code: "592", code: "GY" },
    { dial_code: "509", code: "HT" },
    { dial_code: "504", code: "HN" },
    { dial_code: "852", code: "HK" },
    { dial_code: "36", code: "HU" },
    { dial_code: "354", code: "IS" },
    { dial_code: "91", code: "IN" },
    { dial_code: "62", code: "ID" },
    { dial_code: "98", code: "IR" },
    { dial_code: "964", code: "IQ" },
    { dial_code: "353", code: "IE" },
    { dial_code: "44-1624", code: "IM" },
    { dial_code: "972", code: "IL" },
    { dial_code: "39", code: "IT" },
    { dial_code: "225", code: "CI" },
    { dial_code: "1-876", code: "JM" },
    { dial_code: "81", code: "JP" },
    { dial_code: "44-1534", code: "JE" },
    { dial_code: "962", code: "JO" },
    { dial_code: "7", code: "KZ" },
    { dial_code: "254", code: "KE" },
    { dial_code: "686", code: "KI" },
    { dial_code: "383", code: "XK" },
    { dial_code: "965", code: "KW" },
    { code: "KG", name: "Kyrgyzstan", dial_code: "996" },
    { code: "LA", name: "Laos", dial_code: "856" },
    { code: "LV", name: "Latvia", dial_code: "371" },
    { code: "LB", name: "Lebanon", dial_code: "961" },
    { code: "LS", name: "Lesotho", dial_code: "266" },
    { code: "LR", name: "Liberia", dial_code: "231" },
    { code: "LY", name: "Libya", dial_code: "218" },
    { code: "LI", name: "Liechtenstein", dial_code: "423" },
    { code: "LT", name: "Lithuania", dial_code: "370" },
    { code: "LU", name: "Luxembourg", dial_code: "352" },
    { code: "MO", name: "Macao", dial_code: "853" },
    { code: "MK", name: "North Macedonia", dial_code: "389" },
    { code: "MG", name: "Madagascar", dial_code: "261" },
    { code: "MW", name: "Malawi", dial_code: "265" },
    { code: "MY", name: "Malaysia", dial_code: "60" },
    { code: "MV", name: "Maldives", dial_code: "960" },
    { code: "ML", name: "Mali", dial_code: "223" },
    { code: "MT", name: "Malta", dial_code: "356" },
    { code: "MH", name: "Marshall Islands", dial_code: "692" },
    { code: "MR", name: "Mauritania", dial_code: "222" },
    { code: "MU", name: "Mauritius", dial_code: "230" },
    { code: "YT", name: "Mayotte", dial_code: "262" },
    { code: "MX", name: "Mexico", dial_code: "52" },
    { code: "FM", name: "Micronesia", dial_code: "691" },
    { code: "MD", name: "Moldova", dial_code: "373" },
    { code: "MC", name: "Monaco", dial_code: "377" },
    { code: "MN", name: "Mongolia", dial_code: "976" },
    { code: "ME", name: "Montenegro", dial_code: "382" },
    { code: "MS", name: "Montserrat", dial_code: "1-664" },
    { code: "MA", name: "Morocco", dial_code: "212" },
    { code: "MZ", name: "Mozambique", dial_code: "258" },
    { code: "MM", name: "Myanmar", dial_code: "95" },
    { code: "NA", name: "Namibia", dial_code: "264" },
    { code: "NR", name: "Nauru", dial_code: "674" },
    { code: "NP", name: "Nepal", dial_code: "977" },
    { code: "NL", name: "Netherlands", dial_code: "31" },
    { code: "AN", name: "Netherlands Antilles", dial_code: "599" },
    { code: "NC", name: "New Caledonia", dial_code: "687" },
    { code: "NZ", name: "New Zealand", dial_code: "64" },
    { code: "NI", name: "Nicaragua", dial_code: "505" },
    { code: "NE", name: "Niger", dial_code: "227" },

    { code: "NU", name: "Niue", dial_code: "683" },
    { code: "KP", name: "North Korea", dial_code: "850" },
    { code: "MP", name: "Northern Mariana Islands", dial_code: "1-670" },
    { code: "NO", name: "Norway", dial_code: "47" },
    { code: "OM", name: "Oman", dial_code: "968" },
    { code: "PK", name: "Pakistan", dial_code: "92" },
    { code: "PW", name: "Palau", dial_code: "680" },
    { code: "PS", name: "Palestine", dial_code: "970" },
    { code: "PA", name: "Panama", dial_code: "507" },
    { code: "PG", name: "Papua New Guinea", dial_code: "675" },
    { code: "PY", name: "Paraguay", dial_code: "595" },
    { code: "PE", name: "Peru", dial_code: "51" },
    { code: "PH", name: "Philippines", dial_code: "63" },
    { code: "PN", name: "Pitcairn", dial_code: "64" },
    { code: "PL", name: "Poland", dial_code: "48" },
    { code: "PT", name: "Portugal", dial_code: "351" },
    { code: "PR", name: "Puerto Rico", dial_code: "1-787" },
    { code: "QA", name: "Qatar", dial_code: "974" },
    { code: "CG", name: "Republic of the Congo", dial_code: "242" },
    { code: "RE", name: "Réunion", dial_code: "262" },
    { code: "RO", name: "Romania", dial_code: "40" },
    { code: "RU", name: "Russia", dial_code: "7" },
    { code: "RW", name: "Rwanda", dial_code: "250" },
    { code: "BL", name: "Saint Barthélemy", dial_code: "590" },
    { code: "SH", name: "Saint Helena", dial_code: "290" },
    { code: "KN", name: "Saint Kitts and Nevis", dial_code: "1-869" },
    { code: "LC", name: "Saint Lucia", dial_code: "1-758" },
    { code: "MF", name: "Saint Martin", dial_code: "590" },
    { code: "PM", name: "Saint Pierre and Miquelon", dial_code: "508" },
    { code: "VC", name: "Saint Vincent and the Grenadines", dial_code: "1-784" },
    { code: "WS", name: "Samoa", dial_code: "685" },
    { code: "SM", name: "San Marino", dial_code: "378" },
    { code: "ST", name: "Sao Tome and Principe", dial_code: "239" },
    { code: "SA", name: "Saudi Arabia", dial_code: "966" },
    { code: "SN", name: "Senegal", dial_code: "221" },
    { code: "RS", name: "Serbia", dial_code: "381" },
    { code: "SC", name: "Seychelles", dial_code: "248" },
    { code: "SL", name: "Sierra Leone", dial_code: "232" },
    { code: "SG", name: "Singapore", dial_code: "65" },
    { code: "SX", name: "Sint Maarten (Dutch part)", dial_code: "1-721" },
    { code: "SK", name: "Slovakia", dial_code: "421" },
    { code: "SI", name: "Slovenia", dial_code: "386" },
    { code: "SB", name: "Solomon Islands", dial_code: "677" },
    { code: "SO", name: "Somalia", dial_code: "252" },
    { code: "ZA", name: "South Africa", dial_code: "27" },
    { code: "KR", name: "South Korea", dial_code: "82" },
    { code: "SS", name: "South Sudan", dial_code: "211" },
    { code: "ES", name: "Spain", dial_code: "34" },
    { code: "LK", name: "Sri Lanka", dial_code: "94" },
    { code: "SD", name: "Sudan", dial_code: "249" },
    { code: "SR", name: "Suriname", dial_code: "597" },
    { code: "SJ", name: "Svalbard and Jan Mayen", dial_code: "47" },
    { code: "SZ", name: "Swaziland", dial_code: "268" },
    { code: "SE", name: "Sweden", dial_code: "46" },
    { code: "CH", name: "Switzerland", dial_code: "41" },
    { code: "SY", name: "Syrian Arab Republic", dial_code: "963" },
    { code: "TW", name: "Taiwan, Province of China", dial_code: "886" },
    { code: "TJ", name: "Tajikistan", dial_code: "992" },
    { code: "TZ", name: "Tanzania, United Republic of", dial_code: "255" },
    { code: "TH", name: "Thailand", dial_code: "66" },
    { code: "TG", name: "Togo", dial_code: "228" },
    { code: "TK", name: "Tokelau", dial_code: "690" },
    { code: "TO", name: "Tonga", dial_code: "676" },
    { code: "TT", name: "Trinidad and Tobago", dial_code: "1-868" },
    { code: "TN", name: "Tunisia", dial_code: "216" },
    { code: "TR", name: "Turkey", dial_code: "90" },
    { code: "TM", name: "Turkmenistan", dial_code: "993" },
    { code: "TC", name: "Turks and Caicos Islands", dial_code: "1-649" },
    { code: "TV", name: "Tuvalu", dial_code: "688" },
    { code: "VI", name: "U.S. Virgin Islands", dial_code: "1-340" },
    { code: "UG", name: "Uganda", dial_code: "256" },
    { code: "UA", name: "Ukraine", dial_code: "380" },
    { code: "AE", name: "United Arab Emirates", dial_code: "971" },
    { code: "GB", name: "United Kingdom", dial_code: "44" },
    { code: "US", name: "United States", dial_code: "1" },
    { code: "UY", name: "Uruguay", dial_code: "598" },
    { code: "UZ", name: "Uzbekistan", dial_code: "998" },
    { code: "VU", name: "Vanuatu", dial_code: "678" },
    { code: "VA", name: "Vatican City", dial_code: "379" },
    { code: "VE", name: "Venezuela", dial_code: "58" },
    { code: "VN", name: "Vietnam", dial_code: "84" },
    { code: "WF", name: "Wallis and Futuna", dial_code: "681" },
    { code: "EH", name: "Western Sahara", dial_code: "212" },
    { code: "YE", name: "Yemen", dial_code: "967" },
    { code: "ZM", name: "Zambia", dial_code: "260" },
    { code: "ZW", name: "Zimbabwe", dial_code: "263" }
]