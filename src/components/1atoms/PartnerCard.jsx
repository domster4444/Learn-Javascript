import React from 'react';

export default function PartnerCard(props) {
  return (
    <div className="partnerCard cursor">
      <img src={props.logo} alt="representation of partner company logo" />
    </div>
  );
}
