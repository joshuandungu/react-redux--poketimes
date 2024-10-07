import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // Removed setTimeout to avoid unwanted redirection
  return (
    <div className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Poke 'Times</Link> {/* Changed to Link for navigation */}
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
