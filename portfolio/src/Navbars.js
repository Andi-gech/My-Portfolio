import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

import React, { useState } from "react";
import CountUp from "react-countup";
import "./app.css";

function Navbars({ onPres }) {
  const [active, setactive] = useState("home");
  const [visible, setvisible] = useState(true);
  const onpress = () => {
    const s = !visible;
    setvisible(s);
  };

  const onUpdateActiveLink = (name) => {
    setactive(name);
  };
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={""} alt="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-icon-toogl"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={active === "home" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={active === "Profiles" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("Profiles")}
              >
                Profiles
              </Nav.Link>
              <Nav.Link
                href="#sd"
                className={active === "Skills" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("Skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#sd"
                className={active === "Projects" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("Projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <button onClick={onpress}>Contact-Me </button>
          </Navbar.Collapse>
        </Container>
        {visible ? (
          <div className="popup">
            <div className="i11">
              <a href="https://www.facebook.com/anduti724">
                <FaFacebook
                  size={50}
                  color="
black"
                />
              </a>
            </div>
            <div className="i11">
              <a href="https://www.instagram.com/anduti724/">
                <FaInstagram
                  size={50}
                  color="
black"
                />
              </a>
            </div>
            <div className="i11">
              <a href="https://github.com/Andi-gech">
                <FaGithub
                  size={50}
                  color="
black"
                />
              </a>
            </div>
            <div className="i11">
              <a href="https://www.tiktok.com/@andutii1">
                <FaTiktok
                  size={50}
                  color="
black"
                />
              </a>
            </div>
            <div className="i11">
              <a href="">
                <FaLinkedin
                  size={50}
                  color="
black"
                />
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Navbar>
    </div>
  );
}

export default Navbars;
