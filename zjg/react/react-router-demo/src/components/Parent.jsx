import { Component } from "react";
import Children from "./Children";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
    };
    console.log("Parent contructor");
  }

  shouldComponentUpdate() {
    console.log("Parent shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("Parent componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h2>this is parent</h2>
        <Children age={this.state.age}></Children>
      </div>
    );
  }
}

export default Parent;
