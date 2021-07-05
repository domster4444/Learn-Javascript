import React from 'react';
import FeaTag from '../1atoms/FeaTag';
import GhostTag from '../1atoms/GhostTag';

import doctor from '../../img/generalImage/doctor.png';
import todo from '../../img/todo.png';
import hand from '../../img/hand.png';
import Button from 'react-bootstrap/Button';

export default function HeroSection() {
  return (
    <>
      {/* //?redoint */}
      <div className="containerCenter">
        <main id="heroSection">
          <div className="container">
            <h1 className="poppins_semibold_600">
              A commitment <br /> to a healthy future
            </h1>
            <h2 className="poppins_medium_500">We serve </h2>
            <h2 className="poppins_medium_500">Because we care</h2>
            <h2 className="poppins_medium_500">Then Now & Next</h2>
            <Button className="poppins_medium_500">Know More</Button>
          </div>
        </main>
      </div>
    </>
  );
}
