import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    monsters: [
      { name: "monster1", id: 1 },
      { name: "monster2", id: 2 },
      { name: "monster3", id: 3 },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
