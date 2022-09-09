import React, { useState } from "react";

export default function About() {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtntex] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntex("Enable light mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntex("Enable Dark mode");
    }
  };
  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Project</h1>
      <div class="accordion" id="accordionExample" style={mystyle}>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              style={mystyle}
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Purpose
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              <strong>I created this project to show my basic skills. </strong>In this projet their is use of React. 
              I created word counter application that will count number of 
                words, characters, time required to read text. 
                I also given 2 different to this page that is light and dark mode
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Use and Output
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              <strong>User can convert</strong> all characters in to Uppercase or lowercase. we can also copy text and clear it. 
              In thsi we can add even more functions such as changing font,size of characters.
            </div>
          </div>
        </div>
        
      </div>
      <div className="container" my-4>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
