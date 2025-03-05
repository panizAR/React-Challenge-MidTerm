function ProjectHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-gray-500 text-xl">لیست پروژه</h2>

      <div className="flex justify-end items-center gap-4">
        <div className="flex items-center gap-2">
          وضعیت
          <div className="bg-white rounded-lg p-1 flex w-56 justify-between">
            <button className="font-medium px-4 py-1 bg-indigo-500 rounded-lg text-white ">
              همه
            </button>
            <button className="font-medium px-4 py-1">باز</button>
            <button className="font-medium px-4 py-1">بسته</button>
          </div>
        </div>

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
