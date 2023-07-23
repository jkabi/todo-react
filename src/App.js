import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskListContext from "./context/TaskListContext";
import Header from "./component/Header";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
function App() {
  return (
    <div className=" bg-dark">
      <TaskListContext>
        <Header />
        <TaskForm />
        <TaskList />
      </TaskListContext>
    </div>
  );
}

export default App;
