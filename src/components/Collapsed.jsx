import React from "react";

function Collapsed() {
  return (
    <div class="wrap-collabsible">
      <input id="collapsible" class="toggle" type="checkbox" />
      <label for="collapsible" class="lbl-toggle">
        More Info
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <p>
          The rooms have pre configurations. Some of them are: 
          <br/>
          <i>no chat</i> - so participants won't have distractions and only talk when the host allows | <i>settings button off</i> - so participants can't change the settings | <i>breakout allowed</i> - create groups on the video call, so participants can have small group discussions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Collapsed;
