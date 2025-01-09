
import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  feedback: string;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 ">
        {/* Title Section */}
        <h2 className="text-lg text-center font-semibold text-purple-400 mb-4">
          Testimonials
        </h2>
        <h3 className="text-4xl text-center font-bold mb-4">{title}</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">{subtitle}</p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
            >
              {/* Star Ratings */}
              <div className="flex  mb-4 text-yellow-400">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.244 6.91l6.562-.955L10 0l2.194 5.955 6.562.955-4.858 4.635 1.122 6.545z" />
                    </svg>
                  ))}
              </div>

              {/* Feedback Text */}
              <p className="text-gray-300 mb-6">{testimonial.feedback}</p>

              {/* Author Details */}
              <div className="flex  space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border border-gray-700"
                  width={14}
                  height={14}
                />
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
