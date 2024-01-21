import React from 'react';
import Link from 'next/link';

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">

      <div className="flex flex-1 items-center justify-center px-6 mx-auto">
        <form className="w-full max-w-md text-center">
          <h1 className="text-6xl font-semibold text-gray-800 capitalize  dark:text-black">CookAI</h1>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
          </div>
          <div className="mt-6">
            <Link href="./account">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
            </Link>
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Don’t have an account yet? Sign up!
              </a>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center w-full max-w-screen-lg overflow-x-auto">
        <img src="../public/images/pumpkin.png" alt="Pumpkin" className="max-w-xs mr-4" />
        <img src="/images/letuce.png" alt="Letuce" className="max-w-xs mr-4" />
        <img src="/images/potato.png" alt="Potato" className="max-w-xs mr-4" />
        <img src="/images/avocado.png" alt="Avocado" className="max-w-xs mr-4"/>
      </div>

    </main>
  );
  }
