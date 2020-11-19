import React from "react";
import { Link } from "react-router-dom";

import skin1 from "../static/images/skin1.svg";
import skin2 from "../static/images/skin2.svg";
import skin3 from "../static/images/skin3.svg";
import skin4 from "../static/images/skin4.svg";

import "./templates.css";

const Templates = () => {
  return (
    <div className="templates">
      <div className="templates-intro">
        <h1>Select a resume template to get started</h1>
        <p>You’ll be able to edit and change this template later!</p>
      </div>
      <div className="templates-styles">
        <div className="template">
          <img src={skin1} alt="" />
          <Link to="/contact">
          <button class="template-btn">USE TEMPLATE</button>
          </Link>
          
        </div>
        <div className="template">
          <img src={skin2} alt="" />
          <Link to="/contact">
          <button class="template-btn">USE TEMPLATE</button>
          </Link>
        </div>
        <div className="template">
          <img src={skin3} alt="" />
          <Link to="/contact">
          <button class="template-btn">USE TEMPLATE</button>
          </Link>
        </div>
        <div className="template">
          <img src={skin4} alt="" />
          <Link to="/contact">
          <button class="template-btn">USE TEMPLATE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Templates;
