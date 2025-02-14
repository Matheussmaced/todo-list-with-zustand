import { Task } from "./task";

export type TaskStore = {
  tasks: Task[];
  changeCompleted: (id: string | number) => void;
  addTask: (text: string) => void;
  removeTask: (id: string | number) => void
}