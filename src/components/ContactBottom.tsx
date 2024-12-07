import React from 'react';
import Image from 'next/image';

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

const ContactBottom: React.FC = () => {
  return (
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
  );
};

export default ContactBottom;