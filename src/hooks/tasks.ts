import { TaskStore } from "@/@types/taskStore";
import { create } from "zustand";

export const useTasksStore = create<TaskStore>((set) => ({
  tasks: [],
}))