import { createContext, useContext, useReducer, useState } from "react";

export const ProjectContext = createContext();

const FilterStatusDispatchContext = createContext(null);

function FilterStatusReducer(state, { type, payload }) {
  switch (type) {
    case "add": {
      return [...state, payload];
    }
    case "delete": {
      return state.filter((s) => s.id !== payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }

    default:
      throw new Error("UnKnown Erorr" + type);
  }
}

export function ProjectProvider({ children, projects }) {
  const [data, setData] = useState([...projects]);
  const [state, dispatch] = useReducer(FilterStatusReducer, []);

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
