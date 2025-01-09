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
} from "@nextui-org/react";
import Logo from "../logo";
import { ArrowDown2 } from "iconsax-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
        className="hidden sm:flex gap-4 text-violetclair"
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

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ArrowDown2 />}
                radius="sm"
                variant="light"
              >
                Programmes
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="programmes"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="episodes">Episodes</DropdownItem>
            <DropdownItem key="blog_actualités">Blog/Actualités</DropdownItem>
            <DropdownItem key="events">Événements/Ateliers</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ArrowDown2 />}
                radius="sm"
                variant="light"
              >
                A découvrir
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="à decouvrir"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="services">Services</DropdownItem>
            <DropdownItem key="galerie">Galerie/Photos</DropdownItem>
            <DropdownItem key="témoignages">
              <Link href="/front-office/discover/testimonials">
                <p className="hover:text-[#a2a6cc]">Témoignages</p>
              </Link>
            </DropdownItem>
            <DropdownItem key="FAQ">
              <Link href="/front-office/discover/faqs">
                <p className="hover:text-[#a2a6cc]">FAQ</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link href="/front-office/contact-us">
            <p className="hover:text-verttitle">Contactez-nous</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="text-verttitle" href="#" variant="flat">
            Prendre mon RDV
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
