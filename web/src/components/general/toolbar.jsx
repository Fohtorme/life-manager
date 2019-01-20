import React, { Component } from "react";
import FullRowButton from "./fullRowButton";
import { Redirect } from "react-router-dom";

class Toolbar extends Component {
  state = {
    path: null
  };
  render() {
    const { path } = this.state;
    if (path !== null) {
      return <Redirect to={path} />;
    }
    return (
      <FullRowButton
        label="Back"
        style={{ backgroundColor: "yellow" }}
        onClick={() => this.setState({ path: "/" })}
      />
    );
  }
}

export default Toolbar;
