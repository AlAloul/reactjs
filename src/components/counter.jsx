import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  /*************** Event Handler Binding Method(1) **************** *
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked " + this.state.count); // You cant use "this" directly in this method because you are calling it as an event handler, the solution is to bind "this" with this method in the constructor {see above}
  }

  /*************** Event Handler Binding Method(2) **************** */
  // Convert the above function into an arrow function (arrow function can't re-bind the "this" keyword):
  handleIncrement = () => {
    console.log("Increment Clicked " + this.state.count);
  };
  /*************** End Event Handler Binding Method(2) **************** */

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getbadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.renderTags()}
      </React.Fragment>
    );
  }

  getbadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
