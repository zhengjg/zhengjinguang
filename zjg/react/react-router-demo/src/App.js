import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Topics from "./views/Topics";
import Page from "./views/Page";
import Form from "./views/From";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/page">Page</Link>
            <Link to="/from">Form</Link>
          </div>
        </div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/topics">
            <Topics></Topics>
          </Route>
          <Route path="/page">
            <Page></Page>
          </Route>
          <Route path="/from">
            <Form></Form>
          </Route>
          <Route path="/">
            <h1> this is main page!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
