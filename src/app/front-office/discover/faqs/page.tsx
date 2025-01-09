import Section from "@/app/components/front-office/section";
import Image1 from "../../../../../public/front_office/images/Acceuil/image3.jpg";
import Newsletter from "@/app/components/front-office/newsletter";
import FAQ from "@/app/components/front-office/faq";
import { questions } from "@/app/utils/faq";

export default function Faqs() {
  return (
    <div className="mt-10">
      <Section
        breadcrumb="Home » Faq"
        title={"What Our Beloved Listeners Said"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis vulputate augue, non auctor nisi ultrices  suscipit. Nam interdum venenatis ligula. Donec blandit, ligula idtincidunt rhoncus, ex neque pharetra velit, at volutpat felis quama magna. In tempus, arcu vitae tempus congue, diam mi pharetradui, non convallis tortor nisi a nisl."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={undefined}
      />

      <FAQ questions={questions} imageSrc={Image1} />
      <FAQ questions={questions} imageSrc={Image1} />

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
