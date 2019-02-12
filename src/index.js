import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      searchTerm: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    this.searchJokes();
  }

  async fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const joke = await response.json();
    this.setState({ jokes: [joke] });
  }

  async searchJokes() {
    const response = await fetch(
      `https://icanhazdadjoke.com/search?limit=10&term=${
        this.state.searchTerm
      }`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    );

    const { results: jokes } = await response.json();

    this.setState({ jokes });
  }

  render() {
    return (
      <div className="App">
        <h1>Avocado Are Awesome</h1>

        <SearchForm
          onFormSubmit={this.onSearchSubmit}
          onSearchChange={this.onSearchChange}
          onFeelingLuckyClick={this.fetchJoke}
        />

        {this.state.jokes.map(item => (
          <p key={item.id}>{item.joke}</p>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
