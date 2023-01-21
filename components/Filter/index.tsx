import React, { ChangeEvent, ReactElement, useCallback } from "react";
import { useFilter } from "~/context/filterContext";

const optionsValues = ["dell", "hp", "lenovo"];

const Filters = (): ReactElement => {
  const { categoryChangeEvent, selectedCategory } = useFilter();

  const handleCategoryChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      categoryChangeEvent(event.target.value);
    },
    [categoryChangeEvent]
  );

  return (
    <div className="container mx-auto my-5 px-5 2xl:p-0">
      <div className="w-full">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-white dark:text-white 2xl:text-xl"
        >
          Select a category
        </label>
        <select
          id="category"
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="w-full pb-3 pt-3 px-5 bg-global_color_secondary text-white text-lg font-semibold rounded-md appearance-none"
        >
          {optionsValues.map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filters;
