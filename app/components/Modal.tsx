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
                                Congratulations! You are officially registered. Keep an eye on your inbox for the meeting link—it is on its way!
                            </p>
                        )
                    }

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
                    </div>
                </div>
            </section>
        </MantineProvider>
    );
}

export default ModalForm;
