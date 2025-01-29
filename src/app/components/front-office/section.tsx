
import React from "react";
import "../../styles/front-office/front-office.css";
import Image, { StaticImageData } from "next/image";
import Button from "../button";
import Link from "next/link";

interface SectionProps {
  title?: string;
  subtitle?: string;
  text: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonText2?: string;
  buttonLink?: string;
  buttonLink2?: string;
  additionnalContent?: React.ReactNode;
  breadcrumb?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  text,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  buttonText,
  buttonText2,
  buttonLink = "#",
  buttonLink2 = "#",
  additionnalContent,
  breadcrumb,
}) => {
  return (
    <div className="mt-20 mx-auto flex flex-col items-center">
      <div className="w-full mt-14 -mb-11 flex justify-start ml-40">
        {breadcrumb && (
          <nav className="text-violetclair">
            <Link href="/" className="hover:underline">
              Home »
            </Link>{" "}
            {breadcrumb.split(" » ")[1]}
          </nav>
        )}
      </div>

      <div
        className={`flex flex-col md:flex-row items-center ${
          imagePosition === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="lg:w-[35%] w-full relative lg:mr-20">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-[350px] rounded-3xl"
          />
        </div>

        {/* Texte et contenu */}
        <div className="lg:w-[65%] w-full lg:px-20 md:px-8 px-4 py-4">
          {/* Sous-titre, si présent */}
          {subtitle && <p className="text-[#746bd8] mb-2">{subtitle}</p>}

          {/* Titre, si présent */}
          {title && (
            <h1 className="lg:title2 md:title2 title3 mb-4 md:text-left">
              {title}
            </h1>
          )}

          <p className="mb-6 paragraphe">{text}</p>

          {/* Contenu additionnel, si présent */}
          {additionnalContent && (
            <div className="mb-6">{additionnalContent}</div>
          )}

          {/* Boutons (facultatifs) */}
          {(buttonText || buttonText2) && (
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4 justify-center items-center md:justify-start">
              {buttonText && (
                <Link href={buttonLink}>
                  <Button text={buttonText} />
                </Link>
              )}
              {buttonText2 && (
                <Link href={buttonLink2}>
                  <Button text={buttonText2} variant="outline" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
