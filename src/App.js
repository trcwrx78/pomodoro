import React, {useContext} from 'react';
import {Context} from './Context'
import './App.css';
import Timers from './Timers'

function App() {
  const {
    breakContext, 
    sessionContext, 
    timer, 
    currentTimer,
    convertSeconds,
    isPlaying,
    handlePlay, 
    handleReset
  } = useContext(Context)

  return (
    <div className="grid-container">
      <h1 className="set--h1">Pomodoro Clock</h1>
      <div className="flex-timer">
        <Timers {...breakContext}/>
        <Timers {...sessionContext}/>
      </div>
      <div className="set--countdown">
        <h2 id="timer-label">{currentTimer}</h2>
        <h3 id="time-left" className="counter">{convertSeconds(timer)}</h3>
        <button id="start_stop" onClick={handlePlay}>
          <i className={`fas fa-${isPlaying ? "pause" : "play"}`}></i>
        </button>
        <button id="reset" onClick={handleReset}>
          <i className="fas fa-sync"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
