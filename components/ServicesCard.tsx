import React from 'react';
import { SiCodechef } from 'react-icons/si';

const ServicesCard = ({ service }) => {
  return (
    <div className="w-full xl:w-1/4 sm:w-2/4 p-4">
      <div className="relative flex flex-wrap break-words bg-white m-4 shadow-lg shadow-rose-100 border border-rose-600 rounded-lg justify-center items-center gap-4">
        <div className="flex justify-center mb-4">
          <SiCodechef size={32} />
        </div>
        <blockquote className="relative p-4">
          <div className="text-lg font-bold text-rose-600">{service.title}</div>
          <p className="text-md font-light mt-2 pl-2 text-rose-600">
            {service.description}
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default ServicesCard;
