import CreateTasks from "@/components/createTasks";
import TasksComponent from "@/components/tasksComponent";

export default function Home() {
  return (
    <main className="bg-bg h-screen text-white flex flex-col justify-center">
      <div className="mx-auto flex flex-col justify-center">
        <CreateTasks />
        <TasksComponent />
      </div>
    </main>
  );
}
