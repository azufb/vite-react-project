import './App.css';
import AddForm from './components/AddForm';
import List from './components/List';
import CompletedList from './components/CompletedList';

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddForm />
      <List />
      <CompletedList />
    </div>
  );
};

export default App
