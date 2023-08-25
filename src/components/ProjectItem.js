
import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ name, id , description, to}) {
 
  
  return (
    <div
      className="projectItem"
      
    >
      <div className="bgItem" />
      <h1> {name} </h1>
      <h2>{description}</h2>
      <Link to={to} target="blank"> visit</Link>
      
      
    </div>
  );
}

export default ProjectItem;
