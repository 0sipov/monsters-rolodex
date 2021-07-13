import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState((state) => (state.monsters = data)));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { searchField, monsters } = this.state;
    const filtredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="searchMonsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filtredMonsters} />
      </div>
    );
  }
}

export default App;
