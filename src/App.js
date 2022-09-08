import React from "react";
import "./App.css";

// Component imports
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import NewsSection from "./components/NewsSection/NewsSection";

function App() {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* Body */}
			<div className="app-body">
				{/*  Left profile relevant section */}
				<Sidebar name="John Doe" email="john@doe.com" />
				{/* Main Body with posts */}
				<Feed />
				{/*  Right News and info section */}
				<NewsSection />
			</div>
			{/* Footer */}
		</div>
	);
}

export default App;
