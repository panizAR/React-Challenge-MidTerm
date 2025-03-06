import { useFilterStatusDispatch } from "../context/ProjectProvider";

function FilterStatus() {
  const { state, dispatch } = useFilterStatusDispatch();

  const handleFilterChange = (e) => {
    dispatch({ type: "ALL", payload: e.target.value });
  };

  return (
    <div className="flex items-center gap-2">
      وضعیت
      <div className="bg-white rounded-lg p-1 flex w-56 justify-between">
        <button
          value="ALL"
          onClick={handleFilterChange}
          className="font-medium px-4 py-1 bg-indigo-500 rounded-lg text-white "
        >
          همه
        </button>
        <button value="OPEN" className="font-medium px-4 py-1">
          باز
        </button>
        <button value="CLOSED" className="font-medium px-4 py-1">
          بسته
        </button>
      </div>
    </div>
  );
}

export default FilterStatus;
