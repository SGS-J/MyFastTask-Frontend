import { useLocation } from "react-router-dom";

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

function NavbarLogged({ path }) {
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
      </ul>
    </div>
  );
}

export default function Navigation() {
  const location = useLocation();
  const regex = /\/\w+\/(me|config|tasks)/;
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
        {regex.test(location.pathname) ? (
          <NavbarLogged path="/user" />
        ) : (
          <NavbarNotLogged path="/user" />
        )}
      </div>
    </nav>
  );
}
