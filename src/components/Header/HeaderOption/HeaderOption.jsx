import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.scss";

function HeaderOption({ Icon, title, avatar, active }) {
	return (
		<div className={`header-option ${active && "active"}`}>
			{Icon && <Icon className="icon" />}
			{avatar && (
				<Avatar
					className="profile-image"
					src={avatar}
					alt="profile avatar"
					sx={{ width: 25, height: 25 }}
				/>
			)}
			<div className="title">{title}</div>
		</div>
	);
}

export default HeaderOption;
