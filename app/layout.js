"use client";
import React, { useEffect, useState } from "react";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  const [floatingMenu, setfloatingMenu] = useState(false);

  const showfloatingMenu = (e) => {
    if (window.scrollY > 200) {
      setfloatingMenu(true);
    } else {
      setfloatingMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showfloatingMenu)
  }, []);
  return (
    <html>
      <head />
      <body>
        <Header />
        {floatingMenu ? <FloatingMenu /> : ""}

        {children}
        <Footer />
      </body>
    </html>
  );
}
