import './App.css'
import Heading from './components/Heading';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className={`wrapper py-32`}>
      <div className={`star py-6 px-4`}>
        <Heading />
        <TaskCreate />
        <TaskList/>
      </div>
    </div>
  );
}

export default App
