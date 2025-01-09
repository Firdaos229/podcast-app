"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/app/utils/avis";
import Slider, { Settings } from "react-slick"; 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Testimonial() {
  const sliderRef = useRef<Slider | null>(null); 

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative w-full md:w-1/2 bg-violetclair p-6 rounded-xl shadow-md">
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((single, index) => (
          <div key={index} className="h-full">
            <section className="mx-auto bg-violetclair p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 rounded-xl overflow-hidden">
              {/* Section Gauche */}
              <div className="text-center space-y-5">
                <div className="border-8 inline-block rounded-full p-2.5">
                  <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={single.img}
                      alt={single.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-medium">
                    {single.name}
                  </h2>
                  <p className="text-gray-600">{single.profession}</p>
                </div>
              </div>

              {/* Section Droite */}
              <div className="text-sm sm:text-base space-y-3">
                <div className="text-verttitle text-2xl">
                  <FaQuoteLeft />
                </div>
                <p className="font-bold leading-relaxed">
                  {single.testimonial}
                </p>
                <div className="text-verttitle text-2xl">
                  <FaQuoteRight className="ml-auto" />
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* Boutons Personnalisés */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          className=" bg-white rounded-full p-3 text-2xl text-gray-400"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className=" bg-white rounded-full p-3 text-2xl text-gray-400"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
