export default function SelectedProject({ data, onClick }) {
  return (
    <>
      {data.map((title, index) => {
        return (
          <li key={index}>
            <button
              onClick={onClick}
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            >
              {title.title}
            </button>
          </li>
        );
      })}
    </>
  );
}
