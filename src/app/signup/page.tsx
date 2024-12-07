import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const page: React.FC = () => {


  return (
    <div className="flex items-center justify-center min-h-screen bg-light-blue-50">
      <div className="mr-10">
        <Image
          src="/images/slide-image.png"
          alt="shopping-cart"
          width={600}
          height={500}
        />
      </div>
      <div className=" w-98">
        <h2 className="text-2xl font-bold mb-4 text-center">Create an account</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your details below
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email or Phone Number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
          <Image src="/images/googlesignup.png" alt="google sign up" 
          width={30}
          height={30} />
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-red-500 underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;