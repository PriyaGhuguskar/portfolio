import React from "react";
import "./Intro.css";
import Pdf from "../images/priya_ghuguskar_resume.pdf";

function Intro() {
  return (
    <div className="introdiv" id="home">
      <div className="left-div">
        <p className="introtxt">
          I'm <br /> Priya Ghuguskar
        </p>
        <p className="introtxtp">Frontend Developer |</p>
        <button className="intro-btn">
          <a
            target="_blank"
            href={Pdf}
            rel="noopener noreferrer"
            style={{ textDecoration: "none ", color: "white" }}
          >
            Resume
          </a>
        </button>
      </div>

      <div className="pic"></div>
    </div>
  );
}

export default Intro;
