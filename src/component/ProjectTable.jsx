import {
  useFilterSort,
  useFilterStatusDispatch,
  useProjects,
} from "../context/ProjectProvider";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function ProjectTable() {
  const { data } = useProjects();
  const { state } = useFilterStatusDispatch();
  const { sort } = useFilterSort();

  const filteredData = state && state.length > 0 ? state : data;

  let sortedProjects = [...filteredData];
  if (sort === "earliest") {
    sortedProjects.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (sort === "latest") {
    sortedProjects.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  return (
    <div className="mt-8">
      <table className="w-full">
        <thead>
          <tr className="h-14">
            <th>#</th>
            <th className="w-96">عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {sortedProjects.map((item) => (
            <tr
              key={item._id}
              className="bg-white h-14  hover:bg-gray-200 border-y"
            >
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.budget.toLocaleString("fa-IR")}</td>
              <td>{new Date(item.deadline).toLocaleDateString("fa-IR")}</td>
              <td>
                {item.status === "CLOSED" ? (
                  <span className="bg-red-600 rounded-full  px-2 text-white">
                    بسته
                  </span>
                ) : (
                  <span className="bg-green-600 rounded-full  px-3 text-white">
                    باز
                  </span>
                )}
              </td>
              <td className="align-middle">
                <PencilSquareIcon className="w-5 text-blue-600 inline-block cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
