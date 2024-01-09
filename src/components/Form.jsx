import { useRouter } from "next/navigation";

function Form({
  params,
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
}) {
  const router = useRouter();
  return (
    <form
      className="bg-neutral-800 p-10 sm:w-1/2 rounded-lg m-5"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-center text-2xl mb-3">
        {params.id ? "Update task" : "Create new task"}
      </h2>
      <label htmlFor="title" className="font-bold text-sm ">
        Task Title
      </label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-black border border-black p-1  rounded-md mb-4 h-11 focus:shadow-md focus:shadow-neutral-500 focus:outline-none"
      />
      <label htmlFor="description" className="font-bold text-sm">
        Task Description
      </label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full text-black border border-black p-1  rounded-md mb-4 focus:shadow-md focus:shadow-neutral-500 focus:outline-none"
      ></textarea>
      <div className="flex justify-between">
        {params.id ? (
          <button
            type="submit"
            className="bg-cyan-700 p-2 rounded-md hover:bg-cyan-800 font-bold"
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            className="bg-emerald-700 p-2 rounded-md hover:bg-emerald-800 font-bold"
          >
            Create
          </button>
        )}

        {params.id && (
          <button
            type="button"
            className="bg-red-700 p-2 rounded-md hover:bg-red-800 font-bold"
            onClick={async () => {
              const res = await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
              });
              const data = await res.json();
              router.replace("/");
              router.refresh();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
