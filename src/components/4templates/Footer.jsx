import React from 'react';
import umbrella from '../../img/generalImage/umbrella.png';
import shield from '../../img/generalImage/shield.png';
import scan from '../../img/generalImage/scan.png';
import reward from '../../img/generalImage/reward.png';
export default function Footer() {
  return (
    <>
      <main id="mainFooter">
        <h1 className="poppins_medium_500"> More Details</h1>
        <footer>
          <section>
            <div className="logo">
              <img
                src={umbrella}
                alt="representation of suitable footer logo"
              />
            </div>

            <h3 className="poppins_medium_500"> General</h3>
            <ul>
              <a href="https://google.com">
                <li className="poppins_light_300">Log In</li>
              </a>

              <a href="https://google.com">
                <li className="poppins_light_300">Register</li>
              </a>

              <a href="https://google.com">
                <li className="poppins_light_300">About Us</li>
              </a>
            </ul>
          </section>
          <section>
            <div className="logo">
              <img src={reward} alt="representation of suitable footer logo" />
            </div>
            <h3 className="poppins_medium_500"> About Us</h3>
            <ul>
              <a href="https://google.com">
                <li className="poppins_light_300">Our Team</li>
              </a>
              <a href="https://google.com">
                <li className="poppins_light_300">Our Services</li>
              </a>
            </ul>
          </section>
          <section>
            <div className="logo">
              <img src={shield} alt="representation of suitable footer logo" />
            </div>
            <h3 className="poppins_medium_500"> Services</h3>

            <ul>
              <a href="https://google.com">
                <li className="poppins_light_300">Hospital Service</li>
              </a>

              <a href="https://google.com">
                <li className="poppins_light_300">Covid Statistics</li>
              </a>
            </ul>
          </section>
          <section>
            <div className="logo">
              <img src={scan} alt="representation of suitable footer logo" />
            </div>
            <h3 className="poppins_medium_500"> Contacts</h3>
            <ul>
              <a href="mailto:kshitiz.stha11@gmail.com">
                <li className="poppins_light_300"> Email Us</li>
              </a>
              <a href="https://google.com">
                <li className="poppins_light_300">Contacts Us</li>
              </a>
            </ul>
          </section>
        </footer>
        <div className="greyBox poppins_light_300">
          **IMPORTANT NOTICE: This platform is created by Victrio Team & /*
          Copyright (C) Victiro - All Rights Reserved Unauthorized copying of
          this site or the ideas , via any medium or in any way directly or
          indirectly is strictly prohibited Proprietary and confidential Written
          by Kshitiz Shah kshitiz.stha11@gmail.com, 4th March 2021 */
        </div>
      </main>
    </>
  );
}
