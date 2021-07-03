import React from 'react';

export default function BestFeatureSection(props) {
  return (
    <>
      <div className="bestFeatureCards cursor">
        <div className="iconContainer">
          <div className={props.color}></div>
        </div>
        <h1>{props.title}</h1>
        <p>{props.detail}</p>
      </div>
    </>
  );
}
