import AddForm from './components/AddForm';
import List from './components/List';
import NotCompletedList from './components/NotCompletedList';
import CompletedList from './components/CompletedList';
import Stats from './components/Stats';
import { RecoilRoot } from 'recoil';
import Sample from './components/Sample';

const App = () => {
  return (
    <RecoilRoot>
      {/*<Sample />*/}
      <div>
        <h1>Todo List</h1>
        <AddForm />
        {/*<List />*/}
        <NotCompletedList />
        <CompletedList />
        {/*<Stats />*/}
      </div>
    </RecoilRoot>
  );
};

export default App
