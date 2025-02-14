import { TaskStore } from "@/@types/taskStore";
import { create } from "zustand";

export const useTasksStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text: text }]
  }))
}))