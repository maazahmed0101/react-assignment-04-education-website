import { useState } from "react";
import img from "../logo/M-A_Logo.svg";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaBook,
  FaChalkboardTeacher,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

import "./Slider.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      icon: <FaHome />,
      name: "Home",
      path: "/",
    },
    {
      icon: <FaBook />,
      name: "Courses",
      path: "/cources",
    },
    {
      icon: <FaChalkboardTeacher />,
      name: "Instructors",
      path: "/instraction",
    },
    {
      icon: <FaInfoCircle />,
      name: "About",
      path: "/about",
    },
    {
      icon: <FaEnvelope />,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* TOP */}
      <div className="sidebar-top">
        <img src={img} alt="Academy Logo" className="sidebar-logo img-fluid" />

        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `menu-item ${isActive ? "active" : ""}`
            }
            key={item.name}
          >
            <span className="menu-icon">{item.icon}</span>

            <span className="menu-name">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
