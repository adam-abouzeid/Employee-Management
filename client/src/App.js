import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeePage from "./pages/EmployeePage";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
function App() {
  return (
    <div className="layout">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/employees/:id" element={<EmployeePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
