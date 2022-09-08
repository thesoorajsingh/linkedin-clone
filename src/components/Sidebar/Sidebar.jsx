import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.scss";

function Sidebar({ name, email }) {
	return (
		<div className="sidebar">
			<div className="profile-card">
				<div className="profile-data">
					<img
						src="https://picsum.photos/250/250"
						alt="background-banner"
						className="bg-image"
					/>
					<Avatar className="avatar" src="https://i.pravatar.cc/100" />
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
