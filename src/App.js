import "./App.css";

import React, { Component } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    // Ajax calls
    console.log("App - mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters }); // = this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters }); // = this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    console.log("handleIncrement", counter);
    const counters = [...this.state.counters]; // cloning an array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // cloning an object
    counters[index].value++;
    console.log("this.state.counters", this.state.counters[index]);
    this.setState({ counters });
  };

  handleDecrement = counter => {
    console.log("handleDecrement", counter);
    const counters = [...this.state.counters]; // cloning an array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // cloning an object
    counters[index].value--;
    console.log("this.state.counters", this.state.counters[index]);
    this.setState({ counters });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
