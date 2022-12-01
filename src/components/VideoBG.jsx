import React from "react";

function VideoBG() {
  const video = document.getElementById("myVideo");
  const btn = document.getElementById("myBtn");

  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
  return (
    <>
      <video id="background-video" loop autoPlay>
        <source src="/assets/video/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main>
        <div className="hero-image">
          <div className="hero-text">
            <h1>Callify</h1>
            <p>Simple way to make videocalls. No downloads, just a link.</p>
            <a href="/events">
              <button className="button-87">Discover More</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default VideoBG;
