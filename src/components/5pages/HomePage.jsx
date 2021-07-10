import { Redirect } from 'react-router-dom';

import React from 'react';

import HeroSection from '../4templates/HeroSection';
import AdditionalServiceSection from '../4templates/AdditionalServiceSection';
import OurPartner from '../4templates/OurPartner';
// import CustomerChat from '../1atoms/CustomerChat';
// import MessageBox from '../2molecules/MessageBox';
import BackgroundBlob1 from '../1atoms/BackgroundBlob1';

import FeatCarousel from '../1atoms/FeatCarousel';
import DoubtSection from '../4templates/DoubtSection';
import GetTheAbianAppSection from '../4templates/GetTheAbianApp';
import GroupCompaniesListSection from '../4templates/GroupCompaniesListSection';
import ExperienceSection from '../4templates/ExperienceSection';
import Footer from '../4templates/Footer';
import ArrowGhostCardSection from '../4templates/ArrowGhostCardSection';

import Notice from '../1atoms/Notice';

export default function Homepage(props) {
  if (props.isLoggedInProps === false) {
    return (
      <div id="homepage">
        <Notice />
        <BackgroundBlob1 />
        <HeroSection></HeroSection>
        <AdditionalServiceSection></AdditionalServiceSection>
        <FeatCarousel />
        <DoubtSection />
        <GetTheAbianAppSection />
        <ArrowGhostCardSection />
        <ExperienceSection />
        <OurPartner />
        <GroupCompaniesListSection />
        {/* <PricingPlanSection /> */}

        <Footer></Footer>
      </div>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
}
