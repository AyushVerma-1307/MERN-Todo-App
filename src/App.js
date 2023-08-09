import { Route, Routes } from "react-router-dom";
import ShowAllTodos from "./pages/ShowAllTodos";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowAllTodos />} />
        <Route path="/addTodo" element={<CreateTodo />} />
        <Route path="/updateTodo/:_id" element={<UpdateTodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
