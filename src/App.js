import { HashRouter, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="*" element={<NotFound />}
          />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
