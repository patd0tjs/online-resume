import React, { Component } from "react";
import Modals from "./modals";
import {
  getEduc,
  getWork,
  getProject,
  getContact,
} from "../services/dataservice";

class Section2 extends Component {
  render() {
    const styleGen = {
      textAlign: "center",
      padding: "10%",
      color: "white",
      paddingTop: "5%",
      fontSize: "18px",
      fontWeight: "600",
    };
    const styleModal = {
      textAlign: "justify",
      color: "black",
    };
    const styleHeaders = {
      fontWeight: "300",
      fontSize: "30px",
    };
    const styleHeaders2 = {
      fontWeight: "300",
      fontSize: "20px",
    };
    const mydata = {
      educ: getEduc(),
      work: getWork(),
      project: getProject(),
      contact: getContact(),
    };

    return (
      <div class="row" style={{ backgroundColor: "#212529" }}>
        <div class="col">
          <Modals
            data={mydata.educ}
            id="education"
            header="MY EDUCATION"
            head2="My Education"
            styleGen={styleGen}
            styleHeaders={styleHeaders}
            styleHeaders2={styleHeaders2}
            styleModal={styleModal}
          />
        </div>
        <div class="col">
          <Modals
            data={mydata.work}
            id="work"
            header="MY WORK EXPERIENCE"
            head2="My Work Experience"
            styleGen={styleGen}
            styleHeaders={styleHeaders}
            styleHeaders2={styleHeaders2}
            styleModal={styleModal}
          />
        </div>
        <div class="col">
          <Modals
            data={mydata.project}
            id="project"
            header="MY PROJECTS"
            head2="My Project"
            styleGen={styleGen}
            styleHeaders={styleHeaders}
            styleHeaders2={styleHeaders2}
            styleModal={styleModal}
          />
        </div>
        <div class="col">
          <Modals
            data={mydata.contact}
            id="contact"
            header="CONTACT"
            head2="Contact Me"
            styleGen={styleGen}
            styleHeaders={styleHeaders}
            styleHeaders2={styleHeaders2}
            styleModal={styleModal}
          />
        </div>
      </div>
    );
  }
}

export default Section2;
