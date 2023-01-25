import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import "./App.css";

import CardUpdate from "./fetch.js";

function App() {
	return (
		<ChakraProvider>
			<div>Hello World</div>
			
=======
import CardGrid from "./components/CardGrid";
import theme from "./theme";
import TotalCO2 from "./components/TotalCO2";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Container w={"90vw"} paddingBlockEnd={10}>
				<TotalCO2 />
				<CardGrid />
			</Container>
<CardUpdate />
		</ChakraProvider>
	);
}

export default App;
