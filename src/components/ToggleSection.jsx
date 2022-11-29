import React from "react";

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function ToggleSection(props) {
  return (
    <section className="ToggleSection">
      <h2>{props.title}</h2>
      <button class="collapsible">{props.title1}</button>
      <div class="content">
        <p>a{props.description1}</p>
      </div>
      <button class="collapsible">{props.title2}</button>
      <div class="content">
        <p>{props.description2}</p>
      </div>
      <button class="collapsible">{props.title3}</button>
      <div class="content">
        <p>{props.description3}</p>
      </div>
    </section>
  );
}

export default ToggleSection;
