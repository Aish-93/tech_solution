import React, {Component} from "react";

import Main from "./components/Main";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <Main />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
