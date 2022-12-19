import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Result from "./Components/Result";
import Search from "./Components/Search";

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	const [result, setResult] = useState(null);

	function getUser(username) {
		fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((data) => {
				setResult(data);
			});
	}

	useEffect(() => {
		getUser("octocat");
	}, []);

	return (
		<main className={darkTheme ? "dark" : "light"}>
			<div className="container">
				<Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				<Search getUser={getUser} />
				<Result result={result} />
			</div>
		</main>
	);
}

export default App;
