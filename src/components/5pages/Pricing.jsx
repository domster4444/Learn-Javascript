import { Redirect } from 'react-router-dom';

import React from 'react';
import PricingPlanSection from '../4templates/PricingPlanSection';

import ExtendServiceSection from '../4templates/ExtendServiceSection';
export default function Pricing(props) {
  if (props.isLoggedInProps === 'false') {
    return (
      <div>
        <PricingPlanSection />

        <ExtendServiceSection />
      </div>
    );
  } else {
    return <Redirect to="/welcomehome" />;
  }
}
