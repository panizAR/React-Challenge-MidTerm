import FilterCategory from "./FilterCategory";
import FilterSort from "./FilterSort";
import FilterStatus from "./FilterStatus";

function ProjectHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-gray-500 text-xl">لیست پروژه</h2>

      <div className="flex justify-end items-center gap-4">
        <FilterStatus />

        <FilterSort />

        <FilterCategory />
      </div>
    </div>
  ); 
}

export default ProjectHeader;
