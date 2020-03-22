import React from 'react'

function Timers(props) {
    return(
        <div className="set--timers">
            <h2 id={`${props.title.toLowerCase()}-label`}>{props.title} Length</h2>
            <button id={`${props.title.toLowerCase()}-increment`} onClick={props.handleIncrease}>
                <i className="fas fa-chevron-up"></i>
            </button>
            <span id={`${props.title.toLowerCase()}-length`}className="counter">{props.count}</span>
            <button id={`${props.title.toLowerCase()}-decrement`} onClick={props.handleDecrease}>
                <i className="fas fa-chevron-down"></i>
            </button>
        </div>
    )
}

export default Timers