import React from 'react'
import CardComponent from './CardComponent'
import "./cardsection.css"

export default function CardSection() {
  return (
    <div className="card-section">
      <div className="section-heading">
        <h1>Newly Added</h1>
      </div>
      <div className="card-row">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
