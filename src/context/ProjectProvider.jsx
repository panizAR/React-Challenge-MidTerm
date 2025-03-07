import { createContext, useContext, useReducer, useState } from "react";

export const ProjectContext = createContext();
export const FilterStatusDispatchContext = createContext(null);
export const FilterSort = createContext();
export const FilterCategory = createContext();

function FilterStatusReducer(state, { type, payload }) {
  switch (type) {
    case "ALL": {
      return [...payload];
    }
    case "OPEN": {
      return payload.filter((s) => s.status === "OPEN");
    }
    case "CLOSED": {
      return payload.filter((s) => s.status === "CLOSED");
    }

    default:
      throw new Error("UnKnown Erorr" + type);
  }
}

export function ProjectProvider({ children, projects }) {
  const [data, setData] = useState([...projects]);
  const [state, dispatch] = useReducer(FilterStatusReducer, projects);
  const [sort, setSort] = useState("earliest");
  const [category, setCategory] = useState("ALL");

  return (
    <ProjectContext.Provider value={{ data, setData }}>
      <FilterStatusDispatchContext.Provider value={{ state, dispatch }}>
        <FilterSort.Provider value={{ sort, setSort }}>
          <FilterCategory.Provider value={{ category, setCategory }}>
            {children}
          </FilterCategory.Provider>
        </FilterSort.Provider>
      </FilterStatusDispatchContext.Provider>
    </ProjectContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (context === undefined)
    throw new Error("this context was used outside the provider");
  return context;
};

export function useFilterStatusDispatch() {
  return useContext(FilterStatusDispatchContext);
}

export function useFilterSort() {
  return useContext(FilterSort);
}

export function useFilterCategory() {
  return useContext(FilterCategory);
}
