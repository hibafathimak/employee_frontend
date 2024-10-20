import React from "react";
import axios from "axios";

const EmployeeList = ({ employees, fetchEmployees, setSelectedEmployee }) => {
  const handleDelete = async (id) => {
    await axios.delete(`https://employee-server-kgkg.onrender.com/allEmployees/${id}`);
    fetchEmployees();
  };

  return (
    <table className="table table-bordered" style={{width:'800px'}}>
      <thead className="">
        <tr >
          <th className="text-success">ID</th>
          <th className="text-success">Username</th>
          <th className="text-success">Email</th>
          <th className="text-success">Status</th>
          <th className="text-success">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.username}</td>
            <td>{employee.email}</td>
            <td>{employee.status}</td>
            <td>
              <button className="btn btn-secondary text-light mx-5" onClick={() => setSelectedEmployee(employee)}>Edit</button>
              <button className="btn btn-dark" onClick={() => handleDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
