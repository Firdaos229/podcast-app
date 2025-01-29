"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Input,
} from "@heroui/react";

const AppointmentDrawer: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-verttitle text-white hover:bg-green-600 font-bold px-6 py-4 rounded-full shadow-md transition-all"
        variant="flat"
        onPress={onOpen}
      >
        Prendre mon RDV
      </Button>

      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="right" className="bg-white bg-opacity-100">
        <DrawerContent className="bg-white shadow-lg rounded-lg p-4">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 text-xl font-bold">
                Prendre un rendez-vous
              </DrawerHeader>
              <DrawerBody className="space-y-4">
                <Input
                  label="Nom"
                  placeholder="Entrez votre nom"
                  variant="bordered"
                />
                <Input
                  label="Email"
                  placeholder="Entrez votre email"
                  type="email"
                  variant="bordered"
                />
                <Input
                  label="Date du rendez-vous"
                  type="date"
                  variant="bordered"
                />
                <Input
                  label="Heure"
                  type="time"
                  variant="bordered"
                />
              </DrawerBody>
              <DrawerFooter className="flex justify-between">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Annuler
                </Button>
                <Button color="primary" onPress={onClose}>
                  Confirmer
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppointmentDrawer;
