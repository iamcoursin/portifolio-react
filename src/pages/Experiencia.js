import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experiencia() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#4B0082">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#4B0082", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Colégio Estadual Mauá
          </h3>
          <p>Ensino médio concluído</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#4B0082", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          SERRATEC/SENAI
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
             Residência de Software, EAD
          </h4>

          <p>Desenvolvedor Full-Stack</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 04/2022 - 07/2022"
          iconStyle={{ background: "#4B0082", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-end - Zenit
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            São Paulo, SP
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06/2022 - 10/2022"
          iconStyle={{ background: "#4B0082", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-end - DevsFree
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            São Paulo, SP
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/2022 - até o momento"
          iconStyle={{ background: "#4B0082", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-end - Freelancer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Home Office
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>




    </div>
  );
}

export default Experiencia;