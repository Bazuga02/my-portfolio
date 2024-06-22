import React from "react";
import styles from "./HeaderStyles.module.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${styles.light} `}>
    <h1 className=" lg:block hidden  text-2xl" >Portfolio</h1>
      <nav className={styles.navbar}>
        <ul className=" flex   bg-blue-500 rounded-md p-3 lg:px-30 lg:flex-row flex-col w-80  justify-between lg:w-[50vw] gap-4  m-3 ">
          <li
            onClick={() => scrollToSection("hero")}
            className= " font-semibold cursor-pointer border-r p-1  px-1 lg:px-10 hover:scale-105 duration-150 transition-all   "
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className= " font-semibold cursor-pointer border-r p-1 px-1 lg:px-10 hover:scale-105 duration-150 transition-all"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("education")}
            className= " font-semibold cursor-pointer border-r p-1  px-1 lg:px-10 hover:scale-105 duration-150 transition-all"
          >
            Education
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className= " font-semibold cursor-pointer border-r p-1 px-1 lg:px-10 hover:scale-105 duration-150 transition-all"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className= " font-semibold cursor-pointer p-1 px-1 lg:px-10 hover:scale-105 duration-150 transition-all"
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
