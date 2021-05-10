import React, { Component } from "react";

class From extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 123,
    };
    this.val2 = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      val: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.val2.current.value);
    console.log(this.state.val);
  }

  //受控组件
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>input:{this.state.val}</label>
          <input
            value={this.state.val}
            onChange={(e) => {
              this.handleChange(e);
            }}
          ></input>
        </div>
        <div>
          <label>input2</label>
          <input defaultValue="Bob" type="text" ref={this.val2}></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default From;
