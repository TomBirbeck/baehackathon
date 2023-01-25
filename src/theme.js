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
			black: "#000",
			white: "#fff",
			gray: {
				50: "#f7fafc",
				900: "#171923",
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
