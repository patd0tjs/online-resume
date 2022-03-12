import React, { Component } from "react";
import face from "../images/face.jpg";

class Section1 extends Component {
  render() {
    const imgstyle = {
      height: "35%",
    };
    const colStyle = {
      marginLeft: "15%",
      paddingBottom: "0%",
    };
    const col2Style = {
      padding: "10%",
      paddingLeft: "0%",
      paddingBottom: "0%",
    };
    const introStyle = {
      paddingTop: "8%",
      textAlign: "justify",
      textJustify: "inter-word",
      fontSize: "24px",
      fontWeight: "300",
    };
    const info = {
      title: "Hi, my name is Pat!",
      subtitle: "And I am an aspiring web developer",
      intro:
        "Hi there, and welcome to my basic React Website. My name is Patrick Glenn Balanza, and I'm a 4th year college student at the University of Santo Tomas, Manila. I'm also an aspiring web developer looking for opportunities to further enhance my development skills. I'm able to work as a full-stack developer but I prefer working on the back-end. I am a goal-oriented person, who always has a strong interest and passion in what I do.",
    };
    return (
      <div style={{ height: "617px" }}>
        <div class="row">
          <div class="col-4" style={colStyle}>
            <img src={face} style={imgstyle} />
          </div>
          <div class="col" style={col2Style}>
            <div>
              <h1>
                <Something title={info.title}></Something>
              </h1>
              <h4>
                <Something subtitle={info.subtitle}></Something>
              </h4>
              <p style={introStyle}>
                <Something intro={info.intro}></Something>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Something({ title, subtitle, intro }) {
  return (
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{intro}</div>
    </div>
  );
}

export default Section1;
