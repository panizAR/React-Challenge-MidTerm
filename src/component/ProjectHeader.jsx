import FilterStatus from "./FilterStatus";

function ProjectHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-gray-500 text-xl">لیست پروژه</h2>

      <div className="flex justify-end items-center gap-4">
        <FilterStatus />

        <div className=" bg-white rounded-lg p-1.5">
          <select name="" id="">
            <option value="" className="w-32">
              جدید ترین
            </option>
            <option value="">قدیمی ترین</option>
          </select>
        </div>

        <div className=" bg-white rounded-lg p-1.5">
          <select name="" id="" className="w-40">
            <option value="">دسته بندی (همه)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
