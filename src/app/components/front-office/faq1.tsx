"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Question {
  title: string;
  content: string;
}

interface FAQ1Props {
  questions: Question[];
  imageSrc: StaticImageData;
}

const FAQ1: React.FC<FAQ1Props> = ({ questions, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-8 rounded-lg bg-gray-900 gap-8">
      {/* Section image et titre */}
      <div className="text-center">
        <Image
          src={imageSrc}
          alt="FAQ illustration"
          className="rounded-lg shadow-lg"
          width={300}
          height={300}
        />
        <h1 className="text-[#ff7a59] text-3xl font-bold mt-4">Your Questions Answered</h1>
        <p className="text-gray-400 mt-2">
          Discover the most asked questions and their solutions here.
        </p>
      </div>

      {/* Questions FAQ */}
      <div className="w-full max-w-2xl">
        {questions.map((question, index) => (
          <FAQ1Item key={index} question={question} isDefaultOpen={index === 0} />
        ))}
      </div>
    </div>
  );
};

// Composant pour les items FAQ1
const FAQ1Item: React.FC<{ question: Question; isDefaultOpen?: boolean }> = ({
  question,
  isDefaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-[#ff7a59] text-white p-4 rounded-lg cursor-pointer"
        onClick={toggle}
      >
        <h3 className="font-semibold">{question.title}</h3>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <p className="bg-gray-800 text-gray-300 p-4 rounded-b-lg">
          {question.content}
        </p>
      )}
    </div>
  );
};

export default FAQ1;
