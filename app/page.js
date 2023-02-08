import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import CardSection from "../components/CardSection/CardSection";
import ApartmentSection from "../components/ApartmentSection/ApartmentSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ApartmentSection />
      <CardSection />
    </div>
  );
}
