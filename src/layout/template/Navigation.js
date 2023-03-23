import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";

function NavbarNotLogged() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function NavbarLogged({ logoutUser, userLogged }) {
  const baseUrl = String("/user/" + userLogged);
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to={`${baseUrl}/me`}>
            Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`${baseUrl}/tasks`}>
            Tasks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`${baseUrl}/config`}>
            Configuration
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" onClick={logoutUser}>
            Log Out
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default function Navigation({ userLogged, submitUser }) {
  const logoutUser = async () => {
    await axios.post("/user/logout");
    submitUser("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          MyFastTask
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {userLogged ? (
          <NavbarLogged logoutUser={logoutUser} userLogged={userLogged} />
        ) : (
          <NavbarNotLogged />
        )}
      </div>
    </nav>
  );
}
