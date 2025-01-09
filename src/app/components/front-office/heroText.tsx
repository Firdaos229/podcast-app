import React from "react";
import Button from "../button";
import Link from "next/link";

type HeroTextProps = {
  title: string;
  subtitle: string;
};

const HeroText: React.FC<HeroTextProps> = ({ title, subtitle }) => (
  <div className="flex flex-col justify-center text-[#FFFFFF] space-y-4 max-w-md">
    <h1 className="text-4xl  font-bold">{title}</h1>
    <p className="text-lg text-violetclair">{subtitle}</p>
    <div className="flex space-x-4">
      <Link href="#">
        <Button text="Programmes" />
      </Link>
      <Link href="#">
        <Button text="Tous les Épisodes" variant="outline" />
      </Link>
    </div>
  </div>
);

export default HeroText;
