import React from 'react';
import logo from '../../img/companyLogo.png';
import BlueGhostBtn from './BlueGhostBtn';
import { Link } from 'react-router-dom';
export default function Header(props) {
  if (props.isLoggedInProps === 'true') {
    return <div></div>;
  } else {
    return (
      <>
        <header id="navBar">
          <nav>
            <a href="/">
              <div id="logoBlock">
                <img src={logo} alt="representation of logo" />
              </div>
            </a>
            <div id="menuBlock">
              <ul>
                <li className="cursor poppins_regular_400">
                  <a href="/">Home</a>
                </li>

                <li className="cursor poppins_regular_400">
                  <Link to="/service">Services</Link>
                </li>

                <li className="cursor poppins_regular_400">
                  <Link to="/ourteam">Our Team</Link>
                </li>
                <li className="cursor poppins_regular_400">
                  <Link to="/login">Login</Link>
                </li>
                <li className="cursor poppins_regular_400">
                  <Link to="/signup">
                    <BlueGhostBtn name="Sign Up" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
