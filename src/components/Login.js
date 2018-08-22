import React from "react";

export default function Login(props) {
  return (
    <React.Fragment>
      <div class="card card-default">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form action="/auth/login" method="POST">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                auto-complete="off"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                auto-complete="off"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary" type='submit'>Login</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
