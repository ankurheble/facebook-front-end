import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-facebook align-end">
          <Link to="/" className="navbar-brand text-light mr-5">
            facebook
          </Link>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>
                <Link to="/user/profile" className="nav-link">
                  <img
                    className="img-circle"
                    src="https://picsum.photos/30/30"
                    alt="Profile Pic"
                  />
                  <span className="ml-2 text-light">user.name</span>
                </Link>
              </li>
            </ul>
            <ul className="ml-2 navbar-nav">
              <li>
                <Link className="nav-link text-light" to="/auth/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </React.Fragment>
    );
  }
}
