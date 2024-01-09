"use client"

import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();

  // Crear un objeto de opciones con el formato deseado
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return (
    <div
      onClick={() => {
        router.push("/tasks/edit/" + task.id);
      }}
      className="p-3 bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer rounded-lg px-5"
    >
      <h3 className="text-2xl font-bold my-1">{task.title}</h3>
      <p className="mb-3">{task.description}</p>
      <p className="mb-3 text-neutral-400">
        {new Date(task.createdAt).toLocaleDateString("es", options)}
      </p>
    </div>
  );
}

export default TaskCard;
