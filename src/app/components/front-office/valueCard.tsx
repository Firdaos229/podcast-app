// components/ValueCard.tsx
import React from "react";

interface ValueCardProps {
  icon: React.ReactNode; // Icône pour la carte
  title: string; // Titre de la carte
  description: string; // Description de la carte
  bgColor: string; // Couleur de fond de la carte
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div className="flex flex-col ">
      <div
        className={`p-14 rounded-2xl flex items-center justify-center  ${bgColor} transition-transform duration-300 hover:scale-110`}
      >
        <div className="text-5xl mb-4">{icon}</div>
      </div>
      <div className="mt-3 ">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
