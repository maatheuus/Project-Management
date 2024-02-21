export default function NewProject({ clickCancel, clickSave, children }) {
  return (
    <div className="w-[35rem] mt-16">
      <form className="mt-4 text-right">
        <button
          type="button"
          onClick={clickCancel}
          className="text-stone-600 hover:text-stone-950"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={clickSave}
          className="px-6 py-2 ml-3 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </form>
      {children}
    </div>
  );
}
