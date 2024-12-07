"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StarIcon from "./StarIcon"; // Make sure this file exists


interface Product {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    image: "/images/gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
  },
  {
    image: "/images/keyboard.png",
    title: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 3.5,
    reviews: 75,
  },
  {
    image: "/images/monitor.png",
    title: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4.5,
    reviews: 99,
  },
  {
    image: "/images/chair.png",
    title: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 99,
  },
  
];

const FlashSales: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          clearInterval(timer);
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
            <p className="text-xl font-bold">Today's</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
        <div className="flex items-center gap-8 mb-3">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
            {products.map((product) => (
              <div
                key={product.title}
                className="w-64 bg-white rounded-lg shadow-md p-4 flex flex-col snap-start relative"
              >
                <div className="relative h-40 w-full cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg transition-opacity duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-black opacity-0 hover:opacity-70 flex items-center justify-center rounded-lg transition-opacity duration-300"
                  >
                    <button className="bg-white text-black px-4 py-2 rounded-md">
                      Add To Cart
                    </button>
                  </div>
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    -{product.discount}%
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-gray-800 font-medium">{product.title}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-red-500 font-semibold">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-500 line-through ml-1">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < product.rating} />
                    ))}
                    <span className="text-gray-500 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-red-500 text-white px-6 py-2 text-sm font-semibold rounded shadow hover:bg-red-600 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;