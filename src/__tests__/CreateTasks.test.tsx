import CreateTasks from "@/components/createTasks";
import { useTasksStore } from "@/hooks/tasks";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("@/hook/tasks", () => ({
  useTasksStore: jest.fn(),
}));

it("Renders home page", () => {
  render(<CreateTasks />)
})

describe("CreateTasks Component", () => {
  it("Should add a new task when the form is submitted", () => {
    const addTaskMock = jest.fn();

    // mockar o retorno do hook useTasksStore
    useTasksStore.mockReturnValue(() => ({
      tasks: [],
      addTask: addTaskMock,
      completed: false,
    }));

    render(<CreateTasks />);

    const inputElement = screen.getByPlaceholderText("Adicione uma nova tarefa") as HTMLInputElement;
    const buttonElement = screen.getByText("+");

    // digitação
    fireEvent.change(inputElement, { target: { value: "Nova tarefa" } });
    fireEvent.click(buttonElement);

    expect(addTaskMock).toHaveBeenCalledWith("Nova tarefa");

    expect(inputElement.value).toBe("");
  })
})