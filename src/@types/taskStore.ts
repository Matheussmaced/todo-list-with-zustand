import { Task } from "./task";

export type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: string | number) => void
}