import { useContext, useState } from 'react'

import './App.css'
import ComplimentButton from './components/ComplimentButton'
import Emojis from './components/Emojis'
import { primaryContext } from './context/PrimaryContext'

function App() {

  const { currentMood, compliments } = useContext(primaryContext);

  return (
    <>
      <ComplimentButton />
      <Emojis />
    </>
  )
}

export default App
