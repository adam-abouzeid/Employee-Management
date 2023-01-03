import e from "cors";
import { useEffect, useState } from "react";
import Employee from "../components/Employee";
const API_BASE = "http://localhost:5000/api/employees/";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const { name, age } = formData;

  const getEmployees = () => {
    fetch(API_BASE + "/")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error: ", err));
  };
  useEffect(() => {
    getEmployees();
  }, [employees]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setFormData({
      name: "",
      age: "",
    });
    setEmployees([...employees, data]);

    togglePopup();
  };

  return (
    <div className="employees-container">
      <button className="emp-container btn-add" onClick={togglePopup}>
        Add Emp.
      </button>
      {employees.map((emp, idx) => (
        <Employee key={idx} id={emp._id} name={emp.name} age={emp.age} />
      ))}
      {isOpen && (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={togglePopup}>
              x
            </span>
            <h1>Add Employee</h1>
            <form className="form-add" onSubmit={onSubmit}>
              <p>Name</p>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Enter employee name"
                onChange={onChange}
              />
              <p>Age</p>
              <input
                type="age"
                className="form-control"
                id="age"
                name="age"
                value={age}
                placeholder="Enter employee age"
                onChange={onChange}
              />
              <button type="submit" className="btn-add-employee">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
