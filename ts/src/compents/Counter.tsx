import React, { Component } from 'react';

interface CounterState {
  count: number; // Define the type for the state.
}

class Counter extends Component<{}, CounterState> {
  // The first generic argument is for props (empty object `{}` in this case).
  // The second is for state.

  state: CounterState = {
    count: 0, // Initial state with type safety.
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
