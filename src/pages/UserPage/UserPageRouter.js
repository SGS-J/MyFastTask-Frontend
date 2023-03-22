import MePage from "./Me/me";
import TasksPage from "./Tasks/tasks";
import ConfigPage from "./Config/config";
import { Routes, Route, useParams } from "react-router-dom";

export default function UserPageRouter() {
  const { user } = useParams();
  console.log(user);
  return (
    <Routes>
      <Route path={`${user}/me`} element={<MePage />} />
      <Route path={`${user}/tasks`} element={<TasksPage />} />
      <Route path={`${user}/config`} element={<ConfigPage />} />
    </Routes>
  );
}
