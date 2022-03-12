import React, { Component } from "react";
import angular from "../images/angular.png";
import html from "../images/html.png";
import java from "../images/java.png";
import js from "../images/js.png";
import php from "../images/php.png";
import py from "../images/py.png";
import vb from "../images/vb.png";
import wp from "../images/wp.png";
import bg from "../images/bg.jpg";

class Section3 extends Component {
  render() {
    const image = {
      width: "250px",
      height: "250px",
      padding: "20px",
    };
    return (
      <div style={{ backgroundImage: `url(${bg})`, height: "1067px" }}>
        <div class="container" style={{ paddingTop: "20px" }}>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
            style={{ marginTop: "720px" }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col">
                    <img src={angular} style={image} />
                  </div>
                  <div class="col">
                    <img src={html} style={image} />
                  </div>
                  <div class="col">
                    <img src={java} style={image} />
                  </div>
                  <div class="col">
                    <img src={js} style={image} />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col">
                    <img src={php} style={image} />
                  </div>
                  <div class="col">
                    <img src={py} style={image} />
                  </div>
                  <div class="col">
                    <img src={vb} style={image} />
                  </div>
                  <div class="col">
                    <img src={wp} style={image} />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
