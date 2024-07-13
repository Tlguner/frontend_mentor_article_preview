import React, { useState } from "react";
import drawersImage from "../../images/drawers.jpg";
import "./App.css";
import avatar from "../../images/avatar-michelle.jpg";
import share from "../../images/icon-share.svg";
import Share from "./share";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="app">
      <div className="card">
        <img src={drawersImage} className="card-image" alt="Drawers" />
        <div className="card-content">
          <h1 className="card-header">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="card-text">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="footer">
            <img className="avatar" src={avatar} alt="avatar" />
            <p>Michelle Appleton 28 Jun 2020</p>
            <button
              onClick={() => {
                setShow(!show);
                console.log(show);
              }}
            >
              <img src={share} alt="share button" />
            </button>
            {show && <Share />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
