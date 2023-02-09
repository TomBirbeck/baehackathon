import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Open Sans', sans-serif`,
	},
	styles: {
		global: () => ({
			"html, body": {
				height: "100%",
				bg: "#F9FAFB",
			},
		}),
		colors: {
			transparent: "transparent",
			black: "#000234",
			white: "#fff",
			theme: {
				100: "##E2CFEA",
				300: "##A06CD5",
				500: " #6247AA",
				700: " #102B3F",
				900: " #062726",
			},
		},
	},
});

//Breakpoints for responsive design
//  {
//   sm: "30em",
//   md: "48em",
//   lg: "62em",
//   xl: "80em",
//   "2xl": "96em",
// }

export default theme;
