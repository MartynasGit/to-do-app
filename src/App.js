import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/toDoList" element={<ToDoList/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<ToDoList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
