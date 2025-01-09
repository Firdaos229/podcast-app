"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Définissez le type pour chaque question
interface Question {
  title: string;
  content: string;
}

interface FAQProps {
  questions: Question[];
  imageSrc: StaticImageData;
}

// Composant FAQ principal
const FAQ: React.FC<FAQProps> = ({ questions, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 rounded-lg gap-8">
      {/* Section gauche : Titre et image */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-[#746bd8] mb-2 text-sm">FAQ</p>
        <h1 className="text-white text-4xl font-bold leading-tight mb-4">
          Collections Of Premium Questions
        </h1>
        <p className="text-gray-300 mb-8">
          Amet risus nulla eget adipiscing ante. Vitae, hac amet, consectetur
          quis dictum dictum.
        </p>
        <div className="relative w-64 h-64 mx-auto md:mx-0">
          <Image
            src={imageSrc}
            alt="Podcast host"
            className="rounded-full object-cover"
            layout="fill"
          />
        </div>
      </div>

      {/* Section droite : Questions FAQ */}
      <div className="flex-1 w-full">
        {questions.map((question, index) => (
          <FAQItem
            key={index}
            question={question}
            isDefaultOpen={index === 0} // Ouvre par défaut le premier élément
          />
        ))}
      </div>
    </div>
  );
};

// Composant pour chaque question FAQ
const FAQItem: React.FC<{ question: Question; isDefaultOpen?: boolean }> = ({
  question,
  isDefaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-gradient-to-r from-[#746bd8] via-[#6a5bcc] to-[#5e4bbe] text-white p-4 rounded-lg cursor-pointer shadow-md"
        onClick={toggle}
      >
        <h3 className="font-semibold">{question.title}</h3>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <p className="bg-[#4e3ca5] text-gray-200 p-4 rounded-b-lg shadow-inner">
          {question.content}
        </p>
      )}
    </div>
  );
};

export default FAQ;
