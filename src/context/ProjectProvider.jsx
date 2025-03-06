import { createContext, useContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children, projects }) {
  const [data, setData] = useState([...projects]);

  return (
    <ProjectContext.Provider value={{ data, setData }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (context === undefined)
    throw new Error("this context was used outside the provider");
  return context;
};
