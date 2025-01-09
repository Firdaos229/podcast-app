// components/ValuesSection.tsx
import React from "react";
import ValueCard from "./valueCard";
import {
  FaMedal,
  FaMicrophone,
  FaMobileAlt,
  FaHeadphones,
} from "react-icons/fa";

const ValuesSection: React.FC = () => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-6">
        <p className="text-indigo-400 text-sm font-semibold mb-2">Our Values</p>
        <h2 className="text-3xl font-bold mb-4">
          Why You Should Listen To Our Radio
        </h2>
        <p className="text-gray-400 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* <div className="flex flex-row ">
          <div className={`w-3/5`}>
            <h1 className="text-3xl font-bold mb-4">
              Why You Should Listen To Our Radio
            </h1>
          </div>
          <div className="w-2/5 flex items justify-end ">
            <p className="text-gray-400 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={<FaMedal />}
            title="Quality Contents"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            bgColor="bg-pink-500"
          />
          <ValueCard
            icon={<FaMicrophone />}
            title="Best Broadcasters"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            bgColor="bg-purple-500"
          />
          <ValueCard
            icon={<FaMobileAlt />}
            title="Support All Platform"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            bgColor="bg-indigo-500"
          />
          <ValueCard
            icon={<FaHeadphones />}
            title="Easy Access"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            bgColor="bg-violet-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
