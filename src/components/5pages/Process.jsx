import React from 'react';
import { Redirect } from 'react-router-dom';

import process_image1 from '../../img/generalImage/process_image1.png';
import process_image2 from '../../img/generalImage/process_image2.png';
import process_image3 from '../../img/generalImage/process_image3.png';
import process_image4 from '../../img/generalImage/process_image4.png';
import process_image5 from '../../img/generalImage/process_image5.png';

export default function Process(props) {
  if (props.isLoggedInProps === 'false') {
    return (
      <>
        <div className="containerCenter">
          <div className="contentBlock">
            <main className="processPageMain1">
              <section className="leftSection">
                <h1 className="numberFont"> 01</h1>

                <h2 className=" poppins_medium_500">
                  With instant data keep to everyone in the know
                </h2>

                <p className=" poppins_regular_400">
                  Why I say old chap that is spiffing bodge, blag pardon me
                  bugged mufty Oxford butty bubble and squeak wind up, brown
                  bread them full monty bloke ruddy cras tickety-boo squiffy.
                  Starkers dropped a clanger lurgy is cack excuse my French what
                  a plonker blower. On Oxford butty bubble and squeak wind up
                  monty bloke ruddy cras tickety-boo squiffy.
                </p>
              </section>
              <section className="rightSection">
                <img
                  src={process_image1}
                  alt="illustrator describing process"
                />
              </section>
            </main>
            <main className="processPageMain2">
              <section className="leftSection">
                <h1 className="numberFont"> 02</h1>

                <h2 className=" poppins_medium_500">
                  With instant data keep to everyone in the know
                </h2>

                <p className=" poppins_regular_400">
                  Why I say old chap that is spiffing bodge, blag pardon me
                  bugged mufty Oxford butty bubble and squeak wind up, brown
                  bread them full monty bloke ruddy cras tickety-boo squiffy.
                  Starkers dropped a clanger lurgy is cack excuse my French what
                  a plonker blower. On Oxford butty bubble and squeak wind up
                  monty bloke ruddy cras tickety-boo squiffy.
                </p>
              </section>
              <section className="rightSection">
                <img
                  src={process_image2}
                  alt="illustrator describing process"
                />
              </section>
            </main>
            <main className="processPageMain22">
              <section className="leftSection">
                <h1 className="numberFont"> 03</h1>

                <h2 className=" poppins_medium_500">
                  With instant data keep to everyone in the know
                </h2>

                <p className=" poppins_regular_400">
                  Why I say old chap that is spiffing bodge, blag pardon me
                  bugged mufty Oxford butty bubble and squeak wind up, brown
                  bread them full monty bloke ruddy cras tickety-boo squiffy.
                  Starkers dropped a clanger lurgy is cack excuse my French what
                  a plonker blower. On Oxford butty bubble and squeak wind up
                  monty bloke ruddy cras tickety-boo squiffy.
                </p>
              </section>
              <section className="rightSection">
                <img
                  src={process_image3}
                  alt="illustrator describing process"
                />
              </section>
            </main>

            <main className="processPageMain2">
              <section className="leftSection">
                <h1 className="numberFont"> 04</h1>

                <h2 className=" poppins_medium_500">
                  With instant data keep to everyone in the know
                </h2>

                <p className=" poppins_regular_400">
                  Why I say old chap that is spiffing bodge, blag pardon me
                  bugged mufty Oxford butty bubble and squeak wind up, brown
                  bread them full monty bloke ruddy cras tickety-boo squiffy.
                  Starkers dropped a clanger lurgy is cack excuse my French what
                  a plonker blower. On Oxford butty bubble and squeak wind up
                  monty bloke ruddy cras tickety-boo squiffy.
                </p>
              </section>
              <section className="rightSection">
                <img
                  src={process_image4}
                  alt="illustrator describing process"
                />
              </section>
            </main>

            <main className="processPageMain4">
              <section className="leftSection">
                <h1 className="numberFont"> 05</h1>

                <h2 className=" poppins_medium_500">
                  With instant data keep to everyone in the know
                </h2>

                <p className=" poppins_regular_400">
                  Why I say old chap that is spiffing bodge, blag pardon me
                  bugged mufty Oxford butty bubble and squeak wind up, brown
                  bread them full monty bloke ruddy cras tickety-boo squiffy.
                  Starkers dropped a clanger lurgy is cack excuse my French what
                  a plonker blower. On Oxford butty bubble and squeak wind up
                  monty bloke ruddy cras tickety-boo squiffy.
                </p>
              </section>
              <section className="rightSection">
                <img
                  src={process_image5}
                  alt="illustrator describing process"
                />
              </section>
            </main>
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/welcomehome" />;
  }
}
