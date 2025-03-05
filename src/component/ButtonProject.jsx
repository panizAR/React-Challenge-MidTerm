function ButtonProject({ ShowProject }) {
  return (
    <div>
      <h2 className="text-gray-500 text-xl">لیست پروژه</h2>
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
