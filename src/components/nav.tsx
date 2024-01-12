import { useRef } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const ulRef = useRef<HTMLUListElement>(null);

  const activeElement = () => {
    console.log(ulRef);
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="list-element">
            <a href="#info">About</a>
          </li>
          <li className="list-element">
            <a href="#experience">Experience</a>
          </li>
          <li className="list-element">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-element">
            <a href="#skills">Skills</a>
          </li>
          <li className="list-element">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
