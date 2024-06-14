import React from "react";
import styles from "./HeaderStyles.module.css";
import animation from "../../animation.json";
import animation2 from "../../animation2.json";
import Lottie from "lottie-react";

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
        <div className={styles.big}>
          <div className={styles.animate}>
            <Lottie animationData={animation2} loop={true} />
          </div>
          <h1 className={`${styles.logo} ${styles.black}`}>Portfolio</h1>
          <div className={styles.animate}>
            <Lottie animationData={animation} loop={true} />
          </div>
        </div>
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
