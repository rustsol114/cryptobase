import React, { useState, useEffect, createContext } from "react";

const getInitialTheme = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedprefs = window.localStorage.getItem("color-theme");
		if (typeof storedprefs === "string") {
			return storedprefs;
		}
		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "dark";
		}
	}
	return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
	const [theme, setTheme] = useState(getInitialTheme);

	const rawsetTheme = (theme) => {
		const root = window.document.documentElement;
		const isDark = theme === "dark";

		root.classList.remove(isDark ? "light" : "dark");
		root.classList.add(theme);

		localStorage.setItem("color-theme", theme);
	};

	if (initialTheme) {
		rawsetTheme(initialTheme);
	}

	useEffect(() => {
		rawsetTheme(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
