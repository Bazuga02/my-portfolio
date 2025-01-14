import styles from "./ProjectsStyles.module.css";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
import proj6 from "../../assets/proj6.png";
import proj7 from "../../assets/proj7.png";
import proj8 from "../../assets/proj8.png";
import proj9 from "../../assets/proj9.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className=" text-3xl mb-2">
        Projects
        <span>
          <p className=" text-xl">
            Click on images to get redirected to website!
          </p>
        </span>{" "}
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={proj9}
          link="https://ai-room-redesign-iota.vercel.app/"
          h3="Ai Room Redesign"
          p="Redesign Your Room with the help of AI"
          github="https://github.com/Bazuga02/ai-room-redesign"
        />
        <ProjectCard
          src={proj6}
          link="https://6675aec6813260b681471245--cheerful-crisp-1efc76.netlify.app/"
          h3="Book Heaven"
          p="Book Store App with Admin Panel"
          github="https://github.com/Bazuga02/bookstore"
        />
        <ProjectCard
          src={proj1}
          link="https://famous-chebakia-076ce5.netlify.app/"
          h3="GYM-me"
          p="GYM Website"
          github="https://github.com/Bazuga02/gym-me-final"
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
        <ProjectCard
          src={proj5}
          link="https://666b9e0a1733a4f1ad4db51c--endearing-kheer-9262e2.netlify.app/"
          h3="Task Manager"
          p="Task Management System"
          github="https://github.com/Bazuga02/mernback"
        />
        <ProjectCard
          src={proj7}
          link="https://hrx-gym-abhishek.netlify.app/"
          h3="Hrx-gym"
          p="Gym website with amzing visuals"
          github="https://github.com/Bazuga02/js-gymhttps://github.com/Bazuga02/bookstore"
        />
        <ProjectCard
          src={proj8}
          link="https://allo-meals.netlify.app/"
          h3="Allo Meals"
          p="Allo Meal ordering Website"
          github="https://github.com/Bazuga02/allo-f"
        />
        <ProjectCard
          src={proj2}
          link="https://github.com/Bazuga02/logoX-app"
          h3="LOGO-X"
          p="Logo Making Application"
          github="https://github.com/Bazuga02/logoX-app"
        />
      </div>
    </section>
  );
}

export default Projects;
