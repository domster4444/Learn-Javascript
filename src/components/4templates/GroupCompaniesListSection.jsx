import React from 'react';
import firstGroupCompany from '../../img/partner/partner1.svg';
import secondGroupCompany from '../../img/partner/partner2.svg';
export default function GroupCompaniesListSection() {
  return (
    <section className="containerCenter" id="groupCompaniesListSection">
      <div className="contentBlock" id="groupCompaniesListSection">
        <div id="leftSection">
          <div className="companyCard poppins_regular_400">Group Companies</div>
        </div>

        <div id="rightSection">
          <div className="companyCard poppins_light_300">
            <img
              src={firstGroupCompany}
              alt="representaion of company card logo"
            />
          </div>
          <div className="companyCard poppins_light_300">
            <img
              src={secondGroupCompany}
              alt="representaion of company card logo"
            />
          </div>
          <div className="companyCard poppins_light_300">
            <img
              src={firstGroupCompany}
              alt="representaion of company card logo"
            />
          </div>
          <div className="companyCard poppins_light_300">
            <img
              src={secondGroupCompany}
              alt="representaion of company card logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
