import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import TotalCO2 from "./TotalCO2";
// import CardUpdate from "../fetch.js";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const CardGrid = () => {
	const [apiData, setApiData] = useState({ data: 1, time: 1000 });
	const [co2, setco2] = useState(0);

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
		const formattedCo2 = Math.floor(response.co2e);
		setco2(formattedCo2);
		console.log(formattedCo2);
	}

	return (
		<SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
			<Card borderWidth={2} borderColor="blackAlpha.900">
				<CardHeader display="grid" placeItems="center">
					<TotalCO2 co2={co2} />
					<Heading size="md">Network/API</Heading>
					<Text size="sm">Subtitle</Text>
				</CardHeader>
				<CardBody></CardBody>
				<CardFooter>
					<Button onClick={fetchRequest}>Update</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<Heading size="md"> Customer dashboard</Heading>
				</CardHeader>
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
				<CardFooter>
					<Button>Update</Button>
				</CardFooter>
			</Card>
		</SimpleGrid>
	);
};

export default CardGrid;
