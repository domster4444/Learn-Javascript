import React from 'react';

export default function ServiceCard(props) {
  return (
    <>
      <div className="cursor poppins_regular_400" id="serviceCard">
        {/* -------------------------SVG---------------------  */}

        <img src={props.logo} alt="representation of logo" />

        {/* -------------------------SVG---------------------  */}

        <h4 className="poppins_light_300">{props.offername}</h4>
      </div>
    </>
  );
}
