import { Component } from "react";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    console.log("handleToggleClick");
    console.log(this.state.showWarning);
    this.setState((state) => {
      return {
        showWarning: !state.showWarning,
      };
    });
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
        <ul>
          <Li list={[1, 2, 3, 4, 5]}></Li>
        </ul>
      </div>
    );
  }
}

function Li(props) {
  return props.list.map((item) => {
    return <li key={item.toString()}>{item}</li>;
  });
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

export default Page;
