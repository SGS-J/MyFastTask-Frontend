import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/register";
import Navigation from "./layout/template/Navigation";
import MePage from "./pages/UserPage/Me/me";
import TasksPage from "./pages/UserPage/Tasks/tasks";
import ConfigPage from "./pages/UserPage/Config/config";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  const [userLogged, setUserLogged] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPaths = {
    whenAuth: `/user/${userLogged}/me`,
    whenNotAuth: "/login",
  };

  const submitUser = (user) => {
    setUserLogged(user);
  };

  return (
    <>
      <Navigation userLogged={userLogged} submitUser={submitUser} />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="user/:user"
            element={!userLogged && <Navigate replace to="/login" />}
          >
            <Route path="me" element={<MePage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="config" element={<ConfigPage />} />
          </Route>
          <Route
            path="register"
            element={
              userLogged ? (
                <Navigate replace to={redirectPaths.whenAuth} />
              ) : (
                <RegisterPage />
              )
            }
          />
          <Route
            path="login"
            element={
              userLogged ? (
                <Navigate replace to={redirectPaths.whenAuth} />
              ) : (
                <LoginPage submitUser={submitUser} />
              )
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
