import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.scss";

function Sidebar({ name, email }) {
	const user = useSelector(selectUser);
	return (
		<div className="sidebar">
			<div className="profile-card">
				<div className="profile-data">
					<img
						src="https://images.unsplash.com/photo-1661927517192-8a1f7645fb33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt="background-banner"
						className="bg-image"
					/>
					<Avatar className="avatar" src={user.photoURL} />
					<h2 className="name">{name}</h2>
					<h4 className="email">{email}</h4>
				</div>
				<div className="stats">
					<div className="stat">
						<h4>Who's Viewed Your Profile</h4>
						<p className="value">2,543</p>
					</div>
					<div className="stat">
						<h4>Impressions of Your Post</h4>
						<p className="value">7,794</p>
					</div>
				</div>
				<div className="divider"></div>
				<div className="offer">
					<h4>Get Hired Faster, Try Premium Now!</h4>
				</div>
			</div>
			<div className="recent-card">
				<div className="recent-data">
					<h3>Recent</h3>

					<p className="list-item">Google Android</p>
					<p className="list-item">Meta Engineering</p>
					<p className="list-item">Apple WWDC</p>
					<p className="list-item">IBM AINext</p>

					<h3>Groups</h3>

					<p className="list-item">Engineering Life</p>
					<p className="list-item">Design Groups</p>
				</div>
				<div className="divider"></div>
				<h2>Discover More</h2>
			</div>
		</div>
	);
}

export default Sidebar;
