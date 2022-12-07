import React from "react";

type PropType = {
  number: string;
  index: number;
};

function Page(props: PropType) {
  return (
    <div
      className={`${
        props.index === 0 ? "bg-cgreen text-white" : "text-black border"
      } w-9 h-9 flex items-center justify-center rounded-md font-bold`}
    >
      {props.number}
    </div>
  );
}

export default Page;
