import React from "react";
import "../styles/Home.css";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img
          src="https://img.icons8.com/stickers/256/programming.png"
          alt="Aleatory-logo"
        />
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
              <img
                src="https://img.icons8.com/color/256/redux.png"
                alt="Redux-logo"
              />
              <img
                src="https://img.icons8.com/plasticine/256/react.png"
                alt="ReactJS-logo"
              />
              <img
                src="https://img.icons8.com/color/256/nextjs.png"
                alt="NextJS-logo"
              />
              <img
                src="https://img.icons8.com/color/256/angularjs.png"
                alt="AngularJS-logo"
              />
              <img
                src="https://img.icons8.com/color/256/html-5.png"
                alt="HTML-logo"
              />
              <img
                src="https://img.icons8.com/color/256/css3.png"
                alt="CSS-logo"
              />
              <img
                src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/256/external-yarn-fast-reliable-and-secure-dependency-management-web-portal-logo-filled-tal-revivo.png"
                alt="Yarn-logo"
              />
              <img
                src="https://img.icons8.com/color/256/npm.png"
                alt="Npm-logo"
              />
              <img
                src="https://img.icons8.com/color/256/bootstrap.png"
                alt="Bootstrap-logo"
              />
              <img
                src="https://img.icons8.com/ios/256/sass.png"
                alt="Sass-logo"
              />
              <img
                src="https://img.icons8.com/windows/256/less-logo.png"
                alt="Less-logo"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-fsUCSesKopV4ociDg1Z3kAWrYOyAFAq5Jghd1KhAm6KTkOxEqojHlYdmtiCJSwoPq4&usqp=CAU"
                alt="Styled-components-logo"
              />
              <img
                src="https://img.icons8.com/color/256/tailwindcss.png"
                alt="Tailwind-logo"
              />
              <img
                src="https://img.icons8.com/color/256/material-ui.png"
                alt="Materialui-logo"
              />
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              <img
                src="https://img.icons8.com/fluency/256/node-js.png"
                alt="NodeJS-logo"
              />
              <img
                src="https://img.icons8.com/nolan/256/express-js.png"
                alt="Express.JS-logo"
              />
              <img
                src="https://img.icons8.com/color/256/java-coffee-cup-logo--v2.png"
                alt="Java-logo"
              />
              <img
                src="https://img.icons8.com/color/256/spring-logo.png"
                alt="Spring-logo"
              />
              <img
                src="https://img.icons8.com/color/256/firebase.png"
                alt="Firebase-logo"
              />
              <img
                src="https://img.icons8.com/color/256/postgreesql.png"
                alt="PostgreesSQL-logo"
              />
              <img
                src="https://img.icons8.com/color/256/mongodb.png"
                alt="MongoDB-logo"
              />
              <img
                src="https://img.icons8.com/external-soft-fill-juicy-fish/256/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png"
                alt="SQL-logo"
              />
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              <img
                src="https://img.icons8.com/color/256/javascript--v1.png"
                alt="JavaScript-logo"
              />
              <img
                src="https://img.icons8.com/color/256/java-coffee-cup-logo--v2.png"
                alt="Java-logo"
              />
              <img
                src="https://img.icons8.com/color/256/typescript.png"
                alt="TypeScript-logo"
              />
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;
