import React from "react";
import "./Header.scss";
import HeaderOption from "./HeaderOption/HeaderOption";
import { Search } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import { logout, selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";

function Header() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	// Array of header option titles and icons, allowing for easier modifications in the future and reducing code redundancy
	const headerOptions = [
		{ icon: HomeIcon, title: "Home", active: true },
		{ icon: SupervisorAccountIcon, title: "Profile" },
		{ icon: WorkIcon, title: "Jobs" },
		{ icon: MessageIcon, title: "Messages" },
		{ icon: NotificationsIcon, title: "Notifications" },
		{
			title: "Me",
			avatar: user ? user.photoURL : false,
			logout: function () {
				dispatch(logout());
				auth.signOut();
			},
		},
	];

	return (
		<div className="main-container">
			<div className="left-container">
				<div className="logo">
					<a href="/">
						<img
							className="logo-image"
							src="https://img.icons8.com/fluency/52/000000/linkedin.png"
							alt="LinkedIn Logo"
						/>
					</a>
				</div>
				<div className="search-bar">
					<Search className="search-icon" />
					<input type="text" name="search" id="search" placeholder="Search" />
				</div>
			</div>
			<div className="right-container">
				<div className="icon-list">
					{headerOptions.map((option, index) => (
						<HeaderOption
							key={index}
							Icon={option.icon}
							title={option.title}
							avatar={option.avatar}
							active={option.active}
							logout={option.logout}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;

// https://docs.google.com/document/d/1f1rhiKbpxXZrByp62tac7YSk5gFB9n1oCu7XckHo67c/edit?usp=sharing
