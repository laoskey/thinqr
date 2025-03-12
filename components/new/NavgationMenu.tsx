"use client";

import { useEffect, useState } from "react";

export default function NavgationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; // 关闭菜单
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // useEffect(() => {
  //   const links = document.querySelectorAll(".navigation__link");
  //   const checkbox = document.querySelector("#navi-toggle") as HTMLInputElement;

  //   links.forEach((link) => {
  //     link.addEventListener("click", () => {
  //       if (checkbox) {
  //         checkbox.checked = false;
  //       }
  //     });
  //   });
  // }, []);
  return (
    <div className="navigation md:hidden">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />

      <label
        htmlFor="navi-toggle"
        className="navigation__button"
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className={isMenuOpen ? "navigation__background" : "hidden"}>&nbsp;</div>

      <nav className={isMenuOpen ? "navigation__nav" : "hidden"}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#"
              className="navigation__link"
              onClick={closeMenu}
            >
              <span>01</span>About Me
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#projects"
              className="navigation__link"
              onClick={closeMenu}
            >
              <span>02</span>Projects
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#services"
              className="navigation__link"
              onClick={closeMenu}
            >
              <span>04</span>Services
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={closeMenu}
            >
              <span>05</span>Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
