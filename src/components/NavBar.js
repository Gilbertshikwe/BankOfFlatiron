import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    
    <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/add-transaction" className="nav-link">
          Add Transaction
        </Link>
      </li>
    </ul>
  </nav>
 
);
}

