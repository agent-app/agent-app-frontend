import React from "react";
import "./pageHero.css"

export default function PageHero({title}) {
  return (
    <div className="page-hero">
      <div className="text-center hero-info-area">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
}
