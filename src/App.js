import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
	return (
		<ThemeProvider>
			<Navbar />
		</ThemeProvider>
	);
};

export default App;
