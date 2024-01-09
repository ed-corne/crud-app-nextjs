//get all task from the backend
export const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json();
  return data;
};

// get one task from the backend
export const getTask = async (id) => {
    const res = await fetch(`/api/tasks/${id}`,)
    const data = await res.json();
    return data;
  };

// create a new task using the backend
export const createTask = async (title, description) => {
  const res = await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

//update a task using the backend
export const updateTask = async (title, description, id) => {
  const res = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

