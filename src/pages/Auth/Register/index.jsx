import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../component/Button/Button';
import Input from '../../../component/Input';
import { useForm } from '../../../hooks/useForm';
import authService from '../../../service/authService' 
function Register(props) {
    const { register, error, form } = useForm()
    const [isFetching, setIsFetching] = useState(false) 
    const {login} = useSelector(store => store.auth)
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()
        setIsFetching(true)

        console.log(form);
        const status = await authService.register(form)

        console.log(status);
        if (status?.error) {
            alert(status.error)
            form.username = ''
            form.password = ''
            form.name = ''
            setIsFetching(false)
            return 
        }
        if (window.confirm('Bạn có muốn đăng nhập ngay bây giờ'))
        {
            navigate('/login')
        }
        else
        {   
            navigate('/')
        }
        setIsFetching(false)
        return;

    }
    if (login) {
        navigate('/')
    }
        return (
            <div className='login'>
                <div className="login__wrapper">
                    <h1>Sign Up</h1>
                    <form action="" className='login__form' onSubmit={handleRegister}>
                        <Input placeholder='Username' register= {register('username', {required: true, pattern: 'email'}, {require: 'chưa nhập username', pattern: 'username không hợp lệ'})} error={error}/>
                        <Input placeholder='Password' register={register('password', { required: true }, { require: 'chưa nhập password' })} error={error}/>
                        <Input placeholder='Fullname' register={register('name', { required: true }, { require: 'chưa nhập tên' })} error={error}/>
                    <Button  loading={isFetching} content={'Sign Up'} bgcolor='bright' color='white' size='medium'/>    
                    </form>
                </div>
            </div>
        );
}

export default Register;