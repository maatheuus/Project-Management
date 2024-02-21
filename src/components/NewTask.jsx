import { useRef } from "react";

export default function NewTask({ currentProject, updateTaskProject }) {
  const task = useRef();

  const { tasks } = currentProject;

  function handleAddNewTask() {
    const currentTask = task.current.value;

    updateTaskProject([currentTask, ...tasks]);
    task.current.value = "";
  }

  function handleRemoveNewTask(indexTask) {
    const cloneTasks = [...tasks];

    updateTaskProject(cloneTasks.filter((_, index) => index !== indexTask));
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        ref={task}
      />{" "}
      <button
        className="text-stone-800 hover:text-stone-950"
        onClick={handleAddNewTask}
      >
        Add task
      </button>
      {tasks.length === 0 ? (
        <p className="mt-8">This project does not have any tasks yet.</p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, indexTask) => {
            return (
              <li key={indexTask} className="flex justify-between my-4">
                <span>{task}</span>
                <button
                  onClick={() => handleRemoveNewTask(indexTask)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
/**
 *   // const updateList = {
  //   ...currentProject[0],
  //   currentProject: newTask,
  // };
  console.log(currentProject);

      allProjects.map((project) => {
    if (project.id === currentProject[0].id) {
          const currentTask = task.current.value;
          const setCurrentTask = [currentTask, ...prevTask];

          currentProject[0].currentTask = setCurrentTask;

          return setCurrentTask;
        }
      });
 */
