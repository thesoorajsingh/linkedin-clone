import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.scss";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [name, setName] = React.useState("");
	const [profilePic, setProfilePic] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [error, setError] = React.useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoURL:
							userAuth.user.photoURL || "https://joeschmoe.io/api/v1/random",
						description: userAuth.user.description,
					})
				);
			})
			.catch((error) => {
				console.log(error);
				alert("Invalid Credentials, have you registered?");
			});
	};

	const handleRegister = () => {
		console.log("Register");
		if (!name) {
			setError("name");
			return alert("Please enter a full name!");
		} else if (password.length < 6) {
			setError("password");
			return alert("Password should be at least 6 characters long");
		} else if (!description) {
			setError("description");
			return alert("Please enter a description");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
						description: description,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic || "https://joeschmoe.io/api/v1/random",
								description: description,
							})
						);
					})
					.catch((error) => alert(error));
			})
			.catch((error) => {
				console.log(error);
				alert("Invalid Credentials");
			});
	};

	return (
		<div className="login-card">
			<div className="title-container">
				<img
					src="https://img.icons8.com/doodle/96/000000/linkedin--v2.png"
					alt="LinkedIn Logo"
				/>
				<h2>Login To LinkedIn</h2>
			</div>

			<form className="form" onSubmit={handleSubmit}>
				<Alert variant="filled" severity="info">
					<AlertTitle style={{ fontWeight: 700 }}>Register First!</AlertTitle>
					If you haven't logged in before, Register first!
				</Alert>
				<div className="input-section">
					<TextField
						id="outlined-basic"
						label="Username (If Registering only)"
						variant="outlined"
						type="text"
						fullWidth
						autoComplete="off"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="input-section">
					<TextField
						id="outlined-basic"
						variant="outlined"
						label="Profile Picture URL (Optional)"
						type="text"
						fullWidth
						autoComplete="off"
						value={profilePic}
						onChange={(e) => setProfilePic(e.target.value)}
					/>
				</div>
				<div className="input-section">
					<TextField
						id="outlined-basic"
						variant="outlined"
						label="What's something you love?"
						type="text"
						fullWidth
						autoComplete="off"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="input-section">
					<TextField
						id="outlined-basic"
						variant="outlined"
						label="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
						autoComplete="off"
						error={error === "name"}
						errortext={error === "name" ? "Please enter a valid email" : ""}
					/>
				</div>
				<div className="input-section">
					<TextField
						id="outlined-basic"
						label="Password"
						variant="outlined"
						type="password"
						fullWidth
						autoComplete="off"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						error={error === "password"}
						errortext={
							error === "password"
								? "Password should be a minimum of 6 characters"
								: ""
						}
					/>
				</div>
				<Button
					fullWidth
					className="submit-button"
					type="submit"
					variant="contained"
					endIcon={<LoginIcon />}
				>
					Submit
				</Button>

				<p className="register">
					First Time?{" "}
					<span onClick={handleRegister} className="register">
						Register here.
					</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
