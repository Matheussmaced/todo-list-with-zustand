'use client'

import { useTasksStore } from "@/hooks/tasks";
import { Check, Trash } from "lucide-react";

export default function TasksComponent() {
  const { tasks, removeTask, changeCompleted } = useTasksStore()

  const handleRemoveTask = (id: string | number) => {
    return removeTask(id)
  }

  const handleCompletedTask = (id: string | number) => {
    return changeCompleted(id)
  }

  return (
    <>
      {tasks.map(task => (
        <main className={
          `flex justify-between mb-4 px-5 py-7 rounded-lg cursor-pointer transition-colors delay-75"
            ${task.completed ? "bg-container hover:bg-borderInput line-through italic text-gray-500 border border-green-300"
            : "bg-container text-todoText hover:bg-borderInput border border-transparent"}`} key={task.id}>
          <span>
            {task.text}
          </span>

          <div className="flex gap-5">
            <Check className="cursor-pointer hover:text-white transition-colors delay-75" onClick={() => handleCompletedTask(task.id)} />
            <Trash className="cursor-pointer hover:text-white transition-colors delay-75" onClick={() => handleRemoveTask(task.id)} />
          </div>
        </main>
      ))}
    </>
  );
}
