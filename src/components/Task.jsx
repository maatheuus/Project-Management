import NewTask from "./NewTask.jsx";

export default function Task({ currentProject, allProjects, updateList }) {
  const { title, description, date, id } = currentProject;

  function handleDeleteProject() {
    const cloneAllProjects = [...allProjects];

    const findProject = cloneAllProjects.findIndex(
      (project) => project.id === id
    );

    cloneAllProjects.splice(findProject, 1);

    return updateList(cloneAllProjects, true); 
  }

  function handleUpdateTaskProject(tasks) {
    const cloneAllProjects = [...allProjects];

    const findProject = cloneAllProjects.find((project) => project.id === id);

    if (findProject) {
      findProject.tasks = tasks;

      updateList(cloneAllProjects);
    }
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <div className="w-[35rem] mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
            <button
              onClick={handleDeleteProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Delete
            </button>
          </div>
          <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <p className="text-stone-400 mb-4">{date}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
          </header>
        </div>

        <NewTask
          updateTaskProject={handleUpdateTaskProject}
          currentProject={currentProject}
          allProjects={allProjects}
        />
      </div>
    </>
  );
}
