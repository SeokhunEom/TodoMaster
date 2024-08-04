import { TodoItemType } from '../store';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

export interface TodoItemProps extends TodoItemType {
  onCheckBoxClick: () => void;
  onDeleteButtonClick: () => void;
}

const TodoItem = ({
  checked,
  onCheckBoxClick,
  onDeleteButtonClick,
  todoTitle,
}: TodoItemProps) => {
  return (
    <div className='flex w-full gap-3 rounded-lg bg-gray-500 p-4'>
      <div className='shrink-0'>
        <CheckBox checked={checked} onClick={onCheckBoxClick} />
      </div>
      <div
        className={`${checked ? 'text-gray-300 line-through' : 'text-gray-100'}`}>
        {todoTitle}
      </div>
      <div className='ml-auto shrink-0'>
        <DeleteButton onClick={onDeleteButtonClick} />
      </div>
    </div>
  );
};

export default TodoItem;
