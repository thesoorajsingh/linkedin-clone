import React, { useEffect, useState } from "react";
import "./NewsSection.scss";

const NewsSection = () => {
	const [loading, setLoading] = useState(true);
	const [apiData, setApiData] = useState([]);
	const fetchCatFacts = () => {
		fetch("https://catfact.ninja/facts?limit=5")
			.then((res) => res.json())
			.then((data) => {
				setApiData(data.data);
			});
	};

	useEffect(() => {
		setLoading(true);
		fetchCatFacts();
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div className="news-section">
			<h2 className="news-title">Random Cat Facts</h2>
			{loading ? (
				<ul className="list">
					<li className="list-loading"></li>
				</ul>
			) : (
				<ul className="list">
					{apiData.map((fact, index) => (
						<li className="list-item" key={index}>
							{fact.fact}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NewsSection;
