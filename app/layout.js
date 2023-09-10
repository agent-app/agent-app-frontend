"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AuthHeader from "../components/Header/AuthHeader";
import {AppContextProvider} from "./context"
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
  const pathname = usePathname();
  return (
    <html>
      <head />
      <body>
        <AppContextProvider>
          {pathname == "/auth/login" || pathname == "/auth/register"  ?  (
            <AuthHeader />
          ) : (
            <Header />
          )}
          {console.log(pathname)}
          {floatingMenu ? <FloatingMenu /> : ""}

          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
