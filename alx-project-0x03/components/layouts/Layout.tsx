import { ReactNode } from "react";import { ReactNode } from "react";

import Footer from "./Footer";import Footer from "./Footer";

import Header from "./Header";import Header from "./Header";

import { LayoutProps } from "@/interfaces";import { LayoutProps } from "@/interfaces";



const Layout: React.FC<LayoutProps> = ({ children }) => {const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (  return (

    <>    <>

      <Header />      <Header />

      <main>{children}</main>      <main>{children}</main>

      <Footer />      <Footer />

    </>    </>

  );  );

};};



export default Layout;export default Layout;

