import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedListings from "../components/Listings/FeaturedListings"
import ApartmentSection from "../components/ApartmentSection/ApartmentSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ApartmentSection />
      <FeaturedListings />
    </div>
  );
}
