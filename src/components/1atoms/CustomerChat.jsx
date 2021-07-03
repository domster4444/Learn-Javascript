import React from 'react';
import bubbleChatLogo from '../../img/bubbleChat.png';

export default function customerChat() {
  return (
    <>
      <button id="customerChat" className="cursor">
        <img src={bubbleChatLogo} alt="customer support" />
      </button>
    </>
  );
}
