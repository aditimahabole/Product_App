import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Star = ({ rate }) => {
  let starColor = "gold";
  if (rate < 4.5) {
    starColor = "red";
  }
  const starStyle = {
    color: starColor,
  };
  return (
    <>
      <FontAwesomeIcon icon={faStar} style={starStyle} />
    </>
  );
};

export default Star;
