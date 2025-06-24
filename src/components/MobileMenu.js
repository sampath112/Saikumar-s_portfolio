import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ setMenuOpen }) => {
  return (
    <div className="absolute top-14 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 p-4">
      <Link to="/" onClick={() => setMenuOpen(false)}>Profile</Link>
      <Link to="/work-experience" onClick={() => setMenuOpen(false)}>Work Experience</Link>
      <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
      <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
    </div>
  );
};

export default MobileMenu;
