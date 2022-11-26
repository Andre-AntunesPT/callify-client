import React from "react";

function Home() {
  return (
    <>
      <header tabindex="0">
        <img
          src="/assets/images/logo-callify_white.png"
          alt="Callify - Logo"
          className="logo-callify"
        />
      </header>
      <div class="welcome">
        <span id="splash-overlay" class="splash"></span>
        <span id="welcome" class="z-depth-4"></span>
      </div>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}

export default Home;
