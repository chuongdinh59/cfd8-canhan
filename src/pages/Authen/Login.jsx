import React, { useState } from 'react';
import Button from '../../Component/Button';
import TextField from '../../Component/TextField';
import '../../Component/Form/style.scss';
import { delay } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/i

function Login(props) {
    
    // const { handleLogin } = useAuth()
   
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        password: '',
        
    })
    const [error, setError] = useState({
        username: '',
        password: '',
       
    })
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch({
            type: 'LOGIN',
            payload: form
        })
    }

    const [isFetching, setFetching] = useState (false)
    const submit = async (e) => {
        e.preventDefault();
        let errorObj = {}
        if (!form.username.trim()) {
            errorObj.username = "*Username không được bỏ trống"
        }
        else if (!regexEmail.test(form.username.trim())) {
            errorObj.username = "*Username không phải là email"
        }
        

        if (!form.password) {
            errorObj.password = "*Password không được để trống"
        }
        else if (form.password.length < 6 || form.password.length > 32 || !regexPassword.test(form.password)) {
            errorObj.password = "*Password không hợp lệ "
            
        }

        
        setError(errorObj);

        if (Object.keys(errorObj).length === 0) {
            setFetching(true);
            await delay(2000)
            setFetching(false);
            handleLogin()
            console.log(1);
            navigate('/profile')
        }

    }
    const onChange = (name) => (ev) => {
       
        setForm({
            ...form,
            [name]: ev.currentTarget.value,
           
        }
            )
    }
    
        return (
        <div className='checkout-page'>
            <div className="form-wrap">
                <h1>Login</h1>
                <form action="" onSubmit={submit} >
                    <TextField
                        label='Username'
                        value={form.username}
                        onChange={onChange('username')}
                        placeholder = 'Email'
                        error={error.username} 
                        type = 'text'
                        
                        />
                  
                    <TextField
                        label='Password'
                        value={form.password}
                        onChange={onChange('password')}
                        placeholder = 'Password'
                        error={error.password}
                        type = 'text'

                    />
                <Button loading={isFetching} content = "submit" bgcolor = "store" size='medium'  />
                </form>
            </div>
        </div>
    );
}

export default Login;