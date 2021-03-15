import React from 'react';

function User({ user, onRemove, onToggle }){
    const { name, nickname, id, active } = user;
    const style ={
        background: active ? '#8904B1' : '#FFFF00'
    };

    return (
        <div style={style} onClick={()=>onToggle(id)}>
            {name}
            &nbsp;
            {nickname}
            <button onClick={()=> onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
       <div>
           {
               users.map(user => (
                   <User
                    key={user.id} 
                    user={user}
                    onRemove={onRemove}
                    onToggle={onToggle}
                   />
                ))
           }
       </div> 
    );
}

export default UserList;