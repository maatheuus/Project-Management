import image from "../assets/no-projects.png";

export default function NoProjectSelected({ children }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={image}
        alt="No projects yet"
      />
      <h1 className="text-3xl font-bold text-stone-600 mb-2">
        No Project Selected
      </h1>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      {children}
    </div>
  );
}
