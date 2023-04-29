import React, { useState } from "react";
import "./Header.scss";
import logo from "../../../assets/icons/SHOPPE.svg";
import searchButton from "../../../assets/icons/searching.svg";
import shopCart from "../../../assets/icons/shopping cart.svg";
import accountIcon from "../../../assets/icons/account icon.svg";
import burgerMenu from "../../../assets/icons/Group.svg";
import searchIcon from "../../../assets/icons/new search icon.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleHamburgerIsOpen = () => {
    setisOpen(!isOpen);
  };
  console.log("isOpen", isOpen);

  return (
    <header>
      <div className="headercontainer">
        <img className="logo" src={logo} alt="logo" />
        <div className="linkline">
          <nav>
            <Link to="product" className="nav-link">
              Shop
            </Link>
            <Link to="blog" className="nav-link">
              Blog
            </Link>
            <Link to="/" className="nav-link">
              Our Story
            </Link>
          </nav>
          <div className="line"></div>
          <div className="icons">
            <button>
              <img src={searchButton} />
            </button>
            <button>
              <img src={shopCart} />
            </button>
            <Link to="account" className="account">
              <img src={accountIcon} />
            </Link>
          </div>
        </div>
        <div className="buttons">
          <button className="mobile-only">
            <img src={shopCart} />
          </button>
          <button
            onClick={() => handleHamburgerIsOpen()}
            className="mobile-only"
          >
            <img src={burgerMenu} />
            <div className={isOpen ? "burgerMenuVisible" : "burgerMenuClosed"}>
              <nav>
                <Link to="product" className="nav-link">
                  Shop
                </Link>
                <Link to="blog" className="nav-link">
                  Blog
                </Link>
                <Link to="/" className="nav-link">
                  Our Story
                </Link>
                <Link to="account" className="nav-link">
                  Account
                </Link>
              </nav>
            </div>
          </button>
        </div>
      </div>
      <div className="input-group">
        <button className="mobile-only">
          <img src={searchIcon} />
        </button>
        <input type="text" className="mobile-only" placeholder="Search" />
      </div>
    </header>
  );
};
