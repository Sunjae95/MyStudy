import React from 'react'

function CreateUser({ name, nickname, onChange, onCreate }) { 
    const style ={
        background: '#01DFD7'
    };
    

    return (
        <div style={style}>
            <input 
                name="name" 
                placeholder="이름" 
                value={name}
                onChange={onChange}
            />    
            <input 
                name="nickname" 
                placeholder="닉네임" 
                value={nickname}
                onChange={onChange}    
            />
            <button onClick={onCreate}>생성</button>
            
        </div>
    );
}

export default CreateUser;
