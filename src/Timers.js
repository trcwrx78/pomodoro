import React from 'react'

function Timers() {
    return(
        <div className="set--timers">
            <h2 id="break-label">Break Length</h2>
            <button id="break-increment">
                <i className="fas fa-chevron-up"></i>
            </button>
            <p id="break-length">5</p>
            <button id="break-decrement">
                <i className="fas fa-chevron-down"></i>
            </button>
        </div>
    )
}

export default Timers