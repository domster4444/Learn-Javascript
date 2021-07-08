import React from 'react';

import carouselIcon1 from '../../img/carouselIcon/first.png';
import carouselIcon2 from '../../img/carouselIcon/second.png';
import carouselIcon3 from '../../img/carouselIcon/third.png';
import carouselIcon4 from '../../img/carouselIcon/fourth.png';
import carouselIcon5 from '../../img/carouselIcon/fifth.png';

// -------subicon------
import subCarouselIcon1 from '../../img/carouselIcon/subCarouselIcon1.png';
import subCarouselIcon2 from '../../img/carouselIcon/subCarouselIcon2.png';
import subCarouselIcon3 from '../../img/carouselIcon/subCarouselIcon3.png';
import subCarouselIcon4 from '../../img/carouselIcon/subCarouselIcon4.png';
import subCarouselIcon5 from '../../img/carouselIcon/subCarouselIcon5.png';

export default function FeatCarousel() {
  return (
    <>
      <div
        className="carousel"
        data-flickity='{ "freeScroll": true, "wrapAround": true,"prevNextButtons": false,"autoPlay": 1500 }'
      >
        <div className="carousel-cell" id="firstCard">
          <img
            className="mainCarouselIcons"
            src={carouselIcon1}
            alt="representation of "
          />
          <img
            className="subCarouselIcons"
            src={subCarouselIcon1}
            alt="representation of "
          />

          <h1>
            Access All The Services
            <br />
            From Your Home
          </h1>
        </div>
        <div className="carousel-cell" id="secondCard">
          <img
            className="mainCarouselIcons"
            src={carouselIcon2}
            alt="representation of "
          />
          <img
            className="subCarouselIcons"
            src={subCarouselIcon2}
            alt="representation of "
          />
          <h1>
            Get The Latest Update Of
            <br /> The Hospitals Around YOu
          </h1>
        </div>

        <div className="carousel-cell" id="fourthCard">
          <img
            className="mainCarouselIcons"
            src={carouselIcon4}
            alt="representation of "
          />
          <img
            className="subCarouselIcons"
            src={subCarouselIcon4}
            alt="representation of "
          />
          <h1>
            All Nepal Covid Stats
            <br /> From Most Reliable Sources
          </h1>
        </div>

        <div className="carousel-cell" id="thirdCard">
          <img
            className="mainCarouselIcons"
            src={carouselIcon3}
            alt="representation of "
          />
          <img
            className="subCarouselIcons"
            src={subCarouselIcon3}
            alt="representation of "
          />
          <h1>
            Instant Customer Care
            <br /> Helpline Available
          </h1>
        </div>
        <div className="carousel-cell" id="fifthCard">
          <img
            className="mainCarouselIcons"
            src={carouselIcon5}
            alt="representation of "
          />
          <img
            className="subCarouselIcons"
            src={subCarouselIcon5}
            alt="representation of "
          />
          <h1>
            {' '}
            Find Healthcare Nearby
            <br /> And Get Help now!
          </h1>
        </div>
      </div>
    </>
  );
}
