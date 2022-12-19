import dark from "../img/dark.svg";
import light from "../img/light.svg";

export default function Header({ setDarkTheme, darkTheme }) {
	return (
		<>
			<header>
				<span>DEVFINDER</span>
				<div className="theme-btn" onClick={() => setDarkTheme((old) => !old)}>
					<span>{darkTheme ? "LIGHT" : "DARK"}</span>
					<img src={darkTheme ? light : dark} alt="color icon" />
				</div>
			</header>
		</>
	);
}
