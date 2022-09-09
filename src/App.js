import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

// Component imports
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import NewsSection from "./components/NewsSection/NewsSection";
import Login from "./components/Login/Login";
import { auth } from "./utils/firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		}); //eslint-disable-next-line
	}, []);

	console.log(user);

	return (
		<div className="app">
			<Header />
			<div className="app-body">
				{!user ? (
					<Login />
				) : (
					<>
						<Sidebar name={user.displayName} email={user.email} />
						<Feed />
						<NewsSection />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
