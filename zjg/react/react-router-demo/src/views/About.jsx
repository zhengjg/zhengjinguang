import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "A",
    };
    this.addName = this.addName.bind(this);
  }
  addName(B) {
    // 异步更新state
    this.setState((state, props) => {
      let name = state.name + "A" + B;
      return {
        name,
      };
    });
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>{this.state.name}</h3>
        <button onClick={this.addName.bind(this, "B")}>addName</button>
        <button onClick={(e)=>{this.addName('B',e)}}>addName</button>
      </div>
    );
  }
}

export default About;
