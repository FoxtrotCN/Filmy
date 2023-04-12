import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

// Input: liked: boolean
// Output: onClick

function Like({ liked, onClick }) {
  let element = (
    <FontAwesomeIcon
      icon={faHeartSolid}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
  if (!liked)
    element = (
      <FontAwesomeIcon
        icon={faHeart}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );

  return <>{element}</>;
}

export default Like;
