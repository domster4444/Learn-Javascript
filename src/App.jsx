import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.css';
// --tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../src/components/1atoms/Header';

import HomePage from './components/5pages/HomePage';
import SignUpPage from './components/5pages/RegisterPageI';
import LoginPage from './components/5pages/LoginPageI';
import ForgotPasswordPage from './components/5pages/ForgotPasswordPage';
import PageNotFound from './components/5pages/PageNotFound';
import Service from './components/5pages/Service';
import OurTeam from './components/5pages/OurTeam';
import { useState } from 'react';
import { css } from 'styled-components';
import PrivateRoute from './PrivateRoute';
function App() {
  // _________________STATE FOR ALL HOSPITAL DATA AFTER LOGGEDIN start

  const [loggedInHospitalCode, setLoggedInHospitalCode] = useState('');
  const [loggedInHospitalName, setLoggedInHospitalName] = useState('');
  const [loggedInHospitalEmail, setLoggedInHospitalEmail] = useState('');
  const [loggedInHospitalDistrict, setLoggedInHospitalDistrict] = useState('');

  let loggedInHospitalDetail = {
    loggedInHospitalCode: loggedInHospitalCode,
    loggedInHospitalName: loggedInHospitalName,
    loggedInHospitalEmail: loggedInHospitalEmail,
    loggedInHospitalDistrict: loggedInHospitalDistrict,
  };
  // _________________STATE FOR ALL HOSPITAL DATA AFTER LOGGEDIN end

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [currentUser, setUser] = useState('');
  const [isInitialHospitalAlreadySet, setIsInitialHospitalAlreadySet] =
    useState(false);

  //?fetch and set isInitialHospitalALreadySet ? to true

  return (
    <>
      <Router>
        {/* //?______________only render header if isLoggedIn is false */}
        <Header isLoggedInProps={isLoggedIn}></Header>

        <Route
          exact
          path="/"
          component={() => <HomePage isLoggedInProps={isLoggedIn} />}
        />
        {/* //?sending state changing handler to respective register & login pages  */}
        <Route
          path="/signup"
          component={() => <SignUpPage isLoggedInProps={isLoggedIn} />}
        />
        {/* //?sending state changing handler to respective register & login pages  */}
        <Route
          path="/login"
          component={() => (
            <LoginPage
              // ---------set loggedin hospital state after success login
              setLoggedInHospitalCode={setLoggedInHospitalCode}
              setLoggedInHospitalName={setLoggedInHospitalName}
              setLoggedInHospitalEmail={setLoggedInHospitalEmail}
              setLoggedInHospitalDistrict={setLoggedInHospitalDistrict}
              isLoggedInProps={isLoggedIn}
              setLoggedInProps={setisLoggedIn}
              setUser={setUser}
            />
          )}
        />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
        <Route path="/404" component={PageNotFound} />
        <Route
          path="/service"
          component={() => <Service isLoggedInProps={isLoggedIn} />}
        />

        <Route
          path="/ourteam"
          component={() => <OurTeam isLoggedInProps={isLoggedIn} />}
        />

        {/* ________________________PRIVATE ROUTES  */}
        <PrivateRoute
          // ------------ALL CURRENT USER DATA
          loggedInHospitalDetail={loggedInHospitalDetail}
          // currentUser={currentUser}
          //? pass isInitialHospitalAlreadySet to specify if  needed to show model or not
          isInitialHospitalAlreadySet={isInitialHospitalAlreadySet}
          setLoggedInProps={setisLoggedIn}
          loggedInStateProps={isLoggedIn}
        />
      </Router>
      <ToastContainer toastClassName={css({ fontSize: '20rem' })} />
    </>
  );
}

export default App;
