import React from 'react';

export default function BlueGhostBtn(props) {
  return (
    <>
      <span id="blueGhostBtn" className="cursor">
        {props.name}
      </span>
    </>
  );
}
