import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
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
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />}
          />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
