import { useRef, useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import Button from "./components/Button";
import Input from "./components/Input";
import NewProject from "./components/NewProject";
import Task from "./components/Task";
import Modal from "./components/Modal";

function App() {
  const [noProjects, setNoProjects] = useState(true);
  const [newProject, setNewProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState();
  const [task, setTask] = useState(false);
  const [projects, setProjects] = useState([]);

  const valueText = useRef();
  const valueTextarea = useRef();
  const date = useRef();
  const dialog = useRef();

  function handleCreateNewProject() {
    setNewProject(true);
    setNoProjects(false);
    setTask(false);
  }

  function handleClickSave() {
    if (
      valueText.current.text() === "" ||
      valueTextarea.current.textarea() === "" ||
      date.current.date() === ""
    ) {
      return dialog.current.open();
    }

    setProjects((prevProjects) => {
      const project = {
        title: valueText.current.text(),
        description: valueTextarea.current.textarea(),
        date: date.current.date(),
        tasks: [],
        id: [],
      };

      return [project, ...prevProjects];
    });

    setNoProjects(true);
    setNewProject(false);
  }

  function handleClickCancel() {
    setNoProjects(true);
    setNewProject(false);
  }

  function handleClickProject(e) {
    setNoProjects(false);
    setNewProject(false);
    setTask(true);

    const findCurrentProject = projects
      .map((project, index) => {
        project.id = index;
        return project;
      })
      .find((project) => project.title === e.target.textContent);

    setProjectSelected(findCurrentProject);
  }

  function handleUpdateList(result, isDeleted) {
    setProjects(result);

    if (isDeleted) {
      setTask(false);
      setNoProjects(true);
    }
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onClick={handleCreateNewProject}
          handleClickProject={handleClickProject}
          data={projects}
        />

        {task && (
          <Task
            currentProject={projectSelected}
            allProjects={projects}
            updateList={handleUpdateList}
          />
        )}

        {noProjects && (
          <NoProjectSelected>
            <Button
              onClick={handleCreateNewProject}
              text="Create new project"
            />
          </NoProjectSelected>
        )}

        {newProject && (
          <NewProject
            clickCancel={handleClickCancel}
            clickSave={handleClickSave}
          >
            <Input title="Title" type="text" ref={valueText} />
            <Input title="Description" type="textarea" ref={valueTextarea} />
            <Input title="Due Date" type="date" ref={date} />
          </NewProject>
        )}
      </main>
      <Modal ref={dialog} />
    </>
  );
}

export default App;
