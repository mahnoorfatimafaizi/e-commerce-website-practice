import React from 'react';
import Image from 'next/image';
const NewArrival: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
          <p className="text-red-600 font-semibold lg:text-2xl">Featured</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">New Arrival</h2>
      <Image
              src="/images/newarrival.png"
              alt="newarival"
              width={1170}
              height={600}
              className="rounded-lg"
            />
            
    </section>
  );
};

export default NewArrival;