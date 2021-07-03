import React from 'react';
// import icon

export default function OfferCard(props) {
  return (
    <main id="offerCardMain">
      <div className="offercard cursor">
        <div className="iconContainer">
          <div className={props.circleColor}>
            {/* ----LOGO--------- */}
            {/* ------------- */}
          </div>
        </div>
        <h2 className="offerCardTitile">{props.title}</h2>
      </div>
    </main>
  );
}
