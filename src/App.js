import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import CardUpdate from "./fetch.js";

function App() {
	return (
		<ChakraProvider>
			<div>Hello World</div>
			<CardUpdate />
		</ChakraProvider>
	);
}

export default App;
