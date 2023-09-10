"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdClose, MdNotes } from "react-icons/md";
import "./header.css";

export default function AuthHeader() {
  const [isMobile, setIsMobile] = useState(false);

  const revealMenu = () => {
    setIsMobile(true);
  };
  const closeMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className="navbar-auth">
      <div className="nav-brand">
        <h1 className="text-3xl">Logo.</h1>
      </div>
      <div className="nav-menu">
        {isMobile ? (
          <MdClose className="nav-mobile" onClick={closeMenu} />
        ) : (
          <MdNotes className="nav-mobile" onClick={revealMenu} />
        )}

        <ul className={isMobile ? "nav-list-mobile" : "nav-list"}>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              Home
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/listings" className="link-section">
              Listings
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              Blog
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              FAQs
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              How it works
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
