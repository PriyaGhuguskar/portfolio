import React from "react";
import "./project.css";
import home from "../images/home.png";
import youtube from '../images/youtube.png'
import crypto from '../images/crypto.png'

function Project() {
  return (
    <div className="container-pro" id="project">
      <h1>Projects</h1>
      <div className="wrapper">
        <div className="project1">
          <div className="description">
            <h2>Movie Website </h2>

            <p>Mar 2024 - Mar 2024</p>
            <br />
            <div>

              Proficiently Applied Redux to manage state Globally,
              <br />
              Apply Authorization  and responsive pages
              <br />
              <br />

              Tech Stack:  React.js, Redux Toolkit
              JavaScript, HTML, CSS
            </div>
          </div>

          <a
            className="projimg"
            href="https://unique-cannoli-1d3ecb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={home} alt="home" />
          </a>
        </div>
      </div>
      <div className="under"></div>
      <div className="wrapper">
        <div className="project1">
          <div className="description">
            {/* <a
              href="https://book-all-dotcom.vercel.app/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Booking System</h2>
            </a> */}
            <h2>Youtube Clone</h2>

            <p>Aug 2023 - Aug 2023</p>
            <br />
            <div>
              create Youtube Clone , fetch API to display videos and video details
              <br />
              <br />
              Tech Stack: React.Js, Tailwind CSS
            </div>
          </div>
          <a
            className="projimg"
            href="https://strong-cendol-2a1c89.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
      <div className="under"></div>
      <div className="wrapper">
        <div className="project1">
          <div className="description">
            {/* <a
              href="https://dikshakhade.github.io/landing.github.io/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h2>College Langing Page</h2>
            </a> */}
            <h2>Crypto Tracker </h2>

            <p> May 2023 - May 2023</p>
            <br />
            <div>
              Implemented frontend with React.js framework to construct scalable and reusable components.
              <br />
              Created Crousel efficiently through CSS flexbox and grid techniques. <br />
              <br />
              Tech Stack: React.js , Context API
            </div>
          </div>
          <a
            className="projimg"
            href="https://gilded-tulumba-4c6e4c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={crypto} alt="crypto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
