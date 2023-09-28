import { createContext, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = (props) => {
	const [currentMood, setCurrentMood] = useState("");
	const [compliments, setCompliments] = useState("");

	return (
		<primaryContext.Provider value={{ currentMood, setCurrentMood, compliments, setCompliments }}>
			{props.children}
		</primaryContext.Provider>
	);
};

export default PrimaryProvider;
