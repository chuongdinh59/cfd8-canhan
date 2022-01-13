import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../../actions';
import Button from '../../../component/Button/Button';
import Input from '../../../component/Input';
import { useForm } from '../../../hooks/useForm';
import './style.scss';
function Login(props) {
    const [fetch, setFetch] = useState(false)
    const { register, error, form, validate } = useForm()
    const dispatch = useDispatch()
    const { login } = useSelector(store => store.auth)
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        setFetch(true)
        const errorObject = validate()
        if (Object.keys(errorObject).length === 0) {
            dispatch(loginAction(form))
        }
        setFetch(false)
        return;
    }
    if (login) {
        navigate('/')
    }
    return (
        <div className='login'>
            <div className="login__wrapper">
                <h1>Login</h1>
                <form action="" className='login__form' onSubmit={handleLogin}>
                    <Input placeholder='Username' register= {register('username', {required: true, pattern: 'email'}, {require: 'chưa nhập username', pattern: 'username không hợp lệ'})} error={error}/>
                    <Input placeholder='Password' register={register('password', { required: true }, { require: 'chưa nhập password' })} error={error}/>
                <Button loading={fetch} content={'Sign in'} bgcolor='bright' color='white' size='medium'/>    
                </form>
            </div>
        </div>
    );
}   

export default Login;
