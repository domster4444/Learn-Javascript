import React from 'react';

export default function PageNotFound() {
  return (
    <main id="pageNotFoundBody">
      <h1 className="cursor Sofia_Bold">
        <a href="https://google.com">404</a>
      </h1>
      <h2 className="Sofia_Light">Opps! Page not found</h2>
      <p className="Sofia_Regular">
        We’re sorry, the page you have looked for does not exist in our
        database! Maybe go to our home page or try to use a search?
      </p>

      <div className="sub-main">
        <button className="button-two cursor">
          <span className="Sofia_SemiBold">Go Back To Home</span>
        </button>
      </div>
    </main>
  );
}
