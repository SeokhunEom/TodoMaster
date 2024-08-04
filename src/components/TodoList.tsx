import TodoInfo from './TodoInfo';
import TodoItem, { TodoItemProps } from './TodoItem';

interface TodoListProps {
  todos: TodoItemProps[];
}

const TodoList = ({ todos }: TodoListProps) => {
  const todoCount = todos.length;
  const completedCount = todos.filter((todo) => todo.checked).length;

  return (
    <main className='flex flex-col gap-6'>
      <TodoInfo todoCount={todoCount} completedCount={completedCount} />
      <ul className='flex flex-col gap-3'>
        {todos.map((props) => {
          return (
            <li>
              <TodoItem key={props.id} {...props} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default TodoList;
