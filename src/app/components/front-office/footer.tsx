import React from "react";
import "../../styles/front-office/front-office.css";

const Footer = () => {
  return (
    <footer className="footer mt-4 ">
      <div className="flex flex-col md:flex-row justify-around mb-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
          <div>
            <h3 className=" font-semibold mb-4">Studio</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-verttitle">
                A propos
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-verttitle">
                Programmes
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-verttitle">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Liens Utils</h3>
            <ul className="space-y-2">
            <li>
                <a href="#" className=" hover:text-verttitle">
                  Plan d&apos;abonnement
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-verttitle">
                  Avis 
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-verttitle">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" font-semibold mb-4">Suivez-nous</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-verttitle">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-verttitle">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-verttitle">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold ">Karnel Production</h2>
          <p className=" mt-2">
            Karnel Production est un studio d&apos;enregistrement.
          </p>
          <a href="#" className=" mt-4 inline-block">
            Purchase now →
          </a>
        </div>
      </div>
      <div className="footer-copyright  text-center ">
        <p>Copyright © 2024 Tous droits reservés. Karnel Production</p>
      </div>
    </footer>
  );
};

export default Footer;
