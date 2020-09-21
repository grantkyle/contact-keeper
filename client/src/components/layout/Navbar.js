import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const Navbar = ({ title, icon }) => {
  return (
    <div>
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "../assets/images/icons/phone-book.svg",
};
export default Navbar;
