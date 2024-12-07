import React from 'react';
import Image from 'next/image';
import StarIcon from './StarIcon'; // Make sure you have this component


interface Product {
  image: string;
  title: string;
  price: number;
  originalPrice?: number; // Optional original price
  rating: number;
  reviews: number;
  colors?: string[]; // Optional array of colors
  newProduct?: boolean; // Optional flag for "New" products
}


const products: Product[] = [
  {
    image: '/images/dogfood.png',
    title: 'Breed Dry Dog Food',
    price: 100,
    rating: 4,
    reviews: 35,
  },
  {
    image: '/images/camera-p.png',
    title: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4.5,
    reviews: 95,
  },
  {
    image: '/images/laptop.png',
    title: 'ASUS FHD Gaming Laptop',
    price: 700,
    rating: 4,
    reviews: 325,
    newProduct: true,
  },
  {
    image: '/images/curology.png',
    title: 'Curology Product Set',
    price: 500,
    rating: 4.5,
    reviews: 145,
  },
  {
    image: '/images/car.png',
    title: 'Kids Electric Car',
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 65,
    newProduct: true,
    colors: ['red', 'blue'],
  },
  {
    image: '/images/cleats.png',
    title: 'Jr. Zoom Soccer Cleats',
    price: 160,
    rating: 4,
    reviews: 35,
    colors: ['yellow', 'red'],
  },
  {
    image: '/images/gamepad2.png',
    title: 'GP11 Shooter USB Gamepad',
    price: 660,
    rating: 4.5,
    reviews: 55,
    colors: ['black', 'red'],
    newProduct: true,
  },
  {
    image: '/images/jacket.png',
    title: 'Quilted Satin Jacket',
    price: 660,
    rating: 4,
    reviews: 55,
    colors: ['green', 'black'],
  },
];


const ExploreProducts: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
          <p className="text-red-600 font-semibold lg:text-2xl">Our Products</p>
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
      <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.title} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-40 w-full">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
              {product.newProduct && (
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                  NEW
                </span>
              )}
            </div>
            <div className="mt-2">
              <p className="text-gray-800 font-medium">{product.title}</p>
              <div className="flex items-center mt-1">
                <span className="text-red-500 font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through ml-1">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < product.rating} />
                ))}
                <span className="text-gray-500 ml-1">({product.reviews})</span>
              </div>
              {product.colors && (
                <div className="flex mt-2 space-x-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`h-3 w-3 rounded-full bg-${color}-500`}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-red-500 text-white px-6 py-2 text-sm font-semibold rounded shadow hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;