import React from 'react';
import rightArrow from '../../img/generalImage/righ-arrow.png';

export default function ArrowGhostCardSection() {
  return (
    <>
      <section>
        <section className="whychooseus_section">
          <div className="AboutUs_WhyChooseUs_Card cursor">
            <div className="AboutUs_WhyChooseUs_Card-Circles blue"></div>

            <h2 className="poppins_bold_700">Digital Analytics</h2>
            <p className="poppins_regular_400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste explicabo error excepturi placeat facilis est totam vel
              tempore blanditiis, ipsum, assumenda distinctio expedita? Fuga.
            </p>
            <div className="arrowIconContainer">
              <img src={rightArrow} alt="right arrow logo" />
            </div>
          </div>

          <div className="AboutUs_WhyChooseUs_Card cursor">
            <div className="AboutUs_WhyChooseUs_Card-Circles green"></div>

            <h2 className="poppins_bold_700">Digital Analytics</h2>
            <p className="poppins_regular_400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste explicabo error excepturi placeat facilis est totam vel
              tempore blanditiis, ipsum, assumenda distinctio expedita? Fuga.
            </p>
            <div className="arrowIconContainer">
              <img src={rightArrow} alt="right arrow logo" />
            </div>
          </div>
          <div className="AboutUs_WhyChooseUs_Card cursor">
            <div className="AboutUs_WhyChooseUs_Card-Circles gold"></div>

            <h2 className="poppins_bold_700">Digital Analytics</h2>
            <p className="poppins_regular_400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste explicabo error excepturi placeat facilis est totam vel
              tempore blanditiis, ipsum, assumenda distinctio expedita? Fuga.
            </p>
            <div className="arrowIconContainer">
              <img src={rightArrow} alt="right arrow logo" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
