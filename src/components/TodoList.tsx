import type { SVGProps } from 'react';
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
      {todoCount > 0 ? (
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
      ) : (
        <div className='flex flex-col items-center justify-center gap-4 px-6 py-16 text-gray-300'>
          <RiTodoLine width='6em' height='6em' className='text-gray-400' />
          <div>아직 추가된 할 일이 없습니다.</div>
          <div>할 일을 추가해주세요.</div>
        </div>
      )}
    </main>
  );
};

export function RiTodoLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        d='M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z'></path>
    </svg>
  );
}

export default TodoList;
