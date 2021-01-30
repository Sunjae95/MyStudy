import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();

    //안에서 데이터를 바꾸려면 state를 사용
    const [ Email, setEmail ] = useState("");
    const [ Password, setPassword ] = useState("");

    const onEmailHandler = (event) =>{
       setEmail(event.currentTarget.value); 
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();     //자동으로 refresh되는것을 막기위함
        
        let body = {
            email: Email,
            password: Password,
        }
        //action -> reducer -> store
        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess) {
                props.history.push('/');
            } else {
                alert('Error');
            }
        });
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
           <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={ onSubmitHandler }>
           <label>Email</label> 
           <input type="email" value={ Email } onChange={ onEmailHandler }/>
           <label>Password</label>
           <input type="password" value={ Password } onChange={ onPasswordHandler }/>
           <br />
           <button>
               Login
           </button>
           </form> 
        </div>
    )
}
export default withRouter(LoginPage);