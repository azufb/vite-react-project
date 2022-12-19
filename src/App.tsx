import AddForm from './components/AddForm';
import NotCompletedList from './components/NotCompletedList';
import CompletedList from './components/CompletedList';
import Stats from './components/Stats';
import { RecoilRoot } from 'recoil';
import Sample from './components/Sample';
import { contentsArea, title, tasksDisplayArea } from './styles/app';
import List from './components/List';

const App = () => {
  return (
    <RecoilRoot>
      {/*<Sample />*/}
      <div css={contentsArea}>
        <h1 css={title}>ToDoリスト</h1>
        <AddForm />
        <div css={tasksDisplayArea}>
          {/*<List />*/}
          <NotCompletedList />
          <CompletedList />
        </div>
        {/*<Stats />*/}
      </div>
    </RecoilRoot>
  );
};

export default App
