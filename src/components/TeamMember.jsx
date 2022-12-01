import React from "react";

function TeamMember() {
  return (
    <>
      <h1>Meet the team</h1>
      <div className="TeamMember">
        <div className="container">
          <a
            href="https://www.linkedin.com/in/andre-antunes-webdev/"
            target="_blank"
          >
            <img
              src="/assets/images/user-man-callify.png"
              alt="André Antunes"
              className="image"
            />
            <div className="middle">
              <div className="text">André Antunes</div>
            </div>
          </a>
        </div>
        <div className="container">
          <a href="https://www.linkedin.com/in/raizagarcia/" target="_blank">
            <img
              src="/assets/images/user-woman-callify.png"
              alt="Raiza Garcia"
              className="image"
            />
            <div className="middle">
              <div className="text">Raiza Garcia</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default TeamMember;
