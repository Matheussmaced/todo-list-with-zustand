import { Check, Trash } from "lucide-react";

export default function TasksComponent() {
  return (
    <main className="flex justify-between bg-container text-todoText px-5 py-7 rounded-lg cursor-pointer hover:bg-borderInput transition-colors delay-75">
      <span>
        To study React fundamentals
      </span>

      <div className="flex gap-5">
        <Check className="cursor-pointer hover:text-white transition-colors delay-75" />
        <Trash className="cursor-pointer hover:text-white transition-colors delay-75" />
      </div>
    </main>
  );
}
