import React, { Component } from "react";

class Header extends Component {
  render() {
    const style = {
      textAlign: "center",
    };
    return (
      <nav class="navbar navbar-dark bg-dark" style={style}>
        <div class="container-fluid">
          <a class="navbar-brand">
            Patrick Glenn Balanza, University of Santo Tomas
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
