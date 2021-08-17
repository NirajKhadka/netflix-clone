import React, { useEffect, useState } from "react";
import "./Nav.css";
const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__show"}`}>
      <img
        className="netflix__logo"
        src="http://pngimg.com/uploads/netflix/netflix_PNG31.png"
        alt="Navbar logo"
      />
      <img
        className="smiley_logo"
        src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
        alt="Navbar logo"
      />
    </div>
  );
};

export default Navbar;
