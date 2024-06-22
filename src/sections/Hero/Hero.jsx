import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/abhishek logo.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={`${styles.container} ${styles[theme]}`}>
      <div className="flex flex-col items-end">
        <img
          className=" h-8 cursor-pointer m-1"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        <img
          src={heroImg}
          className=" h-60  mr-10 lg:h-96"
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div>
        <h1 className="text-4xl mb-4">
          Abhishek <br /> Rai
        </h1>
        <h2 className=" text-xl">Frontend Developer</h2>
        <span>
          <a href="https://github.com/Bazuga02" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-rai02/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className=" lg:w-72 mb-4">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover mb-1 ">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
