import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavbarPage } from "./Components/Navbar/Navbar";
import { GetAccidents, HomePage, ReportAccident, SignUp } from "./Pages/index";
import { Login } from "./Pages/Login/login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/getAccidents" element={<GetAccidents />} />
          <Route path="/addReport" element={<ReportAccident />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
