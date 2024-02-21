import Button from "./Button";
import SelectedProject from "./SelectedProject";

export default function ProjectsSidebar({ onClick, data, handleClickProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onClick} text="+ Add Project" />{" "}
      <ul className="mt-8">
        <SelectedProject data={data} onClick={handleClickProject} />
      </ul>
    </aside>
  );
}
