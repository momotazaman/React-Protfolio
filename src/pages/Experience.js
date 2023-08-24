import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="01.1998 - 03.2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Rajshahi Board, Bangladesch
          </h3>
          <p>Secondary School Certificate Examination</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="05.2008 - 05.2010 "
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Dinajpur Board, Bangladesch
          </h3>
          <p> Higher Secondary Certificate Examination</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10.2012-01.2013 "
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Deutschkurs 
          </h3>
          <p>  Goethe Institut, Dhaka, Bangladesch</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 08.2013 - 01.2015 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Deutschkurs
          </h3>
          
          <p>Volkshochschule Kaiserslautern, Kaiserslautern,Deutschland
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 08.2015 - 01.2016 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
              Studienkolleg (Technik und Ingenieurwissenschaften)
          </h3>
          
          <p>
            Hochschule Kaiserslautern, Kaiserslautern, Deutschland
          </p>
        </VerticalTimelineElement>

        
       <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 04.2016 - 09.2018 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Bachelor (Informatik, Abgebrochen)
          </h3>
          
          <p>
           TU Kaiserslautern, Kaiserslautern, Deutschland
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 07.2022 - 06.2023 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Geprüfte Web Application Developerin (SGD)
          </h3>
          
          <p>
            sgd Deutschland Führende Fernschule
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
