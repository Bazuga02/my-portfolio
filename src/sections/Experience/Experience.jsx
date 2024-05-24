import React from "react";
import "./Experience.css";
import { useTheme } from "../../common/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section className="col" id="education">
      <header className="title">
        <h2>EDUCATION</h2>
      </header>
      <div className="contents">
        <div className="box">
          <h4 style={{ color: theme === "light" ? "black" : "white" }}>
            2021-2025
          </h4>
          <h3 style={{ color: theme === "light" ? "black" : "white" }}>
            Graduation
          </h3>
          <p>
            <p>Lovely Professional University</p>
            BTECH in Computer Science and Engineering CGPA - 7.8
          </p>
        </div>
        <div className="box">
          <h4 style={{ color: theme === "light" ? "black" : "white" }}>
            2020-2021
          </h4>
          <h3 style={{ color: theme === "light" ? "black" : "white" }}>
            Higher Secondary Education
          </h3>
          <p>Army Public School | Kota, Rajasthan Percentage- 95%.</p>
        </div>
        <div className="box">
          <h4 style={{ color: theme === "light" ? "black" : "white" }}>
            2018 - 2019
          </h4>
          <h3 style={{ color: theme === "light" ? "black" : "white" }}>
            Secondary Education
          </h3>
          <p>Army Public School | Kota, Rajasthan Percentage- 94.2%.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;