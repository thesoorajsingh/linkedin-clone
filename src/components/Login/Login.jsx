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
						photoUrl: userAuth.user.photoURL,
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
			return alert("Please enter a full name!");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic
							? profilePic
							: "https://joeschmoe.io/api/v1/random",
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic
									? profilePic
									: "https://joeschmoe.io/api/v1/random",
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
						label="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
						autoComplete="off"
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
