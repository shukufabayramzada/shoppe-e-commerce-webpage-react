import React, { useState } from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";

interface BurgerMenuProps {
  menuItems: { path: string; label: string }[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={handleToggle}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
