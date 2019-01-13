import React,{Component} from 'react';
import './styles.css';


const CroutonValue = (props) => {
  return (
    <div className="main">
      <h2 className="mainHeading">{props.heading}</h2>
      <p className="mainContent">{props.content}</p>
    </div>
  );
};

export default CroutonValue;
