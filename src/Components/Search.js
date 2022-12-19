import { useState } from "react";
import searchIcon from "../img/search.svg";

export default function Search({ getUser }) {
	const [search, setSearch] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		getUser(search);
	}

	return (
		<>
			<section className="search">
				<form onSubmit={handleSubmit}>
					<img src={searchIcon} alt="search" />
					<input
						placeholder="search github username..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button>Search</button>
				</form>
			</section>
		</>
	);
}
