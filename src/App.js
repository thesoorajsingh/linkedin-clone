import React from "react";
import "./App.css";

// Component imports
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* Body */}
			<div className="app-body">
				<Sidebar name="John Doe" email="john@doe.com" />
				{/*  Left profile relevant section */}
				{/*  Right News and info section */}
				{/* Main Body with posts */}
			</div>
			{/* Footer */}
		</div>
	);
}

export default App;
