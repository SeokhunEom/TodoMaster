import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useTodoStore from './store';
import CreateButton from './components/CreateButton';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const { todos, addTodo } = useTodoStore((state) => state);
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const createButtonClick = () => {
    if (!value) {
      return;
    }
    addTodo({
      id: uuidv4(),
      checked: false,
      todoTitle: value,
    });
    setValue('');
  };

  return (
    <>
      <div className='absolute z-10 h-56 w-full bg-gray-700'></div>
      <div className='h-full min-h-screen bg-gray-600 py-20'>
        <div className='relative z-10 mx-auto w-3/4 min-w-96'>
          <Header />
          <div className='flex gap-4 py-16'>
            <Input
              placeholder='할 일을 입력해주세요'
              value={value}
              onChange={onInputChange}
              onEnter={createButtonClick}
            />
            <CreateButton onClick={createButtonClick} />
          </div>
          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
