import React from "react";
import CardComponent from "../../components/CardSection/CardComponent";
import CardSection from "../../components/CardSection/CardSection";
import PageHero from "../../components/PageHero/PageHero";
import "./listings.css";

export default function Listings() {
  return (
    <div>
      <PageHero />
      <div className="listings-area">
        <div className="filter-area">
          <div className="filter-section">
            <div className="filter-heading">
              <h1>Filter Listings</h1>
            </div>
            <div>
              <h1>Apartment Type</h1>
              <select className="filter-input">
                <option value="For Rent">For Rent</option>
              </select>
              <select className="filter-input">
                <option value="For Rent">Location</option>
              </select>
            </div>
            <div>
              <h1>Price</h1>
              <select className="filter-input">
                <option value="For Rent">Min. Price</option>
              </select>
              <select className="filter-input">
                <option value="For Rent">Max. Price</option>
              </select>
            </div>
            <button className="filter-button">Filter</button>
          </div>
        </div>
        <div className="listings-section flex">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
