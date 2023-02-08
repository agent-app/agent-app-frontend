import Link from 'next/link';
import React from 'react'
import SectionLayout from '../SectionLayout/SectionLayout';
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer text-white">
      <div className="footer-section">
        <div className="nav-brand mb-2">
          <h1 className="text-3xl text-white">Logo.</h1>
        </div>
        <div className="brand-details my-5">
          <p className="text-3xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            sed eligendi omnis? Deserunt dolorem maiores quibusdam dolor enim
            dolore doloremque saepe quam tempora. Fuga atque dolor odio cum
            illum id.
          </p>
        </div>
      </div>
      <div className="footer-section">
        <h4 className="footer-section-heading">Quick Links</h4>
        <ul className="">
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              Home
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/listings" className="link-section">
              Listings
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              Blog
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              FAQs
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              How it works
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-section-heading">Quick Links</h4>
        <ul className="">
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              Home
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/listings" className="link-section">
              Listings
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              Blog
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              FAQs
            </Link>
          </li>
          <li className="footer-nav-link">
            <Link href="/" className="link-section">
              How it works
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section"></div>
    </div>
  );
}
