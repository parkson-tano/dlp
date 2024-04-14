// import React from "react"
'use client'
import Image from "next/image";
import ModalForm from "./components/Modal";
import { SocialIcon } from 'react-social-icons'



export default function Home() {

  const whatYouWillLearn = [
    {
      title: "Deep Fundamentals",
      description: "Gain a comprehensive understanding of cryptocurrency fundamentals, including blockchain technology, history, and financial implications.",
    },
    {
      title: "Identifying Promising Coins",
      description: "Learn strategies for identifying cryptocurrencies with strong growth potential based on factors like technology, team, and market demand.",
    },
    {
      title: "Mastering Entry and Exit Points",
      description: "Understand how to identify optimal entry and exit points for trades using technical analysis techniques and indicators.",
    },
    {
      title: "Discovering Gems",
      description: "Explore emerging cryptocurrencies with disruptive technologies and strong fundamentals that have the potential to outperform popular assets.",
    },
    {
      title: 'Trading Strategies',
      description: 'Learn various trading strategies used in cryptocurrency markets, from day trading to long-term investing.'
    },
    {
      title: 'Risk Management',
      description: 'Understand the importance of risk management in cryptocurrency trading and how to mitigate potential losses.'
    }
  ];

  return (

    <main className="flex flex-col justify-between min-h-screen bg-white">

      {/* <Button onClick={open}>Open modal</Button> */}
      <header className="bg-gray-900 text-white py-12 px-5">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">
            Position to 🔑 Unlock that success in crypto on the day of halving with 100X TO 5000X GEMS
          </h1>

          <h1 className="text-red-300 bg-clip-text text-3xl font-bold ">
            NYCE AYUK!
          </h1>
          <p className="text-lg mb-8">Gain Access to Strategies that Could Skyrocket Your Earnings!</p>
          <a href="#reg" className="bg-gradient-to-r from-blue-400 to-red-500  hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Explore Now
          </a>
        </div>
      </header>

      <section className="bg-gray-100 py-5 flex justify-center items-center">
        <Image
          className="relative rounded-10"
          src="/crypto_course.jpeg"
          alt="Next.js Logo"
          width={1000}
          height={800}
          priority
        />
      </section>

      <section className="bg-gray-100 px-5 mb-5 text-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What You Will Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              whatYouWillLearn.map((item, index) => (
                <div className="bg-red rounded-lg shadow-md px-5 py-6" key={index}>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))
            }

          </div>
        </div>
      </section>
      <div className="telegram-icon">
        <SocialIcon url="www.telegram.com" href="https://t.me/bullruncameroon" target="_blank"
          rel="noreferrer" />
      </div>

      <div className="whatsapp-icon">
        <SocialIcon url="www.whatsapp.com" href="https://chat.whatsapp.com/HwIOJfwNg8C4LM6luQ5OHk" target="_blank"
          rel="noreferrer" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:mb-0 lg:w-full lg:max-w-5xl lg:flex-row lg:flex-wrap">

          <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">
            Want to see the results for yourself? Check out these screenshots.
          </h2>

          <div className="w-full lg:w-1/2 px-3 mb-3 lg:mb-0">
            <Image
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              src="/prove1.avif"
              alt="Next.js Logo"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-3 lg:mb-0">
            <Image
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              src="/prove2.avif"
              alt="Next.js Logo"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-3 lg:mb-0">
            <Image
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              src="/prove3.avif"
              alt="Next.js Logo"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-3 lg:mb-0">
            <Image
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              src="/prove4.avif"
              alt="Next.js Logo"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div id='reg'>

        <ModalForm />
      </div>
      <footer className="bg-gray-800 text-gray-300 py-4 px-6 flex justify-between items-center">
    <div className="flex space-x-4">
      
    </div>
    <div>&copy; 2024 Your Company. All Rights Reserved.</div>
</footer>

    </main>

  );
}
