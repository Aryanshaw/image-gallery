import React, { useState } from "react";
import "./Navbar.css";
import SearchInput from "../SearchComponent/SearchInput";
import ModeBtn from "../ModeToggleBtn/ModeBtn";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-left-container">
        <h1 className="navbar-title">Image Gallery</h1>
      </div>
      <div className="search-icon">
        <AiOutlineSearch size={22}/>
      </div>
      <div className="menu" onClick={() => toggleMenu()}>
        &#9776;
      </div>
      <ul className={isMenuOpen ? "open" : "navbar-right-container"}>
        <li>
          <div className="search-input">
            <SearchInput width="300px" />
          </div>
        </li>
        <li>
          <h4 className="navbar-item">Explore</h4>
        </li>
        <li>
          <h4 className="navbar-item">Collection</h4>
        </li>
        <li>
          <h4 className="navbar-item">Community</h4>
        </li>
        <li>
          <ModeBtn />
        </li>
        {/* </div> */}
      </ul>
    </nav>
    // </div>
  );
};

export default Navbar;
