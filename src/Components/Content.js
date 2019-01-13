import React from "react";
import './Styles/content.css';
import {Link} from "react-router-dom";
import content from './Images/content.jpg';
import CroutonValue from './CroutonComp/CroutonValue.js';

const Content = () => {
  return (
    <div className="Content">
      <div className="ContentPart">
        <div className="ContentPartOne">
          <h3 className="ContentPartOneQuote">a complete creative agency</h3><br/>
          <h1 className="ContentPartOneHeading">Crouton-</h1>
          <p className="ContentPartOneHeadingText">Where learning never stops</p>
          <Link className="ContentPartLink" to="/About">DISCOVER MORE <span className="ContentPartLinkSub"> &#8594; </span></Link>
        </div>
        <img className="ContentPartImg" src={content} alt="ContentImg" width="500" height="500"/>
      </div>
      <div className="ContentMain">
        <div className="ContentMainOne">
          <CroutonValue heading="Core Value 1" content="Etiam viverra consequat nibh quis elementum." />
          <CroutonValue heading="Core Value 2" content="Mollis ac fringilla vitae, volutpat vitae enim." />
          <CroutonValue heading="Core Value 3" content="Donec nec convallis nulla. Cras tortor libero." />
        </div>
        <div className="ContentMainTwo">
          <p className="ContentMainTwoText">Ut neque nisl, venenatis et iaculis a, posuere euismod sem. Vivamus
            cursus dui mi, et sagittis tellus condimentum id. Sed dapibus
            volutpat orci ac gravida. Mauris varius justo at pharetra imperdiet.
            Nulla pursus velit, mollis ac fringilla vitae, volutpat vitae enim.
          </p>
          <h1 className="ContentMainTwoHeading"> Who we are-</h1>
          <h1 className="ContentMainTwoTextTwo"> Creativity to the core.</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
