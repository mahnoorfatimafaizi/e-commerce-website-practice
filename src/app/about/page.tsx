import React from 'react';
import Image from 'next/image';

const page: React.FC = () => {
  interface Feature {
    icon: string;
    title: string;
    description: string;
  }
  
  const features: Feature[] = [
    {
      icon: '/images/delivery.png',
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: '/images/customer-service.png',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: '/images/money-back.png',
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Launched in 2023, Exclusive is a South Asian premier online shopping
              marketplace. We are focused on premium products and brands. Supported
              by a wide range of talented individuals in Bangladesh & South Asian
              countries, we have become increasingly popular as our service grows.
              Exclusive caters to millions across 500+ cities and serves 1
              million+ customers across the region.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Exclusive offers more than millions of products, growing day
              by day. Exclusive aims to help consumers to offer convenient
              shopping from one customer
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about.png"
              alt="Our Story"
              width={705}
              height={609}
              className="rounded-lg"
            />
          </div>
        </div>


        <div>
          <Image src="/images/frame123.png" alt="frame"
          width={1170}
          height={230} 
          className='mx-auto'/>
          </div>
          

        {/* Team Section */}
        <div>
        <div>
          <Image src="/images/staff.png" alt="frame"
          width={1170}
          height={464} 
          className='mx-auto mt-8 mb-8 py-10'/>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto px-4 py-10 mb-10"> {/* Reduced py-12 to py-4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-5 mt-5 mb-5">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
              className="object-contain mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800 mb-2 font-bold">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      
        </div>
      </div>
    </div>
  );
};

export default page;