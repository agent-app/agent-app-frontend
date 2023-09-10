import React from 'react'
import CardComponent from "./CardComponent";
import { listings } from "../constants/listings";
import "./cardsection.css";

const FeaturedListings = () => {
  return (
    <div className="card-section">
      <div className="section-heading">
        <h1>Newly Added</h1>
      </div>
      <div className="card-row">
        {listings.map((data) => {
            return <CardComponent listing={data} key={ data.id } />;
        })}
      </div>
    </div>
  );
}

export default FeaturedListings