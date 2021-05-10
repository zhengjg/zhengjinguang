import {
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Topic from "./Topic";

function Topics() {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.path}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.path}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic></Topic>
        </Route>
        <Route path={match.path}>
          <h2>this is default Topics</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default Topics;
