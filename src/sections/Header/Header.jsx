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
    <header className={`${styles.header} ${styles.light}`}>
      <nav className={styles.navbar}>
        <h1 className={`${styles.logo} ${styles.black}`}>Portfolio</h1>
        <ul className={styles.navLinks}>
          <li
            onClick={() => scrollToSection("hero")}
            className={`${styles.list} ${styles.listItem}`}
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className={`${styles.list} ${styles.listItem}`}
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("education")}
            className={`${styles.list} ${styles.listItem}`}
          >
            Education 
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className={`${styles.list} ${styles.listItem}`}
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={`${styles.list} ${styles.listItem}`}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
