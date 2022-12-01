import React from "react";
import { HashLink as LinkAnchor } from "react-router-hash-link";

function TeamMember(props) {
  return (
    <div class="EventCard card">
      <img src="/assets/images/phone-call.png" alt="Phone" />
      <h1>{props.h1}</h1>
      <p class="title">{props.pTitle}</p>
      <p>
        <i>{props.p}</i>
      </p>
      <ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
        <li>{props.li3}</li>
        <li>{props.li4}</li>
        <li>{props.li5}</li>
      </ul>
      <p>
        <LinkAnchor to={props.link} smooth>
          <button className="button-87">Create a room!</button>
        </LinkAnchor>
      </p>
    </div>
  );
}

export default TeamMember;
