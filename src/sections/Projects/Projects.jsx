import styles from "./ProjectsStyles.module.css";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={proj1}
          link="https://famous-chebakia-076ce5.netlify.app/"
          h3="GYM-me"
          p="GYM Website"
          github="https://github.com/Bazuga02/gym-me-final"
        />
        <ProjectCard
          src={proj2}
          link="https://github.com/Bazuga02/logoX-app"
          h3="LOGO-X"
          p="Logo Making Application"
          github="https://github.com/Bazuga02/logoX-app"
        />
        <ProjectCard
          src={proj4}
          link="https://gym-me-app.netlify.app/"
          h3="Gemini Clone"
          p="Goggle Gemini Clone Using api"
          github="https://github.com/Bazuga02/goggle-gemini-clone"
        />
        <ProjectCard
          src={proj3}
          link="https://bazuga02.github.io/git-detective/"
          h3="GitHub Detective"
          p="GitHub UserProfile Search"
          github="https://github.com/Bazuga02/git-detective"
        />
      </div>
    </section>
  );
}

export default Projects;
