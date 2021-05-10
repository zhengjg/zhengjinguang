import { Component } from "react";

class Children extends Component {
  constructor(props) {
    super(props);
    console.log("Children contructor");
    this.state = {
      name: "lili",
    };
  }

  static getDerivedStateFromProps(nextProps) {
    console.log("Children getDerivedStateFromProps");
    console.log(nextProps);
    return {
      age: 20,
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      age: 20,
    };
  }
  
  componentDidMount() {
    console.log("Children componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Children shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("Children componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Children componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Children componentWillUnmount");
  }

  render() {
    console.log("Children render");
    return (
      <div>
        <h2>this is children</h2>
        <h3>age: {this.props.age}</h3>
      </div>
    );
  }
}

export default Children;
