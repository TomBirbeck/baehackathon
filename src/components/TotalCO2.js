import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const TotalCO2 = () => {
	return (
		<CircularProgress value={40} color="green.400" size={50}>
			<CircularProgressLabel>40kgCo2e</CircularProgressLabel>
		</CircularProgress>
	);
};

export default TotalCO2;
