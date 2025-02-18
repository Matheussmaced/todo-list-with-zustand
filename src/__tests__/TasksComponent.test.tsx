import CreateTasks from "@/components/createTasks";
import TasksComponent from "@/components/tasksComponent";
import { useTasksStore } from "@/hooks/tasks";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock do Zustand com Jest
jest.mock("../hooks/tasks", () => ({
  useTasksStore: jest.fn(), // Mock da função useTasksStore
}));

describe('TasksComponent', () => {
  it('should be able to add a new item to the list and if the new task is being rendered in the component', async () => {
    const addTaskMock = jest.fn();

    // Simula o estado retornado pelo hook useTasksStore
    (useTasksStore as unknown as jest.Mock).mockReturnValue({
      tasks: [
        { id: '1', text: 'Nova tarefa' },
        { id: '2', text: 'Outra tarefa' },
      ],
      completed: false,
      addTask: addTaskMock,    // Função mockada para adicionar tarefas
    });

    const { findByText } = render(<TasksComponent />);

    // Verifica se a tarefa inicial foi renderizada

    expect(await findByText('Nova tarefa')).toBeInTheDocument();

    // Simula a adição de uma nova tarefa no componente CreateTasks

    const { getByText, getByPlaceholderText } = render(<CreateTasks />);
    userEvent.type(getByPlaceholderText('Adicione uma nova tarefa'), 'Outra tarefa');
    userEvent.click(getByText('+'));

    // Verifica se a nova tarefa foi renderizada no TasksComponent

    expect(await findByText('Outra tarefa')).toBeInTheDocument();

    // Verifica se a função addTask foi chamada com o valor correto

    await waitFor(() => {
      expect(screen.getByText('Outra tarefa')).toBeInTheDocument();
      expect(screen.getByText('Nova tarefa')).toBeInTheDocument();
    });
  });
});
