import CreateButton from './components/CreateButton';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className='absolute z-10 h-56 w-full bg-gray-700'></div>
      <div className='h-full min-h-screen bg-gray-600 py-20'>
        <div className='relative z-10 mx-auto w-3/4 min-w-96'>
          <Header />
          <div className='flex gap-4 py-16'>
            <Input
              placeholder='할 일을 입력해주세요'
              value=''
              onChange={() => {}}
            />
            <CreateButton onClick={() => {}} />
          </div>
          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

const todos = [
  {
    id: 1,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '밥 먹기',
  },
  {
    id: 2,
    checked: true,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '커피 마시기',
  },
  {
    id: 3,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '코드 작성하기',
  },
  {
    id: 1,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '밥 먹기',
  },
  {
    id: 2,
    checked: true,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '커피 마시기',
  },
  {
    id: 3,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '코드 작성하기',
  },
  {
    id: 1,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '밥 먹기',
  },
  {
    id: 2,
    checked: true,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '커피 마시기',
  },
  {
    id: 3,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '코드 작성하기',
  },
  {
    id: 1,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '밥 먹기',
  },
  {
    id: 2,
    checked: true,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '커피 마시기',
  },
  {
    id: 3,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '코드 작성하기',
  },
  {
    id: 1,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '밥 먹기',
  },
  {
    id: 2,
    checked: true,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '커피 마시기',
  },
  {
    id: 3,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '코드 작성하기',
  },
  {
    id: 1,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '밥 먹기',
  },
  {
    id: 2,
    checked: true,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '커피 마시기',
  },
  {
    id: 3,
    checked: false,
    onCheckBoxClick: () => {},
    onDeleteButtonClick: () => {},
    todoTitle: '코드 작성하기',
  },
];

export default App;
