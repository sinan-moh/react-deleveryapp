import React from "react";
import ReactDOM from "react-dom/client";
//Header
//-logo
//-nav-itams
//Body
//-search-bar
//-resto-cards
//footer
//-copyright
//-link
//-address
//-contact
let Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="logo-img"
          alt="logo-img"
          src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
let ResCondiner = () => {
  return (
    <div className="res-card">
      <img
        className="res-item-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/9/16/752ffb64-c819-4694-9425-f3f561c16145_93c8bb83-c2cc-46ad-8c3d-1e707118cf1d.png"
      />

      <h3 className="res-title">Chillies</h3>
      <p className="cousine">South Indian, Biryani</p>
      <p className="rating">4.8 ⭐</p>
      <p className="tym-taken">40min - 45min</p>
    </div>
  );
};
let Bodyy = () => {
  return (
    <div className="Body">
      <div className="search">
        <input className="search-bar" placeholder="Search..." />
        <button className="search-btn">Search</button>
      </div>
      <div className="resContainer">
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
        <ResCondiner />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <p className="footer-bottom">
        © 2026 Food Delivery App. All rights reserved.
      </p>
    </footer>
  );
};


let MainContainer = () => {
  return (
    <div className="main">
      <Header />
      <Bodyy />
      <Footer />
    </div>
  );
};

let Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<MainContainer />);
