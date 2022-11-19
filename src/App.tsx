import AddForm from './components/AddForm';
import List from './components/List';
import NotCompletedList from './components/NotCompletedList';
import CompletedList from './components/CompletedList';
import Stats from './components/Stats';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddForm />
      <List />
      <NotCompletedList />
      <CompletedList />
      <Stats />
    </div>
  );
};

export default App
