export default function CreateTasks() {
  return (
    <main className="w-[432]">
      <form action="" className="flex flex-row gap-3">
        <input type="text" placeholder="Adicione uma nova tarefa" className="bg-bg border border-borderInput ... flex-1 py-2 px-4 text-gray-400 rounded-md focus:outline-none" />
        <button type="submit" className=" bg-todoText px-3 py-0.5 rounded-md text-2xl text-center">
          +
        </button>
      </form>
    </main>
  );
}
