import React from 'react';

export default function ExtendServiceSection() {
  return (
    <>
      <main id="ExtendServiceSectionmain">
        <div className="containerCenter">
          <div className="contentBlock">
            <h2 className="purpleText">OUR PRICINGS</h2>
            <h1>Affordable Pricing Plans</h1>
            <div className="container">
              <div className="cards">
                <div className="cardHeaderContainer">
                  <h2 className="blueText">Basic Plan</h2>

                  <h1>199$/mo</h1>
                  <hr />
                </div>

                <ul>
                  <li className="listContainer">
                    <div>Product Details</div>
                    <div>rightIcon</div>
                  </li>
                  <li className="listContainer">
                    <div>Product Details</div>
                    <div>rightIcon</div>
                  </li>
                  <li className="listContainer">
                    <div>Product Details</div>
                    <div>rightIcon</div>
                  </li>
                  <li className="listContainer">
                    <div>Product Details</div>
                    <div>rightIcon</div>
                  </li>
                  <li className="listContainer">
                    <div>Product Details</div>
                    <div>rightIcon</div>
                  </li>
                </ul>

                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
