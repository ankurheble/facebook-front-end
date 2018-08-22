import React from "react";

export default class Profile extends React.Component {
  render() {
    return <div className="container">
			<div className="card">
				<div className="card-header">
					<img className="img-fluid flex" src="https://picsum.photos/1068/250" alt="Cover"/>
					<div className="flex align-center">
						<img className="profile-pic" src="https://picsum.photos/100/100" alt="Profile"/>
						<h3 className="user-name">user.name</h3>
						</div>
					</div>
				<div className="card-body">
						<form className="flex column align-flex-end" method="POST" action="/user/profile">
							<input className="form-control" type="text" name="name" value="user.name"/>
							<input className="form-control" type="email" name="email" value="user.email"/>
							<input className="form-control mt-1 btn btn-primary btn-sm" type="submit" value="Update Info" style={{"width":"100px"}}/>
						</form>
				</div>
			</div>
		</div>;
  }
}
