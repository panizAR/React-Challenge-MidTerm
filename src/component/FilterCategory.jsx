import React from "react";
import { useFilterCategory, useProjects } from "../context/ProjectProvider";

function FilterCategory() {
  const { category, setCategory } = useFilterCategory();
  const { data } = useProjects();

  return (
    <div className=" bg-white rounded-lg p-1.5">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-40"
      >
        <option value="ALL">دسته بندی (همه)</option>
        {data.map((p) => (
          <option value={p.category.englishTitle} key={p.category.id}>
            {p.category.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterCategory;
