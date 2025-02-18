# 📌 To-Do List com Zustand

Este é um projeto simples de **To-Do List** desenvolvido para estudar o gerenciamento de estado global com **Zustand**. O objetivo é permitir que o usuário **crie, conclua e exclua tarefas**.

---

## 🖼️ Imagens do Projeto

### 📌 Tela Inicial

![Tela Inicial](/src/public/images/tela-inicial.jpg)

### ✅ Tarefa Concluída

![Tarefa Concluída](/src/public/images/tarefa-concluida.jpg)

---

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React
- **TypeScript** - Tipagem estática para melhor segurança do código
- **Zustand** - Gerenciamento de estado global
- **Tailwind** - Estilização dos componentes
- **Lucide-React** - Ícones visuais para interação

---

## 📌 Funcionalidades

```markdown
✔ Criar novas tarefas 
✔ Excluir tarefas 
✔ Marcar tarefas como concluídas 
```

---

## 📦 Instalação

```bash
# Clone o repositório
git clone  https://github.com/Matheussmaced/todo-list-with-zustand

# Acesse a pasta do projeto
cd todo-list

# Instale as dependências
npm install
```

---

## ▶ Como Rodar o Projeto

```bash
npm run dev
```

Acesse **<http://localhost:3000>** no navegador.

---

## 🔧 Como Funciona

```typescript
import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [],
  completed: false,

  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
  })),

  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  })),

  changeCompleted: (id) => set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  })),
}));
```

## 🧪 Testes

Este projeto inclui testes para garantir que as funcionalidades essenciais funcionem corretamente. Abaixo estão alguns exemplos de testes implementados:

---

### 📌 Testando o Componente `Home`

Testa se o componente principal `Home` renderiza corretamente.

```typescript
import Home from "@/app/(public)/(home)/page";
import { render } from "@testing-library/react";

describe('should render Home', () => {
  it('should render list item', () => {
    render(<Home />);
  });
});
```

```typescript
import CreateTasks from "@/components/createTasks";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('CreateTasks Component', () => {
  it("Renders home page", () => {
    render(<CreateTasks />);
  });

  it('should br able to add new item to the list', () => {
    const { getByText, getByPlaceholderText } = render(<CreateTasks />);

    const addButton = getByText('+');
    const inputElement = getByPlaceholderText('Adicione uma nova tarefa');

    userEvent.type(inputElement, 'Nova tarefa');
    userEvent.click(addButton);
  });
});
```

```typescript
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

```

---

## ✨ Melhorias Futuras

- [ ] Implementar drag-and-drop para reorganizar tarefas
- [ ] Adicionar categorias para tarefas

---

## 📜 Licença

Este projeto é de **uso livre** para estudo. Fique à vontade para modificar e melhorar. 😊
