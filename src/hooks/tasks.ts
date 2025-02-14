import { TaskStore } from "@/@types/taskStore";
import { create } from "zustand";

export const useTasksStore = create<TaskStore>((set) => ({
  tasks: [],
  completed: false,

  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text: text, completed: false }]
  })),
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  changeCompleted: (id: string | number) => set((state) => ({
    tasks: state.tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task),
  }))
}))