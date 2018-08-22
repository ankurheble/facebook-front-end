import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Wall from "./components/Wall";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container wall-width">
          <Wall />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
