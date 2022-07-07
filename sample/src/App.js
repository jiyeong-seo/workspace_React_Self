import "./App.css";
/** react-router-dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main";
import Menu from "./components/pages/menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
