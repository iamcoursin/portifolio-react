import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projetos.css";

function Projetos() {
  return (
    <div className="projects">
      <h1> Meus Projetos</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projetos;
