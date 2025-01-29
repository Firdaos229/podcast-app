import Image1 from "../../../../public/front_office/images/Acceuil/image3.jpg";
import Image4 from "../../../../public/front_office/images/image3.png";
import Image8 from "../../../../public/front_office/images/image2.png";
import Image0 from "../../../../public/front_office/images/image1.png";
import Image from "next/image";
import HeroText from "@/app/components/front-office/heroText";
import Service from "@/app/components/front-office/service";
import Section from "@/app/components/front-office/section";
import Testimonial from "@/app/components/front-office/avis";
import Newsletter from "@/app/components/front-office/newsletter";
import Button from "@/app/components/button";
import Link from "next/link";
import CategoryCard from "@/app/components/front-office/categoryCard";

export default function Home() {
  return (
    <div>
      <section className="relative w-full h-[500px] mt-10 mb-8 px-8 lg:px-10 flex items-center justify-between">
        <div className="relative w-1/2 h-full">
          <Image
            src={Image0}
            alt="Image d'inspiration"
            className="h-full inset-0 object-cover opacity-80 -z-10"
          />
        </div>
        {/* Text Section */}
        <div className=" text-violetclair p-6">
          <HeroText
            title="Écoutez Notre Podcast Pour Vous Inspirer"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim."
          />
        </div>
      </section>

      
        <Service />
     

      <div className="mx-auto flex flex-col md:flex-row items-center justify-between mt-20 gap-8">
        {/* Section de l'image principale */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src={Image1}
              alt="Podcasteur"
              className="object-cover w-full h-auto rounded-3xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm">Créateurs d&apos;entreprises</p>
            </div>
          </div>
        </div>

        {/* Section du contenu texte et des cartes */}
        <div className="md:w-1/2 text-white">
          <p className="text-[#746bd8] mb-2">Thème du podcast</p>
          <h1 className="text-3xl font-bold mb-6">
            Présenter Le Sujet Qui Vous Convient Le Mieux
          </h1>

          {/* Cartes pour les catégories avec bordures et décalages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 translate-y-4">
            <CategoryCard
              title="Éducation"
              description="C’est important d’avoir un service client, mais cela va être suivi d’un service client."
              borderColor="border-pink-500"
              textColor="text-pink-500"
              translateClass={""}
            />
            <CategoryCard
              title="Santé"
              description="C’est important d’avoir un service client, mais cela va être suivi d’un service client."
              borderColor="border-purple-500"
              textColor="text-purple-500"
              translateClass="-translate-y-4"
            />
            <CategoryCard
              title="Musique et cinéma"
              description="C’est important d’avoir un service client, mais cela va être suivi d’un service client."
              borderColor="border-indigo-500"
              textColor="text-indigo-500"
              translateClass={""}
            />
            <CategoryCard
              title="Comédie"
              description="C’est important d’avoir un service client, mais cela va être suivi d’un service client."
              borderColor="border-red-500"
              textColor="text-red-500"
              translateClass="-translate-y-4"
            />
          </div>
        </div>
      </div>

      <Section
        subtitle={"Plan d'Abonnement"}
        title={"3 months Premium Only IDR 56,096 With E-Wallet Or Phone Credit"}
        buttonText={"Get Started"}
        buttonText2={"See All Package"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis vulputate augue, non auctor nisi ultrices  suscipit. Nam interdum venenatis ligula. Donec blandit, ligula idtincidunt rhoncus, ex neque pharetra velit, at volutpat felis quama magna. In tempus, arcu vitae tempus congue, diam mi pharetradui, non convallis tortor nisi a nisl."
        }
        imageSrc={Image8}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={undefined}
      />

      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-4 p-4 md:p-8">
        {/* Carrousel de Témoignages */}
        <Testimonial />

        <div className="lg:w-[65%] w-full lg:px-20 md:px-8 px-4 py-4">
          <p className="text-[#746bd8] mb-2">Témoignages</p>
          <h1 className="lg:title2 md:title2 title3 mb-4 md:text-left">
            What Out Beloved Listenerd Says
          </h1>

          <p className="mb-6  paragraphe ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>

          <div className="md:flex space-x-4 mb-4">
            <Link href="#">
              <Button text="View All" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-[65%] w-full lg:px-20 md:px-8 px-4 py-4">
        <p className="text-[#746bd8] mb-2">Latest Blog Episode</p>
        <h1 className="lg:title2 md:title2 title3 mb-4 md:text-left">
          Hear The <br /> Most Popular
          <br /> Episode
        </h1>

        <p className="mb-6  paragraphe ">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore.
        </p>

        <div className="md:flex space-x-4 mb-4">
          <Link href="#">
            <Button text="See All Episode →" />
          </Link>
        </div>
      </div>

      <div className=" py-10 flex justify-center">
        <Newsletter
          title="New Episodes Will Always Be Updated Regularly"
          subtitle="Stay updated with our latest podcast episodes."
          placeholder="Your email address..."
          buttonText="Subscribe"
          imageSrc={Image4}
        />
      </div>
    </div>
  );
}
