import { useState } from "react";
import {
  useFilterStatusDispatch,
  useProjects,
} from "../context/ProjectProvider";

function FilterStatus() {
  const { dispatch } = useFilterStatusDispatch();
  const { data } = useProjects();
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterStatusALL = () => {
    dispatch({ type: "ALL", payload: data });
    setActiveFilter("ALL");
  };

  const handleFilterStatusOPEN = () => {
    dispatch({ type: "OPEN", payload: data });
    setActiveFilter("OPEN");
  };

  const handleFilterStatusCLOSED = () => {
    dispatch({ type: "CLOSED", payload: data });
    setActiveFilter("CLOSED");
  };

  return (
    <div className="flex items-center gap-2">
      وضعیت
      <div className="bg-white rounded-lg p-1 flex w-56 justify-between">
        <button
          onClick={handleFilterStatusALL}
          className={`font-medium px-4 py-1 ${
            activeFilter === "ALL" ? " bg-indigo-500 rounded-lg text-white" : ""
          } `}
        >
          همه
        </button>

        <button
          onClick={handleFilterStatusOPEN}
          className={`font-medium px-4 py-1 ${
            activeFilter === "OPEN"
              ? " bg-indigo-500 rounded-lg text-white"
              : ""
          } `}
        >
          باز
        </button>

        <button
          onClick={handleFilterStatusCLOSED}
          className={`font-medium px-4 py-1 ${
            activeFilter === "CLOSED"
              ? " bg-indigo-500 rounded-lg text-white"
              : ""
          } `}
        >
          بسته
        </button>
      </div>
    </div>
  );
}

export default FilterStatus;
