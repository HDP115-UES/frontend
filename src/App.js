import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavbarPage } from "./Components/Navbar/Navbar";
import {
  GetAccidents,
  HomePage,
  ReportAccident,
  ReportDetails,
  SignUp,
  UserHome,
} from "./Pages/index";
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
          <Route path="/getAccidents/:id" element={<ReportDetails />} />
          <Route path="/addReport" element={<ReportAccident />} />
          {/*  <Route path="/myReports" element={<UserReport />} >
          <Route path=":id" element={<ReportDetails />} />
          </Route> */}
          <Route path="/userHome" element={<UserHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
