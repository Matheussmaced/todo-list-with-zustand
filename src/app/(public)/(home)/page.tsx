'use client'

import CreateTasks from "@/components/createTasks";
import TasksComponent from "@/components/tasksComponent";
import { useTasksStore } from "@/hooks/tasks";

export default function Home() {
  const { tasks } = useTasksStore();

  return (
    <main className="bg-bg h-screen text-white flex flex-col justify-center">
      <div className="mx-auto flex flex-col justify-center">
        <CreateTasks />
        {tasks.length === 0 ? <span className="mt-16 mb-5 text-gray-300">Sem tarefas para fazer</span> :
          <span className="mt-16 mb-5 text-gray-300">{tasks.length} - Tarefas para fazer </span>
        }
        <TasksComponent />
      </div>
    </main>
  );
}
