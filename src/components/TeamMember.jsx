import React from "react";

function TeamMember() {
  return (
    <div className="TeamMember">
      <div className="container">
        <img
          src="/assets/images/team-andre.jpg"
          alt="André Antunes"
          className="image"
        />
        <div className="middle">
          <div className="text">André Antunes</div>
        </div>
      </div>
      <div className="container">
        <img
          src="/assets/images/team-raiza.jpg"
          alt="Raiza Garcia"
          className="image"
        />
        <div className="middle">
          <div className="text">Raiza Garcia</div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
