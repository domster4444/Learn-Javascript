import React from 'react';
import { Redirect } from 'react-router';
const CovidStatus = (props) => {
  if (props.isLoggedInProps === false) {
    return <div>Covid Stats Nepal</div>;
  } else {
    return <Redirect to="/dashboardpage" />;
  }
};

export default CovidStatus;
