import useTodoStore, { TodoItemType } from '../store';
import TodoInfo from './TodoInfo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: TodoItemType[];
}

const TodoList = ({ todos }: TodoListProps) => {
  const { toggleTodo, removeTodo } = useTodoStore((state) => state);

  const todoCount = todos.length;
  const completedCount = todos.filter((todo) => todo.checked).length;

  return (
    <main className='flex flex-col gap-6'>
      <TodoInfo todoCount={todoCount} completedCount={completedCount} />
      <ul className='flex flex-col gap-3'>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                {...todo}
                onCheckBoxClick={() => {
                  toggleTodo(todo.id);
                }}
                onDeleteButtonClick={() => {
                  removeTodo(todo.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default TodoList;
