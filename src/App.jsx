import { useState } from "react";
import "./App.css";
import ButtonProject from "./component/ButtonProject";
import Projects from "./component/Projects";
import { ProjectProvider } from "./context/ProjectProvider";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-01-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2020-12-23T12:55:48.740Z",
    createdAt: "2020-10-23T18:18:55.636Z",
    updatedAt: "2024-07-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "طراحی آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 3,
      title: "سایت",
      englishTitle: "site",
    },
    budget: 8000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2024-12-23T12:55:48.740Z",
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleShowProject = () => {
    setIsShow((is) => !is);
  };

  return (
    <ProjectProvider projects={projects}>
      {isShow ? (
        <Projects />
      ) : (
        <ButtonProject showProject={handleShowProject} />
      )}
    </ProjectProvider>
  );
}

export default App;
