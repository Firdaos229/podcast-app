interface CategoryCardProps {
  title: string;
  description: string;
  borderColor: string;
  textColor: string;
  translateClass: string;
}

const CategoryCard = ({ title, description, borderColor, textColor, translateClass }: CategoryCardProps) => {
  return (
    <div
      className={`bg-[#1E1E3F] p-4 rounded-xl border ${borderColor} transform ${translateClass} relative`}
    >
      <p className={`font-bold ${textColor}`}>{title}</p>
      <p className="text-sm mt-2">{description}</p>
      <a href="#" className="text-blue-400 mt-2 inline-block">
        En savoir plus →
      </a>
    </div>
  );
};

export default CategoryCard;
