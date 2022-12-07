import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { filterActions, initializeFilterState } from "../../store/slices/filterSlice";
import { optionType } from "../../types/commonTypes";
import { filterOptionPropType } from "../../types/propTypes";
import RadioBox from "../RadioBox";

function FilterBody({ data, parentId }: filterOptionPropType) {
  const dispatch = useDispatch();
  const filter = useSelector(initializeFilterState);

  const handleSelect = (option: optionType, value: boolean) => {
    console.log(option);
    // dispatch(filterActions.updateFilterState({ parentId, data }));
  };
  return (
    <div className="px-4 flex flex-col">
      <div className="border-2 rounded-md border-cgreen px-2 my-2 h-10 flex flex-row items-center relative">
        <div className="absolute pointer-events-none">
          <IoMdSearch color="green" />
        </div>
        <input className="grow outline-none placeholder: pl-5" placeholder="Search" />
      </div>

      {/* {data.map((option) => (
        <RadioBox
          key={option.id}
          name={option.name}
          isSelected={option.isActive}
          onSelect={(value) => handleSelect(option, value)}
        />
      ))} */}

      {data.map((option) => (
        <div className="my-1" key={option.id}>
          <input
            type="radio"
            name={parentId}
            value={option.name}
            onClick={() => console.log(option.name, option.id)}
            className="bg-slate-500"
          />{" "}
          {option.name}
        </div>
      ))}

      <span className="text-cgreen mt-2">Show more</span>
    </div>
  );
}

export default FilterBody;
