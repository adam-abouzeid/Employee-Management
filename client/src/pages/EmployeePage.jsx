import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const API_BASE = "http://localhost:5000/api/employees/";
const EmployeePage = () => {
  const navigate = useNavigate();
  const employeeId = useParams().id;
  const [employeeInfo, setEmployeeInfo] = useState({
    name: "",
    age: 0,
  });
  const [editInfo, setEditInfo] = useState({
    name: "",
    age: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const getSingleEmployee = () => {
    fetch(API_BASE + employeeId)
      .then((res) => res.json())
      .then((data) => {
        setEmployeeInfo(data);
        setEditInfo(data);
      })
      .catch((err) => console.error("Error: ", err));
  };

  const DeleteEmployee = async () => {
    await fetch(API_BASE + employeeId, { method: "DELETE" });

    return navigate("/employees");
  };

  const onChange = (e) => {
    setEditInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault()
    const settings = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editInfo.name, age: editInfo.age }),
    };
    fetch(API_BASE + employeeId, settings)
      .then((response) => response.json())
      .then((data) => setEmployeeInfo(data));
      togglePopup()
  };

  useEffect(() => {
    getSingleEmployee();
  }, []);
  return (
    <div className="employee-page">
      <div className="employee-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvDNJYSpraxKkrwZgZ7ANIEFG6FYKlvdmujdzOYE&s" />
      </div>
      {
        <div className="employee-data">
          <h1>name: {employeeInfo.name}</h1>
          <h1>age: {employeeInfo.age}</h1>
        </div>
      }
      {isOpen && (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={togglePopup}>
              x
            </span>
            <form onSubmit={onSubmit} className="form-add" style={{"display":"flex", "flexDirection":"row"}}>
            <div className="header-side"><h1>Edit Employee</h1></div>
              <div className="section-edit"> <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                value={editInfo.name}
                placeholder="Enter employee name"
                onChange={onChange}
              />
              <input
                type="name"
                className="form-control"
                id="name"
                name="age"
                value={editInfo.age}
                placeholder="Enter employee name"
                onChange={onChange}
              />

              <button type="submit" className="edit-btn">Submit Change</button></div>
             
            </form>
          </div>
        </div>
      )}
      <div className="buttons">
        <div className="delete-employee" onClick={DeleteEmployee}>
          Delete
        </div>
        <div className="edit-employee" onClick={togglePopup}>
          Edit
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
