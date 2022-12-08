import React from "react";
import { categoriesData } from "../../data/sample";

function CategoryOptions(props) {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white w-[35em] mt-2 absolute z-10 rounded-lg left-32 p-5">
      {categoriesData.map((category) => (
        <div key={category.id}>{category.category}</div>
      ))}
    </div>
  );
}

export default CategoryOptions;
