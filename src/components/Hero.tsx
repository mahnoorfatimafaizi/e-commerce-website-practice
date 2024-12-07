import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row bg-white dark:bg-background py-7">

      {/* Left sidebar */}
      <div className="w-full md:w-1/4 p-4 border-r border-border">
        <ul className="space-y-0.5 text-sm md:text-base">
          {[
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((category, index) => (
            <li
              key={index}
              className="flex justify-between items-center hover:bg-gray-100 p-2 rounded cursor-pointer"
            >
              {category}
              <span>&#8250;</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Hero Image */}
      <div className="flex-1 p-4 mx-10">
        <div className="relative h-[345px] bg-black rounded-lg overflow-hidden">
          <Image
            src="/images/hero_img.png" // Replace with your image path
            alt="iPhone Banner"
            width={800}
            height={400}
            className="absolute inset-0 w-full h-full object-contain" // Changed to object-contain
          />
        </div>
      </div>

    </main>
  )
}

export default Hero;