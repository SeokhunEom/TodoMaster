import {
  ControlledAccordion,
  AccordionItem,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import PulseLoader from 'react-spinners/PulseLoader';
import { TodoItemType } from '../store';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';
import MoreButton from './MoreButton';

export interface TodoItemProps extends TodoItemType {
  onCheckBoxClick: () => void;
  onDeleteButtonClick: () => void;
}

const TodoItem = ({
  id,
  checked,
  onCheckBoxClick,
  onDeleteButtonClick,
  todoTitle,
  steps,
}: TodoItemProps) => {
  const providerValue = useAccordionProvider({
    transition: true,
    transitionTimeout: 250,
  });
  const { toggle } = providerValue;

  return (
    <div className='flex w-full gap-3 rounded-lg bg-gray-500 p-4'>
      <div className='shrink-0'>
        <CheckBox checked={checked} onClick={onCheckBoxClick} />
      </div>
      <ControlledAccordion className='w-full' providerValue={providerValue}>
        <AccordionItem
          itemKey={id}
          header={todoTitle}
          className={`${checked ? 'text-gray-300 line-through' : 'text-gray-100'} `}>
          {steps ? (
            <ul className='flex flex-col gap-2 py-4'>
              {steps.steps.map((step, index) => (
                <li key={index} className='text-gray-100'>
                  {step}
                </li>
              ))}
            </ul>
          ) : (
            <PulseLoader className='pt-4' color='#f2f2f2' size={10} />
          )}
        </AccordionItem>
      </ControlledAccordion>
      <div className='ml-auto flex shrink-0 gap-2'>
        <MoreButton onClick={() => toggle(id)} />
        <DeleteButton onClick={onDeleteButtonClick} />
      </div>
    </div>
  );
};

export default TodoItem;
