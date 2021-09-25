import { useState } from "react";
import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/register";
import Navigation from "./layout/template/Navigation";
import UserPageRouter from "./pages/UserPage/UserPageRouter";
import {
  BrowserRouter as Router,
  Switch,
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
        <Navigation />
        <Switch>
          <Route exact path="/">
            {userLogged ? (
              <Redirect to={`/user/${userLogged}/me`} />
            ) : (
              <HomePage />
            )}
          </Route>
          <Route exact path="/user/register">
            {userLogged ? (
              <Redirect to={`/user/${userLogged}/me`} />
            ) : (
              <RegisterPage />
            )}
          </Route>
          <Route exact path="/user/login">
            {userLogged ? (
              <Redirect to={`/user/${userLogged}/me`} />
            ) : (
              <LoginPage submitUser={submitUser} />
            )}
          </Route>
          <Route path="user/:user">
            {userLogged ? <UserPageRouter /> : <Redirect to="/user/login" />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
