import { useState } from "react";
import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/register";
import Navigation from "./layout/template/Navigation";
import UserPageRouter from "./pages/UserPage/UserPageRouter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [userLogged, setUserLogged] = useState("");

  const submitUser = (user) => {
    setUserLogged(user);
  };

  return (
    <>
      <Router>
        <Navigation userLogged={userLogged} submitUser={submitUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user/register" element={<RegisterPage />} />
          <Route
            exact
            path="/user/login"
            element={<LoginPage submitUser={submitUser} />}
          />
          <Route path="/user/:user" element={<UserPageRouter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
