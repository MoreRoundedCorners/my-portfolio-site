import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHome,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

const gradients = [
  "linear-gradient(to right, blue, pink)",
  "linear-gradient(to left, pink, purple)",
  "linear-gradient(to right, blue, pink)",
  "linear-gradient(to left, pink, purple)",
];

const navItems = [
  {
    image: (
      <FontAwesomeIcon
        icon={faHome}
        style={{
          color: "#000000",
          height: "30px",
          paddingTop: "10px",
          paddingLeft: "20px",
          objectFit: "contain",
        }}
      />
    ),
    link: "/",
  },
  {
    image: (
      <FontAwesomeIcon
        icon={faAddressCard}
        style={{
          color: "#000000",
          height: "30px",
          paddingTop: "10px",
          paddingLeft: "20px",
          objectFit: "contain",
        }}
      />
    ),
    link: "/about",
  },
  {
    image: (
      <FontAwesomeIcon
        icon={faCode}
        style={{
          color: "#000000",
          height: "30px",
          paddingTop: "10px",
          paddingLeft: "20px",
          objectFit: "contain",
        }}
      />
    ),
    link: "/projects",
  },
  {
    image: (
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{
          color: "#000000",
          height: "30px",
          paddingTop: "10px",
          paddingLeft: "20px",
          objectFit: "contain",
        }}
      />
    ),
    link: "/contact",
  },
];

const Nav = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "10vw",
        overflow: "hidden",
        transform: "rotate(-0deg)",
        transformOrigin: "top left",
        position: "fixed",
      }}
    >
      {gradients.map((gradient, index) => (
        <Link
          to={navItems[index].link}
          style={{
            textDecoration: "none",
          }}
          key={index}
        >
          <div
            className={`hover:p-2 delay-100 flex flex-col items-center ${styles.navItem}`} // Update this line
            style={{
              height: `${100 / gradients.length}vh`,
              width: "10vw",
              background: gradient,
              transformOrigin: "top left",
            }}
          >
            <p className="text-center justify-between mx-auto mt-10 items-center font-semibold text-black">
              {navItems[index].image}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
