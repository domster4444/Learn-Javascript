import React from 'react';
import { useEffect } from 'react';
import senderImage from '../../img/accounts/accountHolder1.jpg';
import SupporterTag from '../1atoms/FeaTag';
import supporter1 from '../../img/customerSupport/supporter1.png';
import addFileLogo from '../../img/messageBox/addFile.png';
import sendLogo from '../../img/messageBox/send.png';

export default function MessageBox() {
  useEffect(() => {
    // Update the document title using the browser API
    let chatIcon = document.getElementById('customerChat');
    let messageBox = document.getElementById('messageBox');

    chatIcon.addEventListener('click', () => {
      messageBox.classList.toggle('displayNone');
      setTimeout(function () {
        messageBox.classList.toggle('showMessageBox');
      }, 200);
    });
  });
  return (
    <div>
      <div id="messageBox" className="displayNone">
        <header>
          <h1 className="poppins_regular_400">Abian Support Team</h1>
          <p className="poppins_regular_400">
            We're here to answer your questions,
            <br />
            recommend courses or take feature
            <br />
            request.Ask us anything
          </p>

          <SupporterTag logo={supporter1} />
        </header>
        <section id="messageSection">
          <ul>
            {/* --------------------------- */}
            <li>
              <div className="message receivedMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}

            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
            {/* --------------------------- */}
            <li>
              <div className="message sentMessage">
                <div className="left">
                  <img src={senderImage} alt=" potrait of face of sender" />
                </div>
                <div className="right">
                  <div className="msg poppins_regular_400">
                    Hi! this is my message
                  </div>
                  <div className="dateOfMsg poppins_regular_400">
                    11:01 PM | Ocober 11
                  </div>
                </div>
              </div>
            </li>
            {/* ---------------------------  */}
          </ul>
        </section>
        <section className="msgInputSection">
          <form action="">
            <input
              className="poppins_regular_400"
              type="text"
              placeholder="write message"
            />
            <a href="https://google.com">
              <img src={sendLogo} alt="add file" />
            </a>
            <a href="https://google.com">
              <img src={addFileLogo} alt="add file" />
            </a>
          </form>
        </section>
      </div>
      ;
    </div>
  );
}
