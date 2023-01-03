import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa';
const Employee = ({name, id, age}) => {
  return (
    // I did this method of sending data via url, to avoid requesting data again on the employee Page /${name}/${age}
    <Link to={`/employees/${id}`}>
        <div className="emp-container">
            <FaUserCircle/>
            {name}
        </div>
    </Link>
  )
}

export default Employee