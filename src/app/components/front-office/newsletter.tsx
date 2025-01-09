import React from "react";
import Image, { StaticImageData } from "next/image";

interface NewsletterProps {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  imageSrc: StaticImageData | string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title,
  subtitle,
  placeholder,
  buttonText,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#382a74] rounded-xl p-6 md:p-10 lg:p-12 space-y-6 md:space-y-0">
      {/* Section image */}
      <div className="relative  w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0">
        <Image
          src={imageSrc}
          alt="Person listening to a podcast"
          className="rounded-full object-cover"
          layout="fill"
        />
      </div>

      {/* Section texte et formulaire */}
      <div className="flex flex-col text-center md:text-left md:ml-8 space-y-3 md:space-y-4 lg:space-y-5 md:mr-auto">
        <p className="text-[#f460a0] font-semibold md:text-base lg:text-lg">
          Subscribe Newsletter
        </p>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          {title}
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl font-medium">
          {subtitle}
        </p>

        {/* Formulaire d'abonnement */}
        <div className="flex items-center mt-3 md:mt-4 lg:mt-5 w-full md:w-auto bg-white rounded-full p-1 pl-4">
          <input
            type="email"
            placeholder={placeholder}
            className="flex-grow p-3 text-gray-700 placeholder-gray-500 bg-transparent outline-none rounded-full"
          />
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-3 px-6 rounded-full hover:from-purple-600 hover:to-purple-800 transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
