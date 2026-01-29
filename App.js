import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Headers";
import Bodyy from "./src/components/Bodyy";
import Footer from "./src/components/Footer";


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
