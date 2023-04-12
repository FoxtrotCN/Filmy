import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

// Input: liked: boolean
// Output: onClick

function Like({ liked }) {
  let element = <FontAwesomeIcon icon={faHeart} />;
  if (!liked) element = <FontAwesomeIcon icon={faHeartSolid} />;

  return <>{element}</>;
}

export default Like;
