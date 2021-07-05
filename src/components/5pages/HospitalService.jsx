import React from 'react';
import { Redirect } from 'react-router';
const HospitalService = (props) => {
  if (props.isLoggedInProps === false) {
    return (
      <>
        <div className="containerCenter">
          <div className="contentBlock">ghjgjhgj</div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
};

export default HospitalService;
