// components/ServiceCard.tsx
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow-lg group">
      <Image
        src={imageSrc}
        alt={title}
        width={500} 
        height={300} 
        className="w-full h-auto object-cover"
        priority 
      />
      <div className="absolute bottom-0 left-0 p-6 text-white opacity-100 transition-all duration-300 ease-in group-hover:opacity-0">
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#746bd8] bg-opacity-90 p-8 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <h4 className="text-xl font-semibold mb-4">
          <a href={linkUrl} className="hover:text-gray-300">
            {title}
          </a>
        </h4>
        <p className="text-center mb-4">{description}</p>
        <a
          href={linkUrl}
          className="text-white border-b border-white uppercase hover:text-gray-300"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
