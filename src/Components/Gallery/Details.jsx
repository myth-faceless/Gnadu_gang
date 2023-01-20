import React from "react";
function Details(props) {
  return (
    <div className="term">
      <dt>
        <img className="image" src={props.img} alt="Images" />
        <span> {props.name} </span>
      </dt>
    </div>
  );
}

export default Details;
