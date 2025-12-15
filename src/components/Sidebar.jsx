import './../css/sidebar.css'
import React from 'react'
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import {
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
  FaBook,
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCode
} from 'react-icons/fa';

import { MdArrowOutward } from "react-icons/md";
import profileImg from '../assets/profile.png'


function Sidebar({ activePage, setActivePage, theme, setTheme }) {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
    setRotation(prev => prev + 360);
  };

  const mainPages = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Works', icon: <FaBriefcase />, count: 2 },
    { name: 'Projects', icon: <FaProjectDiagram />, count: 4 },
    { name: 'Stories', icon: <FaBook />, count: 3 },
    { name: 'About', icon: <FaUser /> },
    { name: 'Contact', icon: <FaEnvelope /> },
  ];

  const socialPages = [
    { name: 'LinkedIn', icon: <FaLinkedin />, arrow: <MdArrowOutward />, href: "https://www.linkedin.com/in/naga-prabhu-n-800846264/" },
    { name: 'GitHub', icon: <FaGithub />, arrow: <MdArrowOutward /> , href: "https://github.com/NagaPrabhu-N/"},
    { name: 'LeetCode', icon: <FaCode />, arrow: <MdArrowOutward />, href: "https://leetcode.com/u/NagaPrabhuN/" },
  ];

  return (
    <aside className={`sidebar ${theme}`}>
      <div className="hero-section">
        <button
          className="theme-toggle"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleClick}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <img
          src={profileImg}
          alt="Nago Prabh N"
          className="profile-img"
        />

        <div className="hero-content">
          <h1 className="hero-title">Nago Prabh N</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        {/* TOP SECTION */}
        <div className="nav-top">
          {mainPages.map((page, index) => (
            <button
              key={index}
              onClick={() => setActivePage(page.name.toLowerCase())}
              className={`sidebar-btn ${activePage === page.name.toLowerCase() ? 'active' : ''}`}
            >
              <div className="btn-left">
                <span className="icon">{page.icon}</span>
                <span className="text">{page.name}</span>
              </div>

              <div className="btn-right">
                {page.count && <span className="count">{page.count}</span>}
              </div>
            </button>
          ))}
        </div>

        {/* MOBILE THEME TOGGLE */}
        <button
          className="mobile-theme-toggle"
          onClick={handleClick}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        {/* BOTTOM SECTION (desktop only) */}
        <div className="nav-bottom">
          {socialPages.map((page, index) => (
            <a href={page.href} target="_blank" rel="noreferrer" key={index}>
              <button key={index} className="sidebar-btn">
                <div className="btn-left">
                  <span className="icon">{page.icon}</span>
                  <span className="text">{page.name}</span>
                </div>
                <div className="btn-right">
                  <span className="arrow">{page.arrow}</span>
                </div>
              </button>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
