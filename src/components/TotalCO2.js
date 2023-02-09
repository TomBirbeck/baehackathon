import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const TotalCO2 = ({co2}) => {
	return (
		<CircularProgress value={co2} color="green.400" size={500}>
			<CircularProgressLabel>{co2}kgCo2e</CircularProgressLabel>
		</CircularProgress>
	);
};

export default TotalCO2;
