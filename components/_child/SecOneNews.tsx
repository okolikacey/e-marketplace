import Image from "next/image";
import React from "react";
import newOneImage from "../../public/images/news1.png";
import newTwoImage from "../../public/images/news2.png";

function SecOneNews(props) {
  return (
    <div className="flex flex-col h-200 bg-cblackgrey px-3 w-200">
      <h4 className="text-cgreen">News</h4>
      <Image src={newOneImage} width={200} height={150} alt="new immage" />
      <b className="text-white text-sm py-1 leading-[15px]">
        Edo govt tasks communities on secure of oil, gas installations
      </b>
      <p className="text-white text-[10px] text-justify leading-[10px]">
        The Edo State Government has urged local communities to protect oil and gas installations in
        the state.
      </p>
      <div className="text-cgreen text-[8px] flex flex-row justify-between my-1">
        <a>Oct 1, 2022</a>
        <a>5 min read</a>
      </div>
    </div>
  );
}

export default SecOneNews;
