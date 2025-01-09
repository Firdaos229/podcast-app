import Section from "@/app/components/front-office/section";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import Image1 from "../../../../public/front_office/images/Acceuil/image3.jpg";
import Newsletter from "@/app/components/front-office/newsletter";
import FAQ from "@/app/components/front-office/faq";
import { questions } from "@/app/utils/faq";

export default function Contact() {
  return (
    <div className="mt-10">
      <Section
        breadcrumb="Home » Contact"
        title={"If You Want To Know More, Just Contact"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis vulputate augue, non auctor nisi ultrices  suscipit. Nam interdum venenatis ligula. Donec blandit, ligula idtincidunt rhoncus, ex neque pharetra velit, at volutpat felis quama magna. In tempus, arcu vitae tempus congue, diam mi pharetradui, non convallis tortor nisi a nisl."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={undefined}
      />

      <div className="lg:w-[65%] w-full lg:px-20 md:px-8 px-4 py-4">
        <p className="text-[#746bd8] mb-2">Contact Us</p>

        <h1 className="lg:title1 md:title1 title2 mb-4 md:text-left">
          Feel Free To Get In Touch <br /> With Us
        </h1>
      </div>
      <div className="bg-gray-900 p-8 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* Formulaire de contact */}
          <div className="bg-gray-800 p-8 rounded-2xl w-full lg:w-2/3 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
            <p className="mb-6 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3   rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Active Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-700   rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 bg-gray-700   rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Message To Us
                </label>
                <textarea
                  placeholder="Say anything to ask me"
                  className="w-full px-4 py-3 bg-gray-700   rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 "
                  required
                />
              </div>
              <button
                type="submit"
                className="w-1/2 py-3 mt-4 bg-purple-600 rounded-full text-white font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition duration-300"
              >
                <FaPaperPlane className="text-white text-lg" />
                Send Your Message
              </button>
            </form>
          </div>

          {/* Section d'informations de contact */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Call Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <div className="flex items-center mt-2 text-purple-400">
                <div className="p-3 bg-purple-600 rounded-full mr-2">
                  <FaPhoneAlt className="text-white" />
                </div>
                +6231-123456
              </div>
              <div className="flex items-center mt-2 text-purple-400">
                <div className="p-3 bg-purple-600 rounded-full mr-2">
                  <FaPhoneAlt className="text-white" />
                </div>
                +6285-30129517796
              </div>
            </div>

            {/* Visit Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <div className="flex items-center mt-2 text-purple-400">
                <div className="p-3 bg-purple-600 rounded-full mr-2">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                Caratland Street, no. 17, Indonesia
              </div>
            </div>

            {/* Send Email To Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Send Email To Us</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <div className="flex items-center mt-2 text-purple-400">
                <div className="p-3 bg-purple-600 rounded-full mr-2">
                  <FaEnvelope className="text-white" />
                </div>
                justsay@yoursite.com
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <div className="p-3 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
                  <FaFacebook className="text-white text-xl" />
                </div>
                <div className="p-3 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
                  <FaTwitter className="text-white text-xl" />
                </div>
                <div className="p-3 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
                  <FaInstagram className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ questions={questions} imageSrc={Image1} />

      <Section
        subtitle={"Advertising"}
        title={"Advertise Your Business With PodSay"}
        buttonText={"Learn More "}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis vulputate augue, non auctor nisi ultrices  suscipit. Nam interdum venenatis ligula. Donec blandit, ligula idtincidunt rhoncus, ex neque pharetra velit, at volutpat felis quama magna. In tempus, arcu vitae tempus congue, diam mi pharetradui, non convallis tortor nisi a nisl."
        }
        imageSrc={Image1}
        imageAlt="Image8"
        imagePosition="right"
        additionnalContent={
          <div className="flex space-x-4 mt-2">
            <div className="p-3 bg-verttitle rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
              <FaFacebook className="text-white text-xl" />
            </div>
            <div className="p-3 bg-verttitle rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
              <FaTwitter className="text-white text-xl" />
            </div>
            <div className="p-3 bg-verttitle rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
              <FaInstagram className="text-white text-xl" />
            </div>
            <div className="p-3 bg-verttitle rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
              <FaLinkedin className="text-white text-xl" />
            </div>
          </div>
        }
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
