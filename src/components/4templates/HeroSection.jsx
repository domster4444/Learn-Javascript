import React from 'react';
import FeaTag from '../1atoms/FeaTag';
import GhostTag from '../1atoms/GhostTag';

import doctor from '../../img/generalImage/doctor.png';
import todo from '../../img/todo.png';
import hand from '../../img/hand.png';

export default function HeroSection() {
  return (
    <>
      <div className="containerCenter">
        <div className="contentBlock">
          <div id="heroSection" className="centerContainer">
            <article id="leftBlock">
              <h1 className="poppins_light_300">
                Let's find you
                <br />
                the
                <span className="poppins_semibold_600"> Best Services</span>
              </h1>

              <div className="flexContainer">
                <FeaTag logo={todo} />
                <FeaTag logo={hand} />
              </div>
            </article>
            <article id="rightBlock">
              <div id="left">
                <GhostTag />

                <h3 className="poppins_regular_400">
                  A commitment
                  <br /> to our customers
                </h3>

                <button
                  className="blueBtn cursor hint--right hint--rounded hint--bounce"
                  aria-label="Thank you!"
                >
                  Know more
                </button>
              </div>
              <div id="right">
                <img src={doctor} alt="an illustrator" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
