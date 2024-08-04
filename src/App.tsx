import CreateButton from './components/CreateButton';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <Input placeholder='할 일 추가' value={'hi'} onChange={() => {}} />
      <CreateButton onClick={() => {}} />
      <TodoList todos={todos} />
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
];

export default App;
