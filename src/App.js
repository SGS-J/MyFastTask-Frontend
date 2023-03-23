import { useEffect, useState } from "react";
import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/register";
import Navigation from "./layout/template/Navigation";
import MePage from "./pages/UserPage/Me/me";
import TasksPage from "./pages/UserPage/Tasks/tasks";
import ConfigPage from "./pages/UserPage/Config/config";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";

function App() {
  const [userLogged, setUserLogged] = useState("");

  const submitUser = (user) => {
    setUserLogged(user);
  };

  return (
    <Router>
      <Navigation userLogged={userLogged} submitUser={submitUser} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/user/:user">
          <Route path="me" element={<MePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="config" element={<ConfigPage />} />
        </Route>
        <Route exact path="/user/register" element={<RegisterPage />} />
        <Route
          exact
          path="/user/login"
          element={<LoginPage submitUser={submitUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
