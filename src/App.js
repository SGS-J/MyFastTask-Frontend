import { useEffect, useState } from "react";
import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/register";
import Navigation from "./layout/template/Navigation";
import MePage from "./pages/UserPage/Me/me";
import TasksPage from "./pages/UserPage/Tasks/tasks";
import ConfigPage from "./pages/UserPage/Config/config";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [userLogged, setUserLogged] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const submitUser = (user) => {
    setUserLogged(user);
  };

  useEffect(() => {
    console.log(location);
    if (!userLogged) navigate("/login");
    else if (!location.pathname.includes("user"))
      navigate("/user/" + userLogged + "/me");
  }, [userLogged]);

  return (
    <>
      <Navigation userLogged={userLogged} submitUser={submitUser} />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route path="/user/:user">
          <Route path="me" element={<MePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="config" element={<ConfigPage />} />
        </Route>
        <Route exact path="/register" element={<RegisterPage />} />
        <Route
          exact
          path="/login"
          element={<LoginPage submitUser={submitUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
