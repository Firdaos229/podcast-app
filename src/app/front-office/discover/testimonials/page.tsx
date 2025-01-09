import Section from "@/app/components/front-office/section";
import Image1 from "../../../../../public/front_office/images/Acceuil/image3.jpg";
import Newsletter from "@/app/components/front-office/newsletter";
import Testimonials from "@/app/components/front-office/testimonials";

export default function Testimonial() {
  const testimonialData = [
    {
      name: "Chicky",
      role: "Designer",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Chickaya",
      role: "Designer",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "George Paimo",
      role: "Designer",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "George Paidi",
      role: "Designer",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "John Doe",
      role: "Developer",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    },
    {
      name: "Karol DAGA",
      role: "Project Manager",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    },
    {
      name: "Ornel Smith",
      role: "Project Owner",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    },
    {
      name: "Happy DGK",
      role: "Project Manager",
      image: "/public/front_office/images/Acceuil/image3.jpg",
      feedback:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    },
  ];

  return (
    <div className="mt-10">
      <Section
        breadcrumb="Home » Témoignages"
        title={"What Our Beloved Listeners Said"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis vulputate augue, non auctor nisi ultrices  suscipit. Nam interdum venenatis ligula. Donec blandit, ligula idtincidunt rhoncus, ex neque pharetra velit, at volutpat felis quama magna. In tempus, arcu vitae tempus congue, diam mi pharetradui, non convallis tortor nisi a nisl."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={undefined}
      />

      <Testimonials
        title="25.000 Listeners Enjoy With Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        testimonials={testimonialData}
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
