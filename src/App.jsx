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
import Process from './components/5pages/Process';
import OurTeam from './components/5pages/OurTeam';
import { useState } from 'react';
import WelcomeHome from './components/5pages/WelcomeHome';
import { css } from 'styled-components';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState('false');
  const [currentUser, setUser] = useState('');

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
          path="/process"
          component={() => <Process isLoggedInProps={isLoggedIn} />}
        />

        <Route
          path="/ourteam"
          component={() => <OurTeam isLoggedInProps={isLoggedIn} />}
        />
        <Route
          path="/welcomehome"
          component={() => (
            <WelcomeHome
              currentUser={currentUser}
              setLoggedInProps={setisLoggedIn}
              loggedInStateProps={isLoggedIn}
            />
          )}
        />
      </Router>
      <ToastContainer toastClassName={css({ fontSize: '20rem' })} />
    </>
  );
}

export default App;
