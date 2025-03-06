import { createContext, useContext, useReducer, useState } from "react";

export const ProjectContext = createContext();

const FilterStatusDispatchContext = createContext(null);

function FilterStatusReducer(state, { type, payload }) {
  switch (type) {
    case "ALL": {
      return [...payload];
    }
    case "OPEN": {
      return [...payload].filter((s) => s.status === "OPEN");
    }
    case "CLOSED": {
      return [...payload].filter((s) => s.status === "CLOSED");
    }

    default:
      throw new Error("UnKnown Erorr" + type);
  }
}

export function ProjectProvider({ children, projects }) {
  const [data, setData] = useState([...projects]);
  const [state, dispatch] = useReducer(FilterStatusReducer, projects);

  return (
    <ProjectContext.Provider value={{ data, setData }}>
      <FilterStatusDispatchContext.Provider value={{ state, dispatch }}>
        {children}
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
