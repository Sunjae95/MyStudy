import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

    const dispatch = useDispatch();

    //안에서 데이터를 바꾸려면 state를 사용
    const [ Email, setEmail ] = useState("");
    const [ Name, setName ] = useState("");
    const [ Password, setPassword ] = useState("");
    const [ ConfirmPassword, setComfirmPassword ] = useState("");

    const onEmailHandler = (event) =>{
       setEmail(event.currentTarget.value); 
    }
    
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event) => {
        setComfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();     //자동으로 refresh되는것을 막기위함
        
        if( Password !== ConfirmPassword ) {    //비밀번호 확인
            return alert('비밀번호와 비밀번호 확인은 같아야합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name,
        }
        //action -> reducer -> store
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/login');
            } else {
                alert('Failed to sign up');
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
           
           <label>Name</label>
           <input type="text" value={ Name } onChange={ onNameHandler }/>
           
           <label>Password</label>
           <input type="password" value={ Password } onChange={ onPasswordHandler }/>
           
           <label>ConfirmPassword</label>
           <input type="password" value={ ConfirmPassword } onChange={ onConfirmPasswordHandler }/>
           <br />
           <button>
               회원가입
           </button>
           </form> 
        </div>
    )
}

export default withRouter(RegisterPage);
