import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from  './components/Player'
import Display from './components/Display'
import { PlayerContext } from './content/PlayerContext'
const App = () => {

  const {audioRef,track} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload = 'audio'></audio>
    </div>
  )
}

export default App