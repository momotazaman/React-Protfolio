
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectItem({ name, id , description, to}) {
  const navigate = useNavigate();
  
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="bgItem" />
      <h1> {name} </h1>
      <h2>{description}</h2>
      <Link to={to}> visit</Link>
      
      
    </div>
  );
}

export default ProjectItem;
