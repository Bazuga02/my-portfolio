import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./ProjectCardStyles.module.css"; // Import the CSS module

function ProjectCard({ src, link, h3, p, github }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="hover"
          src={src}
          alt={`${h3} logo`}
          height={200}
          width={600}
        />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
      <a href={github} target="_blank">
        <button className={styles.button}>
          <FaGithub />
          Github
        </button>
      </a>
    </div>
  );
}

export default ProjectCard;
