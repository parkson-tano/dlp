'use client'
import React, { useState } from "react";
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import axios from "axios";

function ModalForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [refer, setRefer] = useState('')
    const [level, setLevel] = useState('')
    const [period, setPeriod] = useState('')
    const [amount, setAmount] = useState(0)
    const [showAccountDetails, setShowAccountDetails] = useState(false)
    const [showForm, setShowForm] = useState(true)
    const BASE_URL = 'https://tano.pythonanywhere.com/send_email/'

    interface ApiResponse {
        status: string;
        data: any;
    }

    const handleSubmit = () => {
        if (phoneNumber !== "" && level !== "" && period !== "") {
            const registrationData = {
                full_name: fullName,
                email: email,
                phone: phoneNumber,
                refer: refer,
                level: level,
                period: period
            };

            axios.post(BASE_URL, registrationData)
                .then(response => {
                    alert("You have successfully registered for the event!");
                    setSubmitted(true);
                    setShowAccountDetails(true);
                    setShowForm(false);
                    setEmail("");
                    setFullName("");
                    setPhoneNumber("");
                    setRefer("");
                    setLevel("");
                    setPeriod("");
                    setAmount(0);
                })
                .catch(error => {
                    if (error.response && error.response.status === 402) {
                        alert("Payment is required to complete the registration. Please make the payment and try again.");
                    } else {
                        console.error("There was an error registering!", error);
                        alert("There was an error registering. Please try again.");
                    }
                });
        } else {
            alert("Please enter a phone number, select a level, and select a period.");
        }
    }

    const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPeriod = e.target.value;
        setPeriod(selectedPeriod);
        switch (selectedPeriod) {
            case '1 Month':
                setAmount(200);
                break;
            case '1 Year':
                setAmount(500);
                break;
            case 'Bull Run Season':
                setAmount(500);
                break;
            case 'Lifetime':
                setAmount(2000);
                break;
            default:
                setAmount(0);
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard: " + text);
    }

    return (
        <MantineProvider>
            <section className="flex justify-center py-5  mb-5 items-center bg-gray-200">
                <div className="max-w-lg w-full px-6 py-10 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-center text-slate-900">Join Now</h2>
                    {
                        submitted && (
                            <p className="text-2xl font-bold mb-4 text-slate-900">
                                Registration successful! Please proceed with the payment.
                            </p>
                        )
                    }

                    {showForm && (
                        <div className="space-y-4">
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
                                    Phone Number (With Country Code Ex- +237 XXX)
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
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
                                    Level in Crypto
                                </label>
                                <select
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                    id="level"
                                    name="level"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select your level</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="period">
                                    Period in Inner Cycle
                                </label>
                                <select
                                    value={period}
                                    onChange={handlePeriodChange}
                                    id="period"
                                    name="period"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select a period</option>
                                    <option value="1 Month">1 Month</option>
                                    <option value="1 Year">1 Year</option>
                                    <option value="Bull Run Season">Bull Run Season</option>
                                    <option value="Lifetime">Lifetime</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Amount to Pay: USDT {amount}
                                </label>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-green-400 to-red-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                        </div>
                    )}

                    

                    {showAccountDetails && (
                        <div>
                            <label className="block text-2xl text-black font-bold mb-2">Account Details</label>
                            <p className="block text-gray-900 text-md font-semibold mb-2">Crypto (USDT): <span className="text-blue-500 cursor-pointer" onClick={() => copyToClipboard('TDpRTFU1JhHBd4RGeTprwSQwumgRwXjoXE')}>TDpRTFU1JhHBd4RGeTprwSQwumgRwXjoXE</span></p>
                            <p className="block text-gray-900 text-md font-semibold mb-2">Bank Account (Opay): <span className="text-blue-500 cursor-pointer" onClick={() => copyToClipboard('8077459024')}>8077459024 - PRINCE DESTINY CHIBUEZ</span></p>
                            <p className="block text-gray-900 text-md font-semibold mb-2">Mobile Money (MTN Cameroon): <span className="text-blue-500 cursor-pointer" onClick={() => copyToClipboard('671959493')}>671959493</span></p>
                            {/* <p className="block text-gray-900 text-md font-semibold mb-2">Mobile Money (Orange Cameroon): <span className="text-blue-500 cursor-pointer" onClick={() => copyToClipboard('Orange_Cameroon_Number')}>Orange_Cameroon_Number</span></p> */}
                            <a
                                href="https://wa.me/+237671959493?text=I%20have%20made%20the%20payment.%20Here%20is%20the%20screenshot."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-500 my-4"
                            >
                                Send Screenshot via WhatsApp
                            </a>
                        </div>
                    )}

                    <p className="text-md text-gray-800">
                        If you need any assistance or have any questions, please contact our support team on WhatsApp:
                        <a
                            href="https://wa.me/237671959493?text=Hello,%20I%20need%20assistance%20with%20my%20registration."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 font-medium ml-1"
                        >
                            +237 671 959 493
                        </a>
                    </p>
                </div>
            </section>
        </MantineProvider>
    );
}

export default ModalForm;