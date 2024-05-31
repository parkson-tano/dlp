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
    const BASE_URL = 'https://tano.pythonanywhere.com/send_email/'


    interface ApiResponse {
        // Define the structure of your API response here
        // For example:
        status: string;
        data: any; // Adjust the data type according to your API response structure
    
    }

    const handleSubmit = () => {
        if (email !== "" || phoneNumber !== "" || refer !== "") {
            axios.post(BASE_URL, {
                full_name: fullName,
                email: email,
                phone: phoneNumber,
                refer: refer
            })
            .then((response) => {
                console.log(response);
                // Display a confirmation message to the user
                alert("You have successfully registered for the event!");
                // Reset form fields and state
                setSubmitted(true);
                setEmail("");
                setFullName("");
                setPhoneNumber("");
                setRefer("");
            })
            .catch((error) => {
                // Display an error message to the user
                alert("You Already Registered for this event");
                console.error("Error:", error);
            });
        } else {
            // Prompt the user to enter either email or phone number
            alert("Please enter a phone number or an email address or referral ");
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
                                id="refer"
                                name="refer"
                                placeholder="Enter your phone number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />

                        </div>
                           <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Who Referred You?
                            </label>
                            <input
                                value={refer}
                                onChange={(e) => setRefer(e.target.value)}
                                type="text"
                                id="name"
                                name="name"
                                required = {true}
                                placeholder="Enter your name who referred you"
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
