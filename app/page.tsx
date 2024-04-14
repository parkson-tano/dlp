import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white ">
      <header className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Unlock the Power of Crypto with Our Exclusive Spreadsheets!</h1>
          <p className="text-lg mb-8">Gain Access to Strategies that Could Skyrocket Your Earnings!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Explore Now
          </button>
        </div>
      </header>


      <section className="bg-gray-100 py-5 flex justify-center items-center">
        <Image
          className="relative z-10 rounded-10"
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
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center"> Introduction to Cryptocurrency</h3>
              <p className="text-gray-700">Gain foundational knowledge about cryptocurrency, including its history, technology, and significance in the financial world.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Trading Strategies</h3>
              <p className="text-gray-700">Learn various trading strategies used in cryptocurrency markets, from day trading to long-term investing.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center"> Risk Management</h3>
              <p className="text-gray-700">Understand the importance of risk management in cryptocurrency trading and how to mitigate potential losses.</p>
            </div>
            <div className=" bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Advanced Techniques</h3>
              <p className="text-gray-700">Explore advanced trading techniques, such as technical analysis, chart patterns, and algorithmic trading.</p>
            </div>
          </div>
        </div>
      </section>


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

      <section className="flex justify-center  mb-5 items-center bg-gray-200">
        <div className="max-w-lg w-full px-6  bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Register for the Event</h2>
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
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
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

    </main>
  );
}
