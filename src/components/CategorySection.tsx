import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  icon: string;
  label: string;
  route: string;
}

const categories: Category[] = [
  { icon: '/images/phone.png', label: 'Phones', route: '/phones' },
  { icon: '/images/computer.png', label: 'Computers', route: '/computers' },
  { icon: '/images/smartwatch.png', label: 'SmartWatch', route: '/smartwatches' },
  { icon: '/images/camera.png', label: 'Camera', route: '/cameras' },
  { icon: '/images/headphones.png', label: 'HeadPhones', route: '/headphones' },
  { icon: '/images/gaming.png', label: 'Gaming', route: '/gaming' },
];

const CategorySection: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
          <p className="text-red-600 font-semibold lg:text-2xl">Categories</p>
        </div>
        <div className="flex space-x-2">
          <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 9.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 10.414l-2.293 2.293a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Browse By Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 mb-8">
        {categories.map((category) => (
          <Link href={category.route} key={category.label}>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300">
              <div className="flex flex-col items-center">
                <Image
                  src={category.icon}
                  alt={category.label}
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="mt-1 text-gray-700 text-sm">{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;