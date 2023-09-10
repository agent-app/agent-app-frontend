"use client"
import React from "react";
import { MdHouse, MdSchool } from "react-icons/md";
import { useGlobalContext } from "../../app/context";
import "./apartmentsection.css";


const apartments = [
    {
      id: 1,  
      heading: "Hostels",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animimagni incidunt officiis cum quaerat neque sint, molestias consectetur repudiandae at excepturi nemo maiores ipsa tenetur nam",
        icon: MdHouse,
    },
     {
      id: 2,  
      heading: "Apartments",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animimagni incidunt officiis cum quaerat neque sint, molestias consectetur repudiandae at excepturi nemo maiores ipsa tenetur nam",
        icon: MdSchool,
    },
      {
        id: 3,
        heading: "Houses",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animimagni incidunt officiis cum quaerat neque sint, molestias consectetur repudiandae at excepturi nemo maiores ipsa tenetur nam",
        icon: MdHouse,
    },
       {
        id: 4,
        heading: "Commercial",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animimagni incidunt officiis cum quaerat neque sint, molestias consectetur repudiandae at excepturi nemo maiores ipsa tenetur nam",
        icon: MdHouse,
    }
]
export default function ApartmentSection() {
  const {name} = useGlobalContext()
  return (
    <div className="apartment-section">
      <div className="section-heading">
        <h1>{name}</h1>
      </div>
      <div className="apartment-row">
        {apartments.map((apartment) => {
          return (
            <div className="apartment" key={apartment.id}>
              <div className="apartment-icon-section">
                <apartment.icon className="apartment-icon" />
              </div>
              <div className="apartment-heading">
                <h2>{apartment.heading}</h2>
              </div>
              <div className="apartment-details">
                <p>
                  {apartment.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
