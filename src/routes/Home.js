import React from "react";
import CoinSearch from "../components/CoinSearch";

const Home = ({ coins }) => {
	return (
		<div>
			<CoinSearch coins={coins} />
		</div>
	);
};

export default Home;
