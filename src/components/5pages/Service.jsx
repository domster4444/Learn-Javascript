import { Redirect } from 'react-router-dom';
import React from 'react';
import OfferCard from '../1atoms/OfferCard';
import dashboard from '../../img/illustrators/dashboard.png';
import accountImg from '../../img/generalImage/generalSectionInnerCardLogo1.png';
import screwImg from '../../img/generalImage/generalSectionInnerCardLogo2.png';

// generalSection righ division image (illustrator)

import applicationUI from '../../img/illustrators/applicationUI.png';
import diamondBottom from '../../img/illustrators/threeDiamondBottomLeft.png';

import dottedDesign from '../../img/illustrators/dottedDesign.png';
import savingUI1 from '../../img/generalImage/saving1.png';

import BestFeatureSection from '../1atoms/BestFeatureSection';

import ServiceDescriptionType1 from '../2molecules/ServiceDescriptionType1';
import ServiceDescriptionType2 from '../2molecules/ServiceDescriptionType2';

export default function Service(props) {
  console.log(props.isLoggedInProps);
  if (props.isLoggedInProps === 'false') {
    return (
      <>
        <main id="servicePageMain">
          <img
            src={dottedDesign}
            className="dottedDesign"
            alt="an illustrator"
          />
          <section className="offerCardsSection">
            <div className="containerCenter">
              <div className="contentBlock">
                <OfferCard circleColor="blueCircle" title="Reliable" />
                <OfferCard circleColor="redCircle" title="User Friendly" />
                <OfferCard circleColor="greenCircle" title="Easy to use" />
                <OfferCard circleColor="purpleCircle" title="Modern UI" />
                <OfferCard circleColor="goldCircle" title="Secure" />
              </div>
            </div>
          </section>

          <section id="generalDescriptionSection">
            <div className="containerCenter">
              <div className="contentBlock">
                <div id="leftSection">
                  <h1>
                    Easy to sign up & can create <br /> account yourself
                  </h1>

                  <p>
                    Here you can create you account & login to your account
                    easily
                    <br />
                    You can get details on Process Page too.
                  </p>

                  <section id="generealDescriptionSection_leftSection_innerCardContainer">
                    <div className="smallServiceCard">
                      <img src={accountImg} alt="" />
                      <h1>Easy Sign up</h1>
                      <p>
                        Our userfriendly interface allows you to create your
                        account easily.
                      </p>
                    </div>
                    <div className="smallServiceCard">
                      <img src={screwImg} alt="" />
                      <h1>Easy LogIn</h1>
                      <p>
                        Our userfriendly interface allows you to LogIn your
                        account easily.
                      </p>
                    </div>
                  </section>
                </div>
                <div id="rightSection">
                  <img src={applicationUI} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="bestFeatureSection">
            <img
              src={diamondBottom}
              id="bestFeatureSectionDiamondIllustrator"
              alt=""
            />
            <div className="containerCenter">
              <div className="contentBlock">
                <BestFeatureSection
                  color="blueCircle"
                  title="Flexible & Easy"
                  detail="Here you can find best services to use onlne at home"
                />
                <BestFeatureSection
                  color="redCircle"
                  title="Flexible & Easy"
                  detail="Here you can find best services to use onlne at home"
                />
                <BestFeatureSection
                  color="greenCircle"
                  title="Flexible & Easy"
                  detail="Here you can find best services to use onlne at home"
                />

                <BestFeatureSection
                  color="purpleCircle"
                  title="Flexible & Easy"
                  detail="Here you can find best services to use onlne at home"
                />

                <BestFeatureSection
                  color="goldCircle"
                  title="Flexible & Easy"
                  detail="Here you can find best services to use onlne at home"
                />
                <BestFeatureSection
                  color="pinkCircle"
                  title="Flexible & Easy"
                  detail="Here you can find best services to use onlne at home"
                />
              </div>
            </div>
          </section>
          <section id="dashboardSection">
            <div className="containerCenter">
              <div className="contentBlock">
                <img src={dashboard} alt="dashboard" />
              </div>
            </div>
          </section>

          <ServiceDescriptionType1
            title="we save client's money in various services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                maiores assumenda rem quibusdam fugiat corrupti eum delectus
                magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
                dolores vitae consequatur atque pariatur exercitationem saepe,
                sed, voluptas voluptate!"
            image={savingUI1}
            hexagon="redHexagon"
          ></ServiceDescriptionType1>
          <ServiceDescriptionType2
            title="we save client's money in various services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                maiores assumenda rem quibusdam fugiat corrupti eum delectus
                magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
                dolores vitae consequatur atque pariatur exercitationem saepe,
                sed, voluptas voluptate!"
            image={savingUI1}
            hexagon="blueHexagon"
          ></ServiceDescriptionType2>
          <ServiceDescriptionType1
            title="we save client's money in various services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                maiores assumenda rem quibusdam fugiat corrupti eum delectus
                magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
                dolores vitae consequatur atque pariatur exercitationem saepe,
                sed, voluptas voluptate!"
            image={savingUI1}
            hexagon="greenHexagon"
          ></ServiceDescriptionType1>

          <ServiceDescriptionType2
            title="we save client's money in various services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                maiores assumenda rem quibusdam fugiat corrupti eum delectus
                magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
                dolores vitae consequatur atque pariatur exercitationem saepe,
                sed, voluptas voluptate!"
            image={savingUI1}
            hexagon="purpleHexagon"
          ></ServiceDescriptionType2>
          <ServiceDescriptionType1
            title="we save client's money in various services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                maiores assumenda rem quibusdam fugiat corrupti eum delectus
                magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
                dolores vitae consequatur atque pariatur exercitationem saepe,
                sed, voluptas voluptate!"
            image={savingUI1}
            hexagon="goldHexagon"
          ></ServiceDescriptionType1>
          <ServiceDescriptionType2
            title="we save client's money in various services"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                maiores assumenda rem quibusdam fugiat corrupti eum delectus
                magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
                dolores vitae consequatur atque pariatur exercitationem saepe,
                sed, voluptas voluptate!"
            image={savingUI1}
            hexagon="pinkHexagon"
          ></ServiceDescriptionType2>
        </main>
      </>
    );
  } else {
    return <Redirect to="/welcomehome" />;
  }
}
