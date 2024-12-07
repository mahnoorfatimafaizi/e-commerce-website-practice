'use client';

import Link from "next/link";
import Menu from "./Menu"; // Import your Menu component
import Image from "next/image";
import SearchBar from "./SearchBar"; // Import your SearchBar component
import dynamic from "next/dynamic";
import {FcSearch} from "react-icons/fc";
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";


const HeaderIcons = dynamic(() => import("./HeaderIcons"), { ssr: false }); // Import your HeaderIcons component

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border-b shadow-sm bg-white">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </Link>
        <div className="hidden md:flex ml-10 space-x-6">
          <Link href="/" className="text-gray-600 hover:underline">Home</Link>
          <Link href="/contact" className="text-gray-600 hover:underline">Contact</Link>
          <Link href="/about" className="text-gray-600 hover:underline">About</Link>
          <Link href="/signup" className="text-gray-600 hover:underline">Sign Up</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative w-64"> {/* Search Bar */}
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FcSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"/>
        </div>
        <div className="flex items-center space-x-4">
          <AiOutlineHeart className="text-gray-600 hover:text-red-500 cursor-pointer h-6 w-6"/>
          <AiOutlineShoppingCart className="text-gray-600 hover:text-red-500 cursor-pointer h-6 w-6"/>
        </div>
      </div>


      {/* Mobile Menu (only visible on smaller screens) */}
      <div className="md:hidden">
        <Menu /> {/* Your menu component */}
      </div>
    </header>
  );
};

export default Header;