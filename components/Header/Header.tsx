"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdClose, MdNotes, MdPerson } from "react-icons/md";
import { useGlobalContext } from '../../app/context';
import './header.css'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const {isLoggedIn} = useGlobalContext()

  const revealMenu = () => {
   setIsMobile(true)
  }
  const closeMenu = () => {
    setIsMobile(!isMobile)
  }
  return (
    <div className="navbar-main">
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
          {!isLoggedIn ? (
            <>
              <li className="nav-link-main">Login</li>
              <li>
                <button className="btn-primary-custom">Signup</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="btn-primary-custom">Create Listing</button>
              </li>
              <MdPerson style={{fontSize: 30}} />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
