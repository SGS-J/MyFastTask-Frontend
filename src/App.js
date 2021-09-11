import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/register";
import Navigation from "./layout/template/Navigation";
import UserPageRouter from "./pages/UserPage/UserPageRouter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/:user">
            <UserPageRouter />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
