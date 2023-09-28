import React, { useContext } from 'react'
import { primaryContext } from '../../context/PrimaryContext'

const Emojis = () => {

	const { currentMood } = useContext(primaryContext);
	return (
		<>
			<div>{
				currentMood === "happy" ? "😃"
					: currentMood === "fine" ? "😐"
						: "😞"}</div>
		</>
	)
}

export default Emojis