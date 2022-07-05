import logo from "./logo.svg";
import "./App.css";
/** react-router-dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main";
import Login from "./components/pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
