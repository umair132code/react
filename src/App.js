import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Employees from './Components/Employees.js';
import EmployeeCreate from "./Components/EmployeeCreate.js";

function App() {
  const [currentComponent, setCurrentComponent] = useState("employees");
  const handleLinkClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="App">
      <Navbar onLinkClick={handleLinkClick} />
      {currentComponent === "employees" && <Employees onLinkClick={handleLinkClick} />}
      {currentComponent === "createEmployee" && <EmployeeCreate onLinkClick={handleLinkClick} />}
    </div>
  );
}

export default App;
