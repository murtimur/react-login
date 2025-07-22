import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logout } from "./api";
import { logoutSuccess } from "../redux/redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((store) => store.auth);

  const onLogoutSuccess = async () => {
    try {
      await logout();
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <b className="navbar-brand">React App</b>
          <ul className="navbar-nav">
            {authState.id === 0 && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            {authState.id > 0 && (
              <>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    role="button"
                  >
                    {authState.username}
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    role="button"
                    onClick={onLogoutSuccess}
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
