import TaskCard from "@/components/TaskCard";
import NavBar from "@/components/NavBar";
import { loadTasks } from "@/services/tasksServices";

export const dynamic = 'force-dynamic';

async function Home() {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <NavBar/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 mx-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default Home;
