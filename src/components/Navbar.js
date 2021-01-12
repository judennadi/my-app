import React, { useState, useEffect, useRef } from "react";
import profile from "../images/profile.jpg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState(false);
  let mql = window.matchMedia("(min-width: 825px)");
  const navRef = useRef(null);
  // console.log(navRef);

  const myScroll = (e) => {
    let offset = window.pageYOffset - 5;
    if (offset >= navRef.current.offsetTop && mql.matches) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", myScroll);
    return () => {
      window.removeEventListener("scroll", myScroll);
    };
  });
  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className={nav ? "nav-fix" : ""}>
          <div
            className={active ? "nav-toggle tog-active" : "nav-toggle"}
            onClick={() => setActive(!active)}>
            <img src={profile} alt="" />
          </div>
          <div
            className={active ? "nav-menu nav-menu-act" : "nav-menu"}
            id="nav__menu">
            <div
              className="nav-toggle-box2"
              id="nav__toggle"
              onClick={() => setActive(!active)}>
              <div className="nav-toggle2"></div>
            </div>
            <div className="nav-user">
              <div className="nav-img">
                <a href="#about" onClick={() => setActive(!active)}>
                  <img src={profile} alt="" />
                </a>
              </div>
              <div className="user-handle">
                <h2>Jude</h2>
                <p>@No_lose_focus</p>
                <p className="followers-p">
                  <span className="followers">293</span> Following
                  <span className="followers"> 500K</span> Followers
                </p>
              </div>
            </div>
            <ul className="nav-list">
              <li>
                <a href="#home" onClick={() => setActive(!active)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setActive(!active)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setActive(!active)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setActive(!active)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setActive(!active)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
