"use client"
import React from 'react'
import CardComponent from './CardComponent'
import {listings} from '../constants/listings'
import "./cardsection.css"

export default function AllListings() {
  return (
    <div className="card-section">
      <div className="card-row">
        {
          listings.map((data) => {return <CardComponent listing={data} />})
        }
        
      </div>
    </div>
  );
}
