import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    //setState 함수 사용법 2가지
    const onIncrease = () => {
        //1. 다음 상태값을 넣어줄 수 있음
        setCount(count+1);
    }
    const onDecrease = () => {
        //2. 업데이트 함수를 사용할 수 있음(최적화 관련필요)
        setCount(prevNumber => prevNumber-1);
    }
    return (
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
        </>
    );
}
export default Counter;