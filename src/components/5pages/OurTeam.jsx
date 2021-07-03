import { Redirect } from 'react-router-dom';

import React from 'react';
import telescopeImage from '../../img/ourTeam/telescopeImg.png';

export default function OurTeam(props) {
  console.log(props.isLoggedInProps);
  if (props.isLoggedInProps === 'false') {
    return (
      <main id="ourTeamPage">
        <section id="heroSection">
          <div>
            <h1 className="poppins_medium_500">Join our Team</h1>
            <h2 className="poppins_regular_400">
              Help us on our quest to make good software even better
            </h2>
            <button className="cursor joinBtn">
              <strong className="poppins_regular_400">JOIN</strong>
            </button>
          </div>
        </section>

        <hr />

        <div className="containerCenter">
          <div className="contentBlock">
            <section id="sectionTwo">
              <div id="leftDivision">
                <img src={telescopeImage} alt="" />
              </div>

              <div id="rightDivision">
                <h3 className="poppins_medium_500">
                  Where are you? We may just be there too.
                </h3>
                <p className="poppins_regular_400">
                  New York, Dublin, Ann Arbor,
                  <br />
                  floating on a boat in the Mediterranean Sea, behind
                  <br /> that tree: if there’s a good enough internet
                  connection,
                  <br /> one of our employees (maybe you) might be there.
                  <br />
                </p>
              </div>
            </section>
          </div>
        </div>

        <hr />

        <div className="containerCenter">
          <div className="contentBlock">
            <section id="teamInfoSection">
              <div className="card">
                <div className="leftDivision">
                  <div className="sphereDivision">
                    <div id="firstTeamMember" className="teamMember"></div>
                  </div>
                </div>
                <div className="rightDivision">
                  <p className="poppins_regular_400">Our Presentor</p>
                  <div className="container">
                    <div className="left poppins_regular_400">
                      <strong>Kapoor</strong>
                      <br />
                      <p className="occupation">Bachelor 1st Year</p>
                    </div>
                    <div className="right poppins_medium_500">
                      <a href="#">
                        Read More{' '}
                        <svg
                          className="ArrowLink--arrowLink__svg--3LNWG"
                          viewBox="0 0 15 9"
                        >
                          <path
                            d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="leftDivision">
                  <div className="sphereDivision">
                    {/* //?team member image is specified as bgImg in css  below is 2nd team member */}
                    <div id="secondTeamMember" className="teamMember"></div>
                  </div>
                </div>
                <div className="rightDivision">
                  <p className="poppins_regular_400">Our Lead Designer</p>
                  <div className="container">
                    <div className="left poppins_regular_400">
                      <strong>Kritika</strong>
                      <br />
                      <p className="occupation">Bachelor 1st Year</p>
                    </div>
                    <div className="right poppins_medium_500">
                      <a href="#">
                        Read More{' '}
                        <svg
                          className="ArrowLink--arrowLink__svg--3LNWG"
                          viewBox="0 0 15 9"
                        >
                          <path
                            d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="leftDivision">
                  <div className="sphereDivision">
                    <div id="thirdTeamMember" className="teamMember"></div>
                  </div>
                </div>
                <div className="rightDivision">
                  <p className="poppins_regular_400">Our FullStack Developer</p>
                  <div className="container">
                    <div className="left poppins_regular_400">
                      <strong>Kshitiz</strong>
                      <br />
                      <p className="occupation">Bachelor 1st Year</p>
                    </div>
                    <div className="right poppins_medium_500">
                      <a href="#">
                        Read More{' '}
                        <svg
                          className="ArrowLink--arrowLink__svg--3LNWG"
                          viewBox="0 0 15 9"
                        >
                          <path
                            d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  } else {
    return <Redirect to="/welcomehome" />;
  }
}
