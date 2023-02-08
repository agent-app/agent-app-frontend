
import './floating-menu.css'
import { MdBook, MdChat, MdEdit, MdHome, MdList, MdNotes } from "react-icons/md";
import Link from 'next/link';

export default function FloatingMenu() {
   
    return (
      <div className="floating-menu">
        <ul className="nav-list">
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              <MdHome className="link-icon" />
              Home
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/listings" className="link-section">
              <MdBook className="link-icon" />
              Listings
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              <MdEdit className="link-icon" />
              Blog
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              <MdChat className="link-icon" />
              FAQs
            </Link>
          </li>
          <li className="nav-link-floating">
            <Link href="/" className="link-section">
              <MdList className="link-icon" />
              How it works
            </Link>
          </li>
        </ul>
      </div>
    );
}
