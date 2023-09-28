import React, { useContext } from 'react'
import { primaryContext } from '../../context/PrimaryContext';

const ComplimentButton = () => {

	const { compliments, setCompliments, setCurrentMood } = useContext(primaryContext);

	const handleCompliment = () => {
		if (compliments + 1 < 5) {
			setCurrentMood("sad");
		} else if (compliments + 1 <= 9) {
			setCurrentMood("fine");
		} else {
			setCurrentMood("happy");
		}
		setCompliments(prevCompliments => prevCompliments + 1);
	};
	return (
		<>
			<button onClick={handleCompliment}>Give a compliment!</button>
		</>
	)
}

export default ComplimentButton