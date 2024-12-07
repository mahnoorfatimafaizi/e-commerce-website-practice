import React from 'react'

const TopHeader = () => {
  return (
    <div className="bg-black text-white text-sm py-2">
        {/* Container for the top header */}
        <div className="mx-auto px-4 relative flex justify-between items-center w-full max-w-7xl">
          {/* Promo text */}
          <p className="flex-1 text-center sm:text-left">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <span className="underline cursor-pointer">Shop Now</span>
          </p>

          {/* Language selector */}
          <div className="flex items-center space-x-2">
            <p>English</p>
            <select className="bg-black text-white border-none focus:outline-none cursor-pointer">
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default TopHeader