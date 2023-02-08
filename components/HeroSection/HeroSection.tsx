import Image from "next/image";
import React from "react";
import "./hero-section.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="text-center hero-info-area">
        <h1 className="hero-title">Find your Ideal Home/Apartment</h1>
        <p className="hero-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          cupiditate voluptate alias pariatur tempore molestiae, voluptatem
          provident omnis eos blanditiis, magni vitae dicta quod consectetur
          accusantium recusandae! Quia, totam itaque?
        </p>
      </div>
      <div className="hero-form">
        <form>
          <select className="form-input my-4" value="Room">
            <option value="Room">Location</option>
            <option>Hostel</option>
          </select>
          <div className="form-partition">
            <div className="form-right">
              <select className="form-input my-4" value="Room">
                <option value="Room">Housing Type</option>
                <option>Hostel</option>
              </select>
              <select className="form-input my-4" value="Room">
                <option value="Room">Minimum Price</option>
                <option>Hostel</option>
              </select>
            </div>
            <div className="form-left">
              <select className="form-input my-4" value="Room">
                <option value="Room">Bedrooms</option>
                <option>Hostel</option>
              </select>
              <select className="form-input my-4" value="Room">
                <option value="Room">Maximum Price</option>
                <option>Hostel</option>
              </select>
            </div>
          </div>

          <button className="form-btn my-5">Search</button>
        </form>
      </div>
    </div>
  );
}
