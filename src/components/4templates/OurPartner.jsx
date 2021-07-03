import React from 'react';
import PartnerCard from '../1atoms/PartnerCard';

import partner1 from '../../img/partner/partner1.svg';
import partner2 from '../../img/partner/partner2.svg';
import partner3 from '../../img/partner/partner3.svg';
import partner4 from '../../img/partner/partner4.png';
import partner5 from '../../img/partner/partner5.png';
import partner6 from '../../img/partner/partner6.png';
import partner7 from '../../img/partner/partner7.png';
import partner8 from '../../img/partner/partner8.svg';
import partner9 from '../../img/partner/partner9.svg';
export default function OurPartners() {
  return (
    <>
      <section id="partnerSectionMain" className=" ourPartnerSectionBg">
        <header className=" centerText ourPartnerSectionBg">
          <h1 className="poppins_light_300">Our Partners</h1>
          <h2 className="poppins_light_300">
            Leading insurers for your financial freedom
          </h2>
        </header>

        <section id="ourPartnerSection">
          <div className="containerCenter">
            <div className="contentBlock">
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner2} />
              <PartnerCard logo={partner3} />
              <PartnerCard logo={partner4} />1
              <PartnerCard logo={partner5} />
              <PartnerCard logo={partner6} />
              <PartnerCard logo={partner7} />
              <PartnerCard logo={partner8} />
              <PartnerCard logo={partner9} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner2} />
              <PartnerCard logo={partner3} />
              <PartnerCard logo={partner4} />
              <PartnerCard logo={partner5} />
              <PartnerCard logo={partner6} />
              <PartnerCard logo={partner7} />
              <PartnerCard logo={partner8} />
              <PartnerCard logo={partner9} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner2} />
              <PartnerCard logo={partner3} />
              <PartnerCard logo={partner4} />
              <PartnerCard logo={partner5} />
              <PartnerCard logo={partner6} />
              <PartnerCard logo={partner7} />
              <PartnerCard logo={partner8} />
              <PartnerCard logo={partner9} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner2} />
              <PartnerCard logo={partner3} />
              <PartnerCard logo={partner4} />
              <PartnerCard logo={partner5} />
              <PartnerCard logo={partner6} />
              <PartnerCard logo={partner7} />
              <PartnerCard logo={partner8} />
              {/* <PartnerCard logo={partner2} /> */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
