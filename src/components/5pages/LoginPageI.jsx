import React from 'react';
import Form from 'react-bootstrap/Form';
import doctorBg from '../../img/generalImage/docBG.png';
import Button from 'react-bootstrap/Button';
const LoginPageI = () => {
  return (
    <>
      <div className="containerCenter">
        <div className="contentBlock">
          <main id="LoginPageI">
            <div id="leftDivision">
              <img src={doctorBg} alt="" />
            </div>
            <div id="rightDivision">
              <section id="formContainer">
                <h1 className="poppins_medium_500">
                  Let's protect yourself and those <br /> around you by
                  vaccinating{' '}
                </h1>

                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  I am joining as :
                </label>

                <div id="radioContainer">
                  <div className="radioCard">
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} id={`default-${type}`} />
                      </div>
                    ))}
                    <label htmlFor="">Organization</label>
                  </div>
                  <div className="radioCard">
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} id={`default-${type}`} />
                      </div>
                    ))}
                    <label htmlFor="">Hospital</label>
                  </div>
                </div>
                {/* _______________________first input  */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Code
                </label>

                <Form.Control type="text" placeholder="Enter email" />
                {/* ___________________second input */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Password
                </label>

                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </section>

              <div className="formSubmitContainer">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoginPageI;
