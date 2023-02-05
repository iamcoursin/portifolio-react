import React from "react";
import "../styles/Home.css";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hellow, Meu nome é Gustavo Kozlowski</h2>
        <div className="prompt">
          <p>
            Sou desenvolvedor front-end, e estou em busca de novos desafios. 🚀
          </p>
          <a
            href="mailto:guskozlowskidev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <EmailIcon />
          </a>
          <a
            href="https://github.com/gustavokozlowski"
            target="_blank"
            rel="noopener noreferrer"
          >
          <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-kozlowskidev/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <LinkedinIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, NPM, NextJS,
              BootStrap, MaterialUI, Yarn, TailwindCSS, Styled-Components, Sass
              & Less
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, Firebase, PostgreSQL, MongoDB &
              SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java & TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;
