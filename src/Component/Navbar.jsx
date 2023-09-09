import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useLocation } from "react-router-dom";
import "../AllCss/Navbar.css";

const Navbar = () => {
  const [openLink, setOpenLink] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setOpenLink(!openLink);
  };

  const handleLinkClick = (index) => {
    setOpenLink(false); // Close the mobile menu when a link is clicked
    setActiveLink(index);
  };

  const links = [
    { text: "Home", url: "/" },
    {text: "Menu", url:"/menu"},
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div className="navbar" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div className="leftside">
        <h2>
          <a href="/">LR</a>
        </h2>
      </div>
      <button onClick={toggleNavbar} className="toggle">
        <ReorderIcon />
      </button>
      <div className={`rightside ${openLink ? "open" : ""}`}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            onClick={() => handleLinkClick(index)}
            className={location.pathname === link.url ? "active" : ""}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;