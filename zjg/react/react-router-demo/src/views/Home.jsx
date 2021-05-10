import { Component } from "react";
import Parent from "../components/Parent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.tick();
    // }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  print() {
    console.log("print");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <span>{this.state.date.toLocaleTimeString()}</span>
        <Parent></Parent>
      </div>
    );
  }
}

export default Home;
