import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

export interface TodoItemType {
  id: string;
  checked: boolean;
  todoTitle: string;
  steps?: Step;
}

export interface Step {
  steps: string[];
}

interface TodoStore {
  todos: TodoItemType[];
  addTodo: (todo: TodoItemType) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  addStep: (id: string, step: Step) => void;
}

const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo
            ),
          })),
        removeTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
        addStep: (id, step) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, steps: step } : todo
            ),
          })),
      }),
      {
        name: 'todo-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useTodoStore;
