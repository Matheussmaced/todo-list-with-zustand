'use client'

import { useTasksStore } from "@/hooks/tasks";
import { FormEvent, useState } from "react";

export default function CreateTasks() {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask } = useTasksStore();

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    // simulando resposta de uma API
    setTimeout(() => {
      addTask(newTask)

      setNewTask('');
      console.log(tasks)
    }, 500)
  }

  return (
    <main className="md:w-[432] md:px-0 w-screen px-6">
      <form onSubmit={handleAddTask} className="flex flex-row gap-3">

        <input type="text" value={newTask} placeholder="Adicione uma nova tarefa" onChange={(e) => setNewTask(e.target.value)} className="bg-bg border border-borderInput ... flex-1 py-2 px-4 text-gray-400 rounded-md focus:outline-none" />
        <button type="submit" className=" bg-todoText px-3 py-0.5 rounded-md text-2xl text-center">
          +
        </button>

      </form>
    </main>
  );
}
