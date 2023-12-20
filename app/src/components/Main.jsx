// Main.js
import React, { Component } from "react";
import "./Main_module.css";

class Main extends Component {
  render() {
    return <div className="main">{this.props.children}</div>;
  }
}

export default Main;
