import MePage from "./Me/me";
import TasksPage from "./Tasks/tasks";
import ConfigPage from "./Config/config";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function UserPageRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/me`}>
        <MePage />
      </Route>
      <Route path={`${path}/tasks`}>
        <TasksPage />
      </Route>
      <Route path={`${path}/config`}>
        <ConfigPage />
      </Route>
    </Switch>
  );
}
