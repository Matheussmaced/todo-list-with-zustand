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
git clone https://github.com/seu-usuario/todo-list.git

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

---

## ✨ Melhorias Futuras

- [ ] Implementar drag-and-drop para reorganizar tarefas
- [ ] Adicionar categorias para tarefas

---

## 📜 Licença

Este projeto é de **uso livre** para estudo. Fique à vontade para modificar e melhorar. 😊
