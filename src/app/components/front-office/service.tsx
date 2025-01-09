import React from "react";
import ServiceCard from "./serviceCard";
import ServiceTitle from "./serviceTitle";
import Button from "../button";
import Link from "next/link";

const services = [
  {
    imageSrc: "/front_office/images/Acceuil/image3.jpg",
    title: "Développement web & mobile",
    description:
      "Solutions web et mobile innovantes pour transformer vos idées en applications performantes et attractives",
    linkText: "Commander",
    linkUrl: "/contact3",
  },
  {
    imageSrc: "/front_office/images/Acceuil/image2.jpg",
    title: "Système, Réseau & Sécurité",
    description:
      "Protection avancée pour vos systèmes, réseaux et données, garantissant sécurité et performance optimales",
    linkText: "Nous contacter",
    linkUrl: "/contact3",
  },
  {
    imageSrc: "/front_office/images/Acceuil/image3.jpg",
    title: "Outils Informatique",
    description:
      "Découvrez et achetez nos outils informatiques pour booster votre productivité",
    linkText: "Lire plus",
    linkUrl: "/shop",
  },
];

const Service: React.FC = () => {
  return (
    <section className="bg-dark-red py-20 md:py-14">
      <div className="container mx-auto px-6">
        <ServiceTitle
          subtitle="CE QUE NOUS FAISONS"
          title="Innovation Constante Pour vos Besoins"
        />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#">
            <Button text="Découvrez plus sur nos services →" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
