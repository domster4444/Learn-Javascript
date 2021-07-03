import React from 'react';

import experienceSectionRightDivision from '../../img/generalImage/experienceSection-rightDivision.png';

export default function ExperienceSection() {
  return (
    <>
      <main id="ExperienceSection">
        <div className="containerCenter">
          <div className="contentBlock">
            <div className="leftDivision">
              <div className="leafCircle purple"></div>
              <h2 className="poppins_light_300">
                On strategic experiences and visual appeal
              </h2>
              <p className="poppins_light_300">
                Why I say old chap that is, spiffing off his nut cor blimey
                guvnor geeza bloke knees up bobby, sloshed arse William cack
                Richard. Bloke fanny around chesed
              </p>
              <a href="https://google.com">Learn More -</a>
            </div>

            <div className="rightDivision">
              <img
                src={experienceSectionRightDivision}
                alt="representaion of an illustator"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
