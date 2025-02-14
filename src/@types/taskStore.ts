import { Task } from "./task";

export type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
}