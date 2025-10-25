import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    const newEmployee = { id: employees.length + 1, ...employee };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home employees={employees} />} />
        <Route path="/employee-form" element={<EmployeeForm addEmployee={addEmployee} />} />
      </Routes>
    </Router>
  );
}

export default App;
