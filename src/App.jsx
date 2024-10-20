import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
    const response = await axios.get("https://employee-server-kgkg.onrender.com/allEmployees");
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const clearSelection = () => setSelectedEmployee(null);

  return (
   <div className="bg-dark" style={{height:'100vh',width:'100vw',padding:"0",margin:'0'}}>
      <div className="container d-flex flex-column align-items-center pt-5">
        <h1 className="text-center text-success">Employee Management</h1>
        <EmployeeForm fetchEmployees={fetchEmployees} selectedEmployee={selectedEmployee} clearSelection={clearSelection} />
        <EmployeeList employees={employees} fetchEmployees={fetchEmployees} setSelectedEmployee={setSelectedEmployee} />
      </div>
   </div>
  );
};

export default App;
