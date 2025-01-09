"use client";

import React from "react";
import CountUp from "react-countup";

const CounterSection: React.FC = () => {
  return (
    <div className=" py-10">
      <div className="container flex justify-start gap-8">
        {/* Counter Item */}
        <div className="counter-item bg-gradient-to-r from-[#6a4af5] to-[#a14eff] rounded-lg p-6 text-center text-white w-40">
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={2605} duration={3} separator="," />
            <span className="text-xl">+</span>
          </h2>
          <h4 className="text-lg mt-2">Listeners</h4>
        </div>

        {/* Counter Item */}
        <div className="counter-item bg-gradient-to-r from-[#6a4af5] to-[#a14eff] rounded-lg p-6 text-center text-white w-40">
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={182} duration={3} separator="," />
            <span className="text-xl">+</span>
          </h2>
          <h4 className="text-lg mt-2">Collaborations</h4>
        </div>

        {/* Counter Item */}
        <div className="counter-item bg-gradient-to-r from-[#6a4af5] to-[#a14eff] rounded-lg p-6 text-center text-white w-40">
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={250} duration={3} separator="," />
            <span className="text-xl">+</span>
          </h2>
          <h4 className="text-lg mt-2">Awards</h4>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
