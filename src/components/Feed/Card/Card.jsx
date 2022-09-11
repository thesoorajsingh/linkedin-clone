import { Avatar } from "@mui/material";
import React from "react";
import "./Card.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import IosShareIcon from "@mui/icons-material/IosShare";

function Card({ name, description, message, photoURL }) {
	return (
		<div className="card-container">
			<div className="name-container">
				<Avatar className="avatar" src={photoURL} />
				<div className="description-container">
					<h2 className="name">{name}</h2>
					<p className="description">{"I love " + description}</p>
				</div>
			</div>
			<div className="content">{message}</div>
			<div className="divider"></div>
			<div className="buttons">
				<div className="button-container">
					<ThumbUpIcon className="icon" />
					<button className="button">Like</button>
				</div>
				<div className="button-container">
					<CommentIcon className="icon" />
					<button className="button">Comment</button>
				</div>
				<div className="button-container">
					<IosShareIcon className="icon" />
					<button className="button">Share</button>
				</div>
				<div className="button-container">
					<SendIcon className="icon" />
					<button className="button">Send</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
