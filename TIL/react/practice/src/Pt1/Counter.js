import React, {useState} from 'react'

function Counter() {
    const [num, setNum] = useState(0);
    const style = {
        background: '#9AFE2E'
    }
    const onUp = () => {
        setNum(num+1);
    }
    const onDown = () => {
        setNum(num-1);
    }
    return (
        <div style={style}>
            <h1>{num}</h1>
            <button onClick={onUp}>+</button>
            <button onClick={onDown}>-</button>
        </div>
    )
}

export default Counter
