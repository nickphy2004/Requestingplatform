import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import MarPhoto from "./assets/mar.jpg";
import LapPhoto from "./assets/lap.jpg";
import WhatsPhoto from "./assets/call.png";
import EmailPhoto from "./assets/email.png";




function Header({ onmenuClick, aboutRef, contactRef,homeRef ,goToNextPage  }) {
  return (
    <div>
      <div className="main-back"  ref = {homeRef}>
        {/* Heading components */}
        <div className="heading">
          <div className = "head-ing">
          <button className="menu-bar" id="menu-btn" onClick={onmenuClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <div className="main-head">
            <h1 id="tit">Web Requesting Platform</h1>
          </div>
           </div>
          <div className="abt">
            <button
              id="abt-us"
              onClick={() =>
                aboutRef.current &&
                aboutRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              about us
            </button>
          </div>
          <div className="abt2">
            <button
              id="abt-us2"
              onClick={() =>
                contactRef.current &&
                contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              contact us
            </button>
          </div>
          <div className="abt3">
            <button id="abt-us3" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >home</button>
          </div>
          <div className="abt4">
            <button id="abt-u4" onClick={goToNextPage}>
              Web Registration
            </button>
          </div>
        </div>
        
        
        
        {/* Images */}
        <div className="img">
          <img src="Market.jpg" alt="Description" id="back-img" />
        </div>
        <div className="img2">
          <img src={MarPhoto} alt="Description" id="back-img2" />
        </div>
        <div className="img3">
          <img src={LapPhoto} alt="Description" id="back-img3" />
        </div>

        {/* Main Content */}
        <div className="main-cont">
          <div className="pag-cont">
            <h1 id="cont">
              Welcome To Web <br />
              <span id="con-t">Requesting Platform</span>
            </h1>

            <div className="par-cont">
              <p id="par">
                The Web Requesting Platform is a web-based system designed <br />
                to handle online requests and automate communication between <br /> users
                and servers.
              </p>
              <p id="par2">
                This requesting platform helps you get a website <br />
                for your business, school, college, or any other purpose. <br />
                You just need to register and specify the type of website you need.
              </p>
              <p id="par3">
                Get a professional website for your business in just a few clicks.
              </p>
            </div>
          </div>

          <div className="box">
            <h2 id="type-cont">Description</h2>
            <hr id="border" />
            <div className="point">
              <ul id="list">
                <li id="lis">New Business Web</li>
                <li id="lis">E-Commerce Web</li>
                <li id="lis">School And College Web</li>
              </ul>
            </div>
          </div>

          <div className="box2">
            <h2 id="type-cont2">What We Do</h2>
            <hr id="border2" />
            <div className="point2">
              <ul id="list2">
                <li id="lis2">
                  Build responsive websites that look great on all devices.
                </li>
                <li id="lis2">
                  Design creative UI/UX interfaces for a smooth user experience.
                </li>
                <li id="lis2">
                  Integrate advanced features like chatbots, API automation, and dashboards.
                </li>
              </ul>
            </div>
          </div>

          <div className="about-box" ref={aboutRef}>
            <h2 id="about-title">About Us</h2>
            <hr id="about-line" />
            <div className="about-content">
              <p>
                <strong id="hed">
                  Welcome to web requesting platform — Your Virtual Web Creation Hub!
                </strong>
              </p>
              <p>
                We are a passionate team of developers helping anyone create their
                own custom website easily. Whether you’re launching a{" "}
                <span>business</span>, building an <span>e-commerce store</span>, or
                managing a <span>school or college website</span>, our platform makes
                it fast and simple.
              </p>
              <p>
                Just tell us what kind of website you need — we’ll handle the design,
                development, and hosting, so you can focus on growing your idea.
              </p>
              <h3 className="sub-head">Our Mission</h3>
              <p>
                To make website creation simple, affordable, and accessible for
                everyone.
              </p>
              <h3 className="sub-head">Our Vision</h3>
              <p>
                Empowering students, startups, and small businesses to go digital with
                confidence.
              </p>
            </div>
          </div>

          <div className="ptag">
            <p id="p-tag">
              We are professionally developing <br />
              full-stack websites with 100% hand-written code
              <br />
              ensuring that every website is safe and secure.
            </p>
          </div>

          <div className="htag">
            <h3 id="h-tag">NOTE :</h3>
          </div>

          <div className="about-box1" ref={contactRef}>
            <div className="about1">
              <h2 id="about-title1">Contact Us</h2>
            </div>

            <hr id="about-line1" />
            <div className="about-content1">
              <p>
                <strong id="hed1">We'd love to hear from you!</strong>
              </p>
              <p> Have any questions, feedback, or any other</p>
              <div className="img4">
                <img src={WhatsPhoto} alt="Description" id="back-img4" />
              </div>
              <div className="phe-num">
                <p id="num">+91 8778445875</p>
              </div>
              <div className="img5">
                <img src={EmailPhoto} alt="Description" id="back-img5" />
              </div>
              <div className="e-mail">
                <p id="email">webrequesting@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menubar({ visible, handleClose,  aboutRef, contactRef ,goToNextPage  }) {
  if (!visible) return null;

  return (
    <div className="main-box show1">
      <div className="close-btn">
        <button onClick={handleClose}>
          <div id="closebtn1"></div>
        </button>
      </div>

      <div className="navi-tio">
        <div className="home1">
          <button
            id="home-us1"
            onClick={() => {
              handleClose(); 
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            home
          </button>
        </div>
        <div className="web2">
          <button
            id="web-us2" onClick = {goToNextPage }>
            Web Registration
          </button>
        </div>
        <div className="contact3">
          <button
            id="contact-us3"
            onClick={() => {
              handleClose(); 
              contactRef.current &&
                contactRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            contact us
          </button>
        </div>
        <div className="aout4">
          <button
            id="abt-us4"
            onClick={() => {
              handleClose(); 
              aboutRef.current &&
                aboutRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            about us
          </button>
        </div>
      </div>
    </div>
  );
}
function App() {
  
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => setMenuVisible(!menuVisible);
  const handleCloseMenu = () => setMenuVisible(false);
  const navigate = useNavigate();

  const goToNextPage = () =>{
    navigate("/reg");
  }

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div>
      
      <div className="main-back">
        <Header
          
          onmenuClick={handleMenuClick}
          aboutRef={aboutRef}
          contactRef={contactRef}
          homeRef = {homeRef}
           goToNextPage={goToNextPage}
        />
      </div>
      <Menubar
        visible={menuVisible}
        handleClose={handleCloseMenu}
        aboutRef={aboutRef}
        contactRef={contactRef}
        goToNextPage={goToNextPage}
      />
    </div>
  );
}

export default App;

