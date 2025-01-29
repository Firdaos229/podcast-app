import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Curabitur id eros quis nunc suscipit blandit?",
    "Quisque aliquet, libero consequat elementum convallis?",
    "Nulla facilisi. Vivamus feugiat dolor vel nisi sodales?",
    "Pellentesque habitant morbi tristique senectus et netus?",
    "Nam pretium turpis et arcu. Duis arcu tortor?",
  ];

  const categories = [
    { label: "General Questions", color: "bg-purple-500" },
    { label: "Premium Questions", color: "bg-pink-500" },
    { label: "Career Questions", color: "bg-blue-300" },
    { label: "Account Questions", color: "bg-indigo-500" },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white p-8">
      {/* FAQ List */}
      <div className="flex-1 space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <span>{item}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-gray-700">
                <p>
                  Amet risus nulla eget adipiscing ante. Vitae, hac amet,
                  consectetur quis dictum dictum. Enim, molestie vel vitae eget
                  nibh duis dictum.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="flex flex-col space-y-4 mt-8 lg:mt-0 lg:ml-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center ${category.color} text-white`}
          >
            {category.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
