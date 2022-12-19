import twitter from "../img/twitter.svg";
import website from "../img/website.svg";
import location from "../img/location.svg";
import work from "../img/work.svg";

export default function Result({ result }) {
	// console.log(result);
	const date =
		result &&
		(result.created_at
			? "Joined " + new Date(`${result?.created_at}`).toLocaleDateString()
			: "");
	return (
		<>
			{result &&
				(result.id ? (
					<section className="result">
						<div className="avatar">
							<img src={result?.avatar_url} alt="" />
						</div>
						<div className="name">
							<div>
								<h3>{result?.name}</h3>
								<h4>@{result?.login}</h4>
							</div>
							<h5>{date}</h5>
						</div>
						<div className="details">
							<h5 className="bio">{result.bio || "this account has no bio"}</h5>
							<div className="stat">
								<div>
									<h5>Repos</h5>
									<span>{result?.public_repos}</span>
								</div>
								<div>
									<h5>Followers</h5>
									<span>{result?.followers}</span>
								</div>
								<div>
									<h5>Following</h5>
									<span>{result?.following}</span>
								</div>
							</div>
							<div className="links">
								<div className={result.location ? "" : "disabled"}>
									<img src={location} alt="location icon" />
									<h6>{result.location || "Not specified"}</h6>
								</div>
								<div className={result.twitter_username ? "" : "disabled"}>
									<img src={twitter} alt="location icon" />
									<h6>{result.twitter_username || "Not specified"}</h6>
								</div>
								<div className={result.html_url ? "" : "disabled"}>
									<img src={website} alt="location icon" />
									<h6>
										<a
											href={result.html_url || "#"}
											target="_blank"
											rel="noreferrer"
										>
											{"Github" || "Not specified"}
										</a>
									</h6>
								</div>
								<div className={result.company ? "" : "disabled"}>
									<img src={work} alt="location icon" />
									<h6>{result.company || "Not specified"}</h6>
								</div>
							</div>
						</div>
					</section>
				) : (
					<div className="no-result">{result.message}</div>
				))}
		</>
	);
}
