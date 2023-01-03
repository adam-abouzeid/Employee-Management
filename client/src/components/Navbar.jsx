import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="header">
          <div className="logo">
            <Link to="/">EMI</Link>
        </div>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/employees">Employees</Link>
        </li> 
        </ul>
    </div>
  )
}

export default Navbar