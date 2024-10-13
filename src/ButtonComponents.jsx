import React from "react";

const ButtonComponents = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.className}`}>
      {props.title}
    </button>
  );
};

export default ButtonComponents;
