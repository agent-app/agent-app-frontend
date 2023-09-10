import React from "react";
import PageHero from "../../../components/PageHero/PageHero";
import "./listing.css";

export default function Listing() {
  return (
    <div>
      <PageHero title="Listing Title"/>
      <div className="listing-section">
        <div className="listing-carousel"></div>
        <div className="listing-details-section">
          <div className="listing-main">
            <div className="listing-heading">
              <h2 className="listing-title">2 Bedroom Apartment</h2>
            </div>
            <div className="listing-features">
              <div className="listing-features-item">Bathroom 1</div>
              <div className="listing-features-item">Bathroom 1</div>
              <div className="listing-features-item">Bathroom 1</div>
            </div>
            <div className="listing-details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur sed eligendi omnis? Deserunt dolorem maiores quibusdam
                dolor enim dolore doloremque saepe quam tempora. Fuga atque
                dolor odio cum illum id. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Pariatur sed eligendi omnis? Deserunt dolorem
                maiores quibusdam dolor enim dolore doloremque saepe quam
                tempora. Fuga atque dolor odio cum illum id. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Pariatur sed eligendi
                omnis? Deserunt dolorem maiores quibusdam dolor enim dolore
                doloremque saepe quam tempora. Fuga atque dolor odio cum illum
                id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur sed eligendi omnis? Deserunt dolorem maiores quibusdam
                dolor enim dolore doloremque saepe quam tempora. Fuga atque
                dolor odio cum illum id. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Pariatur sed eligendi omnis? Deserunt dolorem
                maiores quibusdam dolor enim dolore doloremque saepe quam
                tempora. Fuga atque dolor odio cum illum id. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Pariatur sed eligendi
                omnis? Deserunt dolorem maiores quibusdam dolor enim dolore
                doloremque saepe quam tempora. Fuga atque dolor odio cum illum
                id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur sed eligendi omnis? Deserunt dolorem maiores quibusdam
                dolor enim dolore doloremque saepe quam tempora. Fuga atque
                dolor odio cum illum id.
              </p>
            </div>
          </div>
          <div className="listing-side">Here</div>
        </div>
      </div>
    </div>
  );
}
