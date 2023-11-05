import React from 'react';
import { FaUser } from 'react-icons/fa';
import "../Comps/Nav.css"; // Import your custom CSS file
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="App">
      <nav className="navbar navbar-custom bg-dark">
        <div className="d-flex w-100">
          <a className="navbar-brand me-auto brand" href="/">
            Faculty Dashboard
          </a>
          <Link  to='/profile'className="btn btn-sm btn-custom-nav" type="button">
            <FaUser className="icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
