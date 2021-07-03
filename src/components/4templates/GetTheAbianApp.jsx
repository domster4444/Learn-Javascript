import React from 'react';
import phoneImage1 from '../../img/illustrators/Screen Capture_select-area_20210317225658_iphone12black_portrait.png';
import phoneImage2 from '../../img/illustrators/Screen Capture_select-area_20210318143536_ipadair4_green_landscape.png';
export default function GetTheAbianApp() {
  return (
    <main id="getAbianAppSectionContainer">
      <section id="getAbianAppSection">
        <div id="leftSection">
          <h1 className="poppins_light_300">Get the Abian app</h1>
          <div id="appTitleBlueRectangle"></div>
          <h2 className="poppins_regular_400">
            Services to solve your problems anywhere, anytime
          </h2>
          <ul>
            <li className="poppins_light_300">
              🌟 &nbsp; Compare Different Services
            </li>
            <li className="poppins_light_300">
              🌟 &nbsp; Use 50+ Services With Userfriendly Interface
            </li>
            <li className="poppins_light_300">
              🌟 &nbsp;Demand Your Desired Services
            </li>
            <li className="poppins_light_300">
              🌟 &nbsp; Download Our App With Single Tap
            </li>
          </ul>

          <h3 className="poppins_regular_400">Download our app from</h3>
          <button className="googlePlayBtnBg cursor"></button>

          <button className="appleStoreBtnBg cursor"></button>
        </div>
        <div id="rightSection">
          <img
            src={phoneImage1}
            id="phone"
            alt=" representaion of phone mockup"
          />
          <img
            src={phoneImage2}
            id="tablet"
            alt=" representaion of phone mockup"
          />
        </div>
      </section>
    </main>
  );
}
