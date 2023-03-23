import axios from "axios";
import { Link } from "react-router-dom";

function NavbarNotLogged() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/user/login">
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user/register">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}

function NavbarLogged({ logoutUser }) {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/user/:user/me">
            Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user/:user/tasks">
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user/:user/config">
            Configuration
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user/login" onClick={logoutUser}>
            Log Out
          </Link>
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
        <Link className="navbar-brand" to="/">
          MyFastTask
        </Link>

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
          <NavbarLogged logoutUser={logoutUser} />
        ) : (
          <NavbarNotLogged />
        )}
      </div>
    </nav>
  );
}
