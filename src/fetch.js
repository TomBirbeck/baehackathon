import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function CardUpdate() {
	const [apiData, setApiData] = useState({ data: 10, time: 1000 });

	async function fetchRequest() {
		const apiBodyData = {
			emission_factor: {
				activity_id: "memory-provider_aws-region_af_south_1",
			},
			parameters: {
				data: apiData.data,
				data_unit: "GB",
				time: apiData.time,
				time_unit: "m",
			},
		};

		const data = await fetch("https://beta3.api.climatiq.io/estimate", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${API_KEY}`,
			},
			body: JSON.stringify(apiBodyData),
		});
		const response = await data.json();
		console.log(response);
	}

	return (
		<div>
			<button onClick={fetchRequest}>Test</button>
		</div>
	);
}
