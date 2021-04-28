import React, { useState } from 'react'
import CheckBox from './components/CheckBox'

function App() {
    const [check, setCheck] = useState(false);
    const onChange = (e) => {
        setCheck(e.target.checked);
    }
    return (
        <CheckBox onChange={onChange} checked ={check}>다음약관에 동의</CheckBox>
    )
}

export default App
