'use client'

import { useTasksStore } from "@/hooks/tasks";
import { Check, Trash } from "lucide-react";

export default function TasksComponent() {
  const { tasks, removeTask } = useTasksStore()

  const handleRemoveTask = (id: string | number) => {
    return removeTask(id)
  }

  return (
    <>
      {tasks.map(tasks => (
        <main className="flex justify-between mb-4 bg-container text-todoText px-5 py-7 rounded-lg cursor-pointer hover:bg-borderInput transition-colors delay-75" key={tasks.id}>
          <span>
            {tasks.text}
          </span>

          <div className="flex gap-5">
            <Check className="cursor-pointer hover:text-white transition-colors delay-75" />
            <Trash className="cursor-pointer hover:text-white transition-colors delay-75" onClick={() => handleRemoveTask(tasks.id)} />
          </div>
        </main>
      ))}
    </>
  );
}
