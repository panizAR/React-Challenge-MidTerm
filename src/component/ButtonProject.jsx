import React from "react";

function ButtonProject({ ShowProject }) {
  return (
    <div>
      <div className="text-gray-400 font-bold">لیست پروژه</div>
      <div className="flex justify-center items-center mt-14">
        <button
          className="bg-indigo-500 text-white rounded-lg px-9 py-2"
          onClick={ShowProject}
        >
          نشان دادن پروژه ها
        </button>
      </div>
    </div>
  );
}

export default ButtonProject;
