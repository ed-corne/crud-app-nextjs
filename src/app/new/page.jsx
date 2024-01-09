"use client";
import BtnBack from "@/components/BtnBack";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { createTask, getTask, updateTask } from "@/services/tasksServices";

function NewTaskPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getTaskData = async () => {
    if (params.id) {
      const data = await getTask(params.id);
      setTitle(data.title);
      setDescription(data.description);
    }
  };

  useEffect(() => {
    getTaskData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const data = await updateTask(title, description, params.id);
      console.log(data);
    } else {
      const data = await createTask(title, description);
      console.log(data);
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-around items-center h-screen flex-col ">
      <Form
        params={params}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      <BtnBack />
    </div>
  );
}

export default NewTaskPage;
