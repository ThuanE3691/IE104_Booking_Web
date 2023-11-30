import { createContext, useState } from "react";
export const ConfigContext = createContext();

const ConfigContextProvider = ({ children }) => {
	const [scrollHistory, setScrollHistory] = useState({
		x: 0,
		y: 0,
	});

	const saveScrollHistory = ({ x, y }) => {
		setScrollHistory({ ...scrollHistory, x: x, y: y });
	};

	const ConfigContextData = {
		scrollHistory,
		setScrollHistory,
		saveScrollHistory,
	};

	return (
		<ConfigContext.Provider value={ConfigContextData}>
			{children}
		</ConfigContext.Provider>
	);
};

export default ConfigContextProvider;
