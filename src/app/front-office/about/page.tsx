import Section from "@/app/components/front-office/section";
import Image1 from "../../../../public/front_office/images/Acceuil/image3.jpg";
import CounterSection from "@/app/components/front-office/counterSection";
import ValuesSection from "@/app/components/front-office/valueSection";
import Newsletter from "@/app/components/front-office/newsletter";

export default function About() {
  return (
    <div className="mt-10">
      <Section
        breadcrumb="Home » A propos"
        title={"Let’s Know About PodSay!"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis vulputate augue, non auctor nisi ultrices  suscipit. Nam interdum venenatis ligula. Donec blandit, ligula idtincidunt rhoncus, ex neque pharetra velit, at volutpat felis quama magna. In tempus, arcu vitae tempus congue, diam mi pharetradui, non convallis tortor nisi a nisl."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={undefined}
      />

      <Section
        subtitle={"Introduction"}
        title={"Intro From The Best Platform Online Radio"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="left"
        additionnalContent={<CounterSection />}
      />

      <ValuesSection />

      <Section
        subtitle={"PodSay! Studios Galery"}
        title={"We Will Always Accompany Your Day"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={undefined}
      />

      <div className="mt-3 py-10 flex justify-center">
        <Newsletter
          title="New Episodes Will Always Be Updated Regularly"
          subtitle="Stay updated with our latest podcast episodes."
          placeholder="Your email address..."
          buttonText="Subscribe"
          imageSrc={Image1}
        />
      </div>
    </div>
  );
}
