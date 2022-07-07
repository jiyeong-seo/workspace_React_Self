import "./App.css";
/** react-router-dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main";
import Drink from "./components/pages/drink";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/drink" element={<Drink />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
