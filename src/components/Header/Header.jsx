import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="logo">raghu.app</Link>
        </div>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        <div className="nav-auth">
          <button 
            onClick={() => navigate("/authform")} 
            className="auth-link"
          >
            Login/Signup
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;