import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarIcon from './StarIcon'; // Import your star icon component (see below)


interface Product {
    image: string;
    title: string;
    price: number;
    originalPrice: number; // Added originalPrice to the interface
    rating: number;
    reviews: number;
  }
  
  const products: Product[] = [
    {
      image: '/images/north-coat.png',
      title: 'The north coat',
      price: 260,
      originalPrice: 360, // Added originalPrice
      rating: 4,
      reviews: 65,
    },
    {
      image: '/images/gucci-bag.png',
      title: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160, // Added originalPrice
      rating: 4.5,
      reviews: 85,
    },
    {
      image: '/images/cpu-cooler.png',
      title: 'RGB liquid CPU Cooler',
      price: 160,
      originalPrice: 170, // Added originalPrice
      rating: 4,
      reviews: 85,
    },
    {
      image: '/images/bookshelf.png',
      title: 'Small BookSelf',
      price: 360,
      originalPrice: 400, // Added originalPrice
      rating: 4.5,
      reviews: 85,
    },
  ];

const BestSellingProducts: React.FC = () => {
  return (
    <section className="mx-auto px-4 py-8 mb-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
        <span className="w-2 h-5 bg-red-600 rounded"></span>
          <p className="text-red-600 font-semibold lg:text-2xl">This Month</p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          View All
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.title} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
              />
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
                <span className="text-gray-500 ml-1">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;