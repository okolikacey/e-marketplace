import React from "react";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="bg-cgreen flex flex-col">
      <div className="flex flex-row justify-center items-center pb-1 pt-6 gap-5">
        <b className="text-white text-xl">NEWSLETTER</b>
        <input
          className="h-14 rounded-md w-1/2 placeholder-style bg-slate-100"
          placeholder="Enter your email address"
        />
        <div className="w-[10em]">
          <Button text="Subscribe" style={{ bgColor: "bg-cyellow", textColor: "text-black" }} />
        </div>
      </div>
      <div className="w-1/3 -ml-[13em] place-self-center pb-6">
        <p className="text-white">Never miss an important Oil & Gas News Story</p>
      </div>
    </div>
  );
}

export default Newsletter;
