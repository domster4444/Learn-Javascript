import React from 'react';

export default function FeaTag(props) {
  return (
    <>
      <main id="feaTag">
        <div id="card">
          <div id="logo">
            <img src={props.logo} alt="todo logo" />{' '}
          </div>
          <h4 id="featDescription" className="poppins_regular_400">
            50+ services with the
            <br /> lowest prices
          </h4>
        </div>
      </main>
    </>
  );
}
