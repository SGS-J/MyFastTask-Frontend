import axios from "axios";

function NavbarNotLogged() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/user/login">
            Log In
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/register">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}

function NavbarLogged({ logoutUser, userLogged }) {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href={`/user/${userLogged}/me`}>
            Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`/user/${userLogged}/tasks`}>
            Tasks
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`/user/${userLogged}/config`}>
            Configuration
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/login" onClick={logoutUser}>
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Navigation({ userLogged, submitUser }) {
  const logoutUser = async () => {
    await axios.post(`/user/${userLogged}/logout`);
    submitUser("");
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
        {userLogged ? (
          <NavbarLogged logoutUser={logoutUser} userLogged={userLogged} />
        ) : (
          <NavbarNotLogged />
        )}
      </div>
    </nav>
  );
}
