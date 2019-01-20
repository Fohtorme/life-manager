import React, { Component } from "react";
import ListSelector from "../general/listSelector";
import { Redirect } from "react-router-dom";

class Menu extends Component {
  state = {
    path: null
  };

  handleSetPath = item => {
    const { path } = item;
    this.setState({ path });
  };

  render() {
    const { path } = this.state;
    const { modules } = this.props;
    if (path !== null) {
      return <Redirect to={path} />;
    }
    return (
      <React.Fragment>
        <ListSelector list={modules} onClickItem={this.handleSetPath} />
      </React.Fragment>
    );
  }
}

export default Menu;
