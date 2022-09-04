import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task-list';
import GreetingStyled from './components/pure/greeting-styled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        { /* Componente de listado de tareas */ }
        <TaskListComponent></TaskListComponent>
        {/* <GreetingStyled name={ 'Diego' }></GreetingStyled> */}
      {/* </header> */}
    </div>
  );
}

export default App;
