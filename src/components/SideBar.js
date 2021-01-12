import React, { useState, useRef, useEffect } from "react";

import python from "../images/python.svg";
import express from "../images/express.svg";
import cSharp from "../images/cSharp.svg";
import cPlus from "../images/cPlus.svg";
import golang from "../images/golang.svg";

const SideBar = () => {
  const languages = [
    { id: 1, image: python, nick: "PYTHON", handle: "python" },
    { id: 2, image: express, nick: "EXPRESS", handle: "express" },
    { id: 3, image: cSharp, nick: "C#", handle: "c_sharp" },
    { id: 4, image: cPlus, nick: "C++", handle: "c_plus_plus" },
    { id: 5, image: golang, nick: "Go", handle: "golang" },
  ];
  const [follow, setFollow] = useState(true);
  const [side, setSide] = useState(false);
  let mql = window.matchMedia("(min-width: 825px)");
  const sideRef = useRef(null);

  const handleFollow = (e) => {
    setFollow(!follow);
    if (!follow) {
      e.target.style.background = "#1da1f2";
      e.target.style.color = "#fff";
      e.target.style.width = "110px";
      e.target.innerText = "Following";
    } else {
      e.target.style.background = "none";
      e.target.style.color = "#1da1f2";
      e.target.style.width = "100px";
      e.target.innerText = "Follow";
    }
  };

  const mScroll = (e) => {
    let offset = window.pageYOffset - 10;
    if (offset >= sideRef.current.offsetTop && mql.matches) {
      setSide(true);
    } else {
      setSide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", mScroll);
    return () => {
      window.removeEventListener("scroll", mScroll);
    };
  });
  return (
    <>
      <div className="sidebar" ref={sideRef}>
        <div className={side ? "side-fix" : ""}>
          <div className="sidebar-con">
            <div className="side-head">
              <h3>You might like</h3>
            </div>
            {languages.map((lang) => {
              const { id, image, nick, handle } = lang;
              return (
                <div className="langs" key={id}>
                  <div className="skills-img">
                    <img src={image} alt={handle} />
                  </div>
                  <div className="twit-handle">
                    <div className="side-like">
                      <h4>{nick}</h4>
                      <p>@{handle}</p>
                    </div>
                    <h4 className="follow-btn" onClick={handleFollow}>
                      Follow
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
