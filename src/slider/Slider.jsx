import { useState } from "react";
import img from '../logo/M-A_Logo.svg'
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
    },
    {
      icon: <FaBook />,
      name: "Courses",
    },
    {
      icon: <FaChalkboardTeacher />,
      name: "Instructors",
    },
    {
      icon: <FaInfoCircle />,
      name: "About",
    },
    {
      icon: <FaEnvelope />,
      name: "Contact Us",
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
          <a href="#" className="menu-item" key={item.name}>
            <span className="menu-icon">{item.icon}</span>

            <span className="menu-name">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
