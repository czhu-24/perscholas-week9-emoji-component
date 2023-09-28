import React, { useContext } from 'react'
import { primaryContext } from '../../context/PrimaryContext'

const Emojis = () => {

	const { currentMood, compliments } = useContext(primaryContext);
	return (
		<>
			<div>{currentMood === "happy" : }</div>
		</>
	)
}

export default Emojis