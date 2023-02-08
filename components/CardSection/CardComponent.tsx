import React from "react";
import {
  MdCalendarToday,
  MdLocationOn,
  MdPerson,
  MdStar,
} from "react-icons/md";
import "./cardcomponent.css";
import Image from "next/image";
import cardimage from "../../public/images/card-img.png"
import Link from "next/link";

export default function CardComponent() {
  return (
    <div className="card">
          <div className="card-image">
              <Image src={cardimage} alt="" width={400} height={0} />
        <div className="listing-price">
          <h2>N60,000</h2>
          <div className="listing-rating">
            <MdStar />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="listing-title">
          <h3>2 Bedroom Apartment</h3>
        </div>
        <div className="listing-location">
          <MdLocationOn className="listing-icon"/> University of Ilorin
        </div>
        <div className="listing-details-section">
          <div className="listing-details">
            <div className="listing-room mb-4">
              <h3>Bedrooms</h3>
              <h3>2</h3>
            </div>
            <div className="listing-user mt-4">
              <MdPerson className="listing-icon"/>
              Vector
            </div>
          </div>
          <div className="listing-details">
            <div className="listing-bath mb-4">
              <h3>Bathroom</h3>
              <h3>1</h3>
            </div>
            <div className="listing-date mt-4">
              <MdCalendarToday className="listing-icon"/>
              <h3>28th December 2022</h3>
            </div>
          </div>
        </div>
        <div className="card-button">
                  <Link href="/listings/1">
                      <button className="listing-button" >More Details</button>
                  </Link>
        </div>
      </div>
    </div>
  );
}
