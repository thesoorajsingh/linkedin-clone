import React, { useEffect } from "react";
import "./Feed.scss";
import { Create } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import firebase from "firebase/compat/app";
import Card from "./Card/Card";
import { useState } from "react";
import { db } from "../../utils/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Feed() {
	const user = useSelector(selectUser);
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => {
						return {
							id: doc.id,
							data: doc.data(),
						};
					})
				);
			});
	}, []);

	const inputOptions = [
		{
			title: "Photo",
			icon: <AddPhotoAlternateIcon className="input-option-icon" />,
		},
		{
			title: "Video",
			icon: <VideocamIcon className="input-option-icon" />,
		},
		{
			title: "Event",
			icon: <CalendarMonthIcon className="input-option-icon" />,
		},
		{
			title: "Write article",
			icon: <ArticleIcon className="input-option-icon" />,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: user.displayName,
			description: "I love something placeholder",
			message: input,
			photoUrl: user.photoUrl,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	return (
		<div className="feed">
			<div className="create-post-card">
				<div className="input-area">
					<Avatar className="avatar" src="https://i.pravatar.cc/100" />
					<form onSubmit={handleSubmit}>
						<Create />
						<input
							type="textarea"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="input"
						/>
						<button type="submit" className="submit-button">
							<SendIcon className="send" type="submit" />
						</button>
					</form>
				</div>
				<div className="input-options">
					{inputOptions.map((option, index) => (
						<div key={index} className="input-option">
							{option.icon}
							<h4>{option.title}</h4>
						</div>
					))}
				</div>
			</div>
			<div className="posts">
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Card
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default Feed;

// Unsplash URL - https://images.unsplash.com/photo-1641545423876-3d7dc842132c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2143&q=80
