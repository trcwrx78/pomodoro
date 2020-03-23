import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [breakCount, setBreakCount] = useState(5)
    const [sessionCount, setSessionCount] = useState(25)
    const [timer, setTimer] = useState(25*60)
    const [currentTimer, setCurrentTimer] = useState('Session')
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = document.getElementById('beep')
    let loop

    useEffect(() => {
        if(isPlaying && timer > 0) {
            loop = setInterval(() => {
                    setTimer(time => time - 1)
                    }, 1000)
        } else if(timer === 0) {
            setCurrentTimer(prev => prev === 'Session' ? 'Break' : 'Session')
            setTimer(currentTimer === 'Session' ? breakCount * 60 : sessionCount * 60 )
            audio.play()
        }
        return () => clearInterval(loop)
    }, [isPlaying, timer])

    const breakContext = {
        title: "Break",
        count: breakCount,
        handleDecrease: () => handleChange(-1, 'Break'),
        handleIncrease: () => handleChange(1, 'Break')
    }

    const sessionContext = {
        title: "Session",
        count: sessionCount,
        handleDecrease: () => handleChange(-1, 'Session'),
        handleIncrease: () => handleChange(1, 'Session')
    }

    function convertSeconds(count) {
        const minutes = Math.floor( count / 60 )
        const seconds = count % 60
        return (
            `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        )
    }

    function handleChange(count, timerType) {
        let newCount

        if(timerType === 'Session') {
            newCount = sessionCount + count
        } else {
            newCount = breakCount + count
        }

        if(newCount > 0  && newCount < 61 && !isPlaying) {
            if(timerType === 'Break') {
                setBreakCount(newCount)
            } else if (timerType === 'Session') {
                setSessionCount(newCount)
                setTimer(newCount * 60)
            }
        }
    }

    function handlePlay() {
        setIsPlaying(prev => !prev)
        clearInterval(loop)
    }

    function handleReset() {
        setBreakCount(5)
        setSessionCount(25)
        setTimer(25 * 60)
        setCurrentTimer('Session')
        setIsPlaying(false)

        clearInterval(loop)

        audio.pause();
        audio.currentTime = 0;
    }

    return (
        <Context.Provider value={{
            breakContext,
            sessionContext,
            timer,
            currentTimer,
            isPlaying,
            convertSeconds,
            handleChange,
            handlePlay,
            handleReset
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}