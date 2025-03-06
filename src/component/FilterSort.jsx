import React from "react";
import { useFilterSort } from "../context/ProjectProvider";

function FilterSort() {
  const { sort, setSort } = useFilterSort();
  return (
    <div className=" bg-white rounded-lg p-1.5">
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="latest" className="w-32">
          جدید ترین
        </option>
        <option value="earliest">قدیمی ترین</option>
      </select>
    </div>
  );
}

export default FilterSort;
