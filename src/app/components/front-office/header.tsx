"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Logo from "../logo";
import AppointmentDrawer from "./appointmentDrawer";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const ChevronDown = () => (
    <svg
      fill="none"
      height={16}
      width={16}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );

  const menuItems = [
    { text: "Accueil", href: "/front-office/home" },
    { text: "A propos", href: "/front-office/about" },
    { text: "Services", href: "/front-office/discover/oservices" },
    { text: "Contact", href: "/front-office/contact-us" },
    { text: "Prendre RDV", href: "/front-office/contact-us" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-2 text-violetclair"
        justify="center"
      >
        <NavbarItem>
          <Link href="/front-office/home">
            <p className="hover:text-verttitle">Accueil</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/front-office/about">
            <p className="hover:text-verttitle">Karnel Production</p>
          </Link>
        </NavbarItem>
        {/* Programmes Dropdown */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="flex items-center gap-x-2 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Programmes
                <ChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="programmes"
              className="min-w-max bg-white rounded-lg shadow-lg p-2"
            >
              <DropdownItem key="episodes">
                <Link href="#" className="hover:text-[#a2a6cc]">
                  Episodes
                </Link>
              </DropdownItem>
              <DropdownItem key="blog_actualites">
                <Link href="#" className="hover:text-[#a2a6cc]">
                  Blog/Actualités
                </Link>
              </DropdownItem>
              <DropdownItem key="evenements_ateliers">
                <Link href="#" className="hover:text-[#a2a6cc]">
                  Événements/Ateliers
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* À découvrir Dropdown */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="flex items-center gap-x-2 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                À découvrir
                <ChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="à découvrir"
              className="min-w-max bg-white rounded-lg shadow-lg p-2"
            >
              <DropdownItem key="services">
                <Link
                  href="/front-office/discover/oservices"
                  className="hover:text-[#a2a6cc]"
                >
                  Services
                </Link>
              </DropdownItem>
              <DropdownItem key="galerie">
                <Link href="#" className="hover:text-[#a2a6cc]">
                  Galerie/Photos
                </Link>
              </DropdownItem>
              <DropdownItem key="temoignages">
                <Link
                  href="/front-office/discover/testimonials"
                  className="hover:text-[#a2a6cc]"
                >
                  Témoignages
                </Link>
              </DropdownItem>
              <DropdownItem key="faq">
                <Link
                  href="/front-office/discover/faqs"
                  className="hover:text-[#a2a6cc]"
                >
                  FAQ
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link href="/front-office/contact-us">
            <p className="hover:text-verttitle">Contactez-Nous</p>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
         <AppointmentDrawer />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
