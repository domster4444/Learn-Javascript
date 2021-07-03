import React from 'react';

export default function SidePricingCard(props) {
  return (
    <>
      <div className="priceCard">
        <h1>{props.price}</h1>
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <button className="cursor">
          <strong>Buy Now</strong>
        </button>
      </div>
    </>
  );
}
