import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Agenda from "./components/agenda/agenda";
import Menu from "./components/main/menu";
import Routine from "./components/routine/routine";
import Health from "./components/health/health";

class App extends Component {
  render() {
    const modules = [
      {
        label: "Agenda",
        style: { backgroundColor: "red" },
        path: "/agenda",
        component: Agenda
      },
      {
        label: "Health",
        style: { backgroundColor: "blue" },
        path: "/health",
        component: Health
      },
      {
        label: "Routine",
        style: { backgroundColor: "green" },
        path: "/routine",
        component: Routine
      }
    ];
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Menu modules={modules} />} />
          {modules.map(m => (
            <Route path={m.path} component={m.component} />
          ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
