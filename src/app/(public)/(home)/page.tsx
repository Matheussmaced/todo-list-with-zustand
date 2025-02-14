import CreateTasks from "@/components/createTasks";
import TasksComponent from "@/components/tasksComponent";

export default function Home() {
  return (
    <main>
      <CreateTasks />
      <TasksComponent />
    </main>
  );
}
