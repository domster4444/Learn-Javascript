import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
//push(/welcomehome) if true
import { useHistory } from 'react-router-dom';
//redirect to /welcomehome if true
import { Redirect } from 'react-router-dom';
import axios from 'axios';
//------------------react tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage(props) {
  //--------------------useHistory() to use it to push (/welcomehome)
  let history = useHistory();
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  //--------------------------------When event is fired in any of input fileld
  let changeHandler = (e) => {
    if (e.target.name === 'username-email') {
      setUserEmail(e.target.value);
    } else if (e.target.name === 'password-Name') {
      setPassword(e.target.value);
    }
  };
  //---------------------------------When Form Is Submitted
  let submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/login', {
        data: {
          email: email,
          password: password,
        },
      })
      //On Success
      .then((res) => {
        console.log(res.data.message);

        if (res.data.message === 'available') {
          //-------------------------------------reset email password field state
          setUserEmail('');
          setPassword('');
          //-------------------------------------change staet to true________________________________
          (() => {
            toast('success');
            props.setLoggedInProps('true');
            //TODO:app's s
            props.setUser(res.data.accountHolder);
          })();
          //----------------------------------After state change  history.push(/welcome home)

          history.push('/welcomehome');
        }
      })
      //onError
      .catch((error) => {
        toast.error('Wrong Email or Password');

        (() => {
          props.setLoggedInProps('false');
        })();
      });

    //**login POST DATA  & response response jwt */
  };
  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  // TODO:--------------------------------------CONDITIONAL RENDERING------------------------------
  if (props.isLoggedInProps === 'false') {
    //! it returns the component desired if isloggedin is false
    return (
      <div id="loginPage">
        <form action="" onSubmit={submitHandler}>
          <div className="login-div">
            <div className="logo"></div>
            <div className="title">LOGIN</div>
            <div className="sub-title">Abian Service</div>
            <div className="fields">
              <div className="username">
                <svg fill="#999" viewBox="0 0 1024 1024">
                  <path
                    className="path1"
                    d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
                  ></path>
                </svg>
                <input
                  name="username-email"
                  onChange={changeHandler}
                  type="email"
                  className="user-input"
                  placeholder="email"
                />
              </div>
              <div className="password">
                <svg fill="#999" viewBox="0 0 1024 1024">
                  <path
                    className="path1"
                    d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
                  ></path>
                </svg>
                <input
                  name="password-Name"
                  onChange={changeHandler}
                  type="password"
                  className="pass-input"
                  placeholder="password"
                />
              </div>
            </div>
            <button type="submit" className="signin-button">
              Login
            </button>
            <div className="link">
              <Link to="/forgotpassword">Forgot password?</Link> or
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    //! redirect to /welcomehome if loggedin is true
    return <Redirect to="/welcomehome" />;
  }
}
