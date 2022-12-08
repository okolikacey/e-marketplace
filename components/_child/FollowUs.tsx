import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function FollowUs() {
  return (
    <div className="flex flex-row gap-3 justify-center text-white">
      <div>Follow Us:</div>
      <div className="flex flex-row items-center gap-3">
        <FaFacebook color="green" />
        <AiFillTwitterCircle color="green" />
        <AiFillLinkedin color="green" />
      </div>
    </div>
  );
}

export default FollowUs;
