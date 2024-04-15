// import React from "react"
'use client'
import axios from "axios";

export default function Export() {


    const BASE_URL = 'https://tano.pythonanywhere.com/send_email/export'

    const handleSubmit = () => {
        axios.get(BASE_URL, {
            responseType: 'blob' // Set responseType to 'blob' to indicate binary data
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'newsletters.csv');
                document.body.appendChild(link);
                link.click();
           
                // Display a confirmation message to the user
                alert("You have successfully downloaded!");
            })
            .catch((error) => {
                // Display an error message to the user
                alert("Failed to download. Please try again later.");
                console.error("Error:", error);
            });
    }



    return (

        <main className="flex flex-col justify-center items-center min-h-screen bg-white">

            <button
                onClick={handleSubmit}
                className="w-full max-w-md bg-gradient-to-r from-green-400 to-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Export Data to CSV
            </button>

            <footer className="absolute bottom-0 w-full bg-gray-800 text-gray-300 py-4 px-10 flex justify-between items-center">
                <div>&copy; 2024 Digital Life Prince. All Rights Reserved.</div>
            </footer>

        </main>


    );
}
