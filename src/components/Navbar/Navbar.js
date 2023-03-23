import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
  <div className="container-fluid">
  <a className="navbar-brand head" href="#">Assignment</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link head" href="#">Signup</Link>
        </li>
        <li className="nav-item">
        <Link to='/signin' className="nav-link head" href="#">Signin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar