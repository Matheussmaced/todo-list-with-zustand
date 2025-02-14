import { TaskStore } from "@/@types/taskStore";
import { create } from "zustand";

export const useTasksStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text: text }]
  })),
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  }))
}))