import React from "react";
import {
  MdCalendarToday,
  MdLocationOn,
  MdPerson,
  MdRateReview,
  MdReviews,
  MdStar,
  MdStarRate,
  MdStars,
} from "react-icons/md";
import "./cardcomponent.css";
import cardimage from "public/images/card-img.png";
import Image from "next/image";

import Link from "next/link";

export default function CardComponent({ listing }) {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={cardimage} alt="" width={400} height={0} />
        <div className="listing-price">
          <h2>{`N${listing.price}`}</h2>
          <div className="listing-rating flex">
            <MdStar values={listing.rating} />
            <MdStar />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="listing-title">
          <h3>{ listing.name }</h3>
        </div>
        <div className="listing-location">
          <MdLocationOn className="listing-icon" /> {listing.location}
        </div>
        <div className="listing-details-section">
          <div className="listing-details">
            <div className="listing-room mb-4">
              <h3>Bedrooms</h3>
              <h3>{ listing.bedroom }</h3>
            </div>
            <div className="listing-user mt-4">
              <MdPerson className="listing-icon" />
              Vector
            </div>
          </div>
          <div className="listing-details">
            <div className="listing-bath mb-4">
              <h3>Bathroom</h3>
              <h3>{ listing.bathroom }</h3>
            </div>
            <div className="listing-date mt-4">
              <MdCalendarToday className="listing-icon" />
              <h3>28th December 2022</h3>
            </div>
          </div>
        </div>
        <div className="card-button">
          <Link href={`/listings/${listing.id}`}>
            <button className="listing-button">More Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
