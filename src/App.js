import React from 'react';
import './App.css';
import Timers from './Timers'

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Timers />
      <Timers />
      <div>
        <h3 id="timer-label">Session</h3>
        <h3 id="time-left">25:00</h3>
        <button id="start_stop">
        <i class="fas fa-play"></i>
        {
        //<i class="fas fa-pause"></i>
        }
        </button>
        <button id="reset">
          <i class="fas fa-sync"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
