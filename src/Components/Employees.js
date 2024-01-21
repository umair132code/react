import React, { useState, useEffect } from "react";

const Employees = ({ onLinkClick }) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = {
          ApiUser: 'umair',
          token: 'umair@132',
        };

        const response = await fetch('http://localhost:8080/laravel-projects/reactapi/public/api/get', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const dataFromApi = await response.json();
        setEmployeeData(dataFromApi);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderTableRows = () => {
    return employeeData.map((employee) => (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.fullname}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
      </tr>
    ));
  };

  return (
    <div className="m-5">
      <div className="d-flex justify-content-between my-3">
        <h3>Employee List</h3>
        <button className="btn btn-sm btn-primary" onClick={() => onLinkClick("createEmployee")}>Create New</button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
