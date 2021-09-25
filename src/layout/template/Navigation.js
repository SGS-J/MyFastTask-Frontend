import { useLocation, useHistory, useParams } from "react-router-dom";
import axios from "axios";

function NavbarNotLogged({ path }) {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href={`${path}/login`}>
            Log In
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`${path}/register`}>
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}

function NavbarLogged({ logoutUser, path }) {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href={`${path}/me`}>
            Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`${path}/tasks`}>
            Tasks
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`${path}/config`}>
            Configuration
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={logoutUser}>
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Navigation() {
  const { user } = useParams();
  const history = useHistory();
  const loc = useLocation();

  const logoutUser = async () => {
    await axios.post(`/user/${user}/logout`);
    history.push("/user/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MyFastTask
        </a>
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
        {user ? (
          <NavbarLogged logoutUser={logoutUser} path="/user" />
        ) : (
          <NavbarNotLogged path="/user" />
        )}
      </div>
    </nav>
  );
}
