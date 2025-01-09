import React, { ReactNode } from "react";
import Header from "../components/front-office/header";
import Footer from "../components/front-office/footer";
import "@/app/styles/front-office/front-office.css";
type Props = {
  children: ReactNode;
};

const FrontLayout = ({ children }: Props) => {
  return (
    <div className="font-poppins ">
      <Header />
      <main className="px-16">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
