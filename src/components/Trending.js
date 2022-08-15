import axios from "axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
	const [trending, setTrending] = useState([]);

	const url = "https://api.coingecko.com/api/v3/search/trending";

	useEffect(() => {
		axios.get(url).then((response) => {
			setTrending(response.data.coins);
			// console.log(response.data.coins);
		});
	}, [url]);

	return (
		<div className="rounded-div my-12 py-8 text-primary">
			<h1 className="text-2xl py-4 font-bold">Trending Coins</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{trending.map((coin) => (
					<div
						key={coin.item.id}
						className="rounded-div flex justify-between p-4 hover:scale-105 ease-in duration-300"
					>
						<div className="flex w-full justify-between items-center">
							<div className="flex">
								<img
									className="rounded-full mr-4"
									src={coin.item.small}
									alt={coin.item.name}
								/>
								<div>
									<p className="font-bold">{coin.item.name}</p>
									<p>{coin.item.symbol}</p>
								</div>
							</div>
							<div className="flex items-center">
								<img
									className="w-4 mr-2 rounded-full"
									src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
									alt="/"
								/>
								<p>{coin.item.price_btc.toFixed(7)}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Trending;
