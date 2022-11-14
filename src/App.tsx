import './App.css';
import AddForm from './components/AddForm';
import List from './components/List';

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddForm />
      <List />
    </div>
  );
};

export default App
