import React from 'react';

export default function PrincipleCard(props) {
  return (
    <div>
      <div className="principleCard cursor">
        <img src={props.image} alt="representation of " />
        <span className={props.color}></span>
        <h3 className="poppins_semibold_600">{props.title1}</h3>
        <h3 className="poppins_semibold_600">{props.title2}</h3>
        <h3 className="poppins_semibold_600">{props.title3}</h3>

        <p className="subParagraph poppins_regular_400">
          {props.subTitle1} <br />
          {props.subTitle2}
        </p>

        <p className="description poppins_regular_400">{props.description}</p>
      </div>
    </div>
  );
}
