import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import Select from '../Select';
import TextField from '../TextField';
import Button from '../Button'
import './style.scss'

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/i
const option1 = ['IT', 'Designer', 'Devops', 'Other']
const option2 = []
for (let i = 0; i < 50; i++){
    option2.push(2022 - i);
}
function Form(props) {

    
    const [form, setForm] = useState({
        username: '',
        password: '',
        confrimPass: '',
        name: '',
        branch: '',
        year: '',
        agree:  false,
      
    })
    const [error, setError] = useState({
        username: '',
        password: '',
        confrimPass: '',
        name: '',
        branch: '',
        year: '',
        agree: false,
    })
    const submit = (e) => {
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

        if (!form.confrimPass) {
            errorObj.confrimPass = "*Password không được để trống"
        }
        else if (form.password != form.confrimPass) {
            errorObj.confrimPass = "Password không đúng "

        }


        if (form.name.split(' ') < 2) {
            errorObj.name = "Name hợp lệ "

        }
        if (!form.branch) {
            errorObj.branch = "Branch không được bỏ trống "
        }
        if (!form.year) {
            errorObj.year = "Năm sinh không được bỏ trống "
        }
        if (!form.agree) {
            errorObj.agree = "Xác thực chấp nhận điều khoản "

        }

        console.log(form);
        setError(errorObj);

        if (Object.keys(errorObj).length === 0) {
            alert("OKK")
            console.log(10);
        }

    }
    const onChange = (name) => (ev) => {
       
        setForm({
            ...form,
            [name]: ev.currentTarget.value,
            agree: ev.currentTarget.checked || false
        }
            )
    }
    
        return (
        <div className='checkout-page'>
            <div className="form-wrap">
                <h1>REGISTER</h1>
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
                    <TextField
                        label='Confirm Password'
                        value={form.confrimPass}
                        onChange={onChange('confrimPass')}
                        placeholder = 'Password'
                        error={error.confrimPass}
                        type = 'text'

                    />
                    <TextField
                        label='Name'
                        value={form.name}
                        onChange={onChange('name')}
                        placeholder = 'Name'
                        error={error.name}
                        type = 'text'

                    />
                    <div className="select-box">
                        <Select
                            label="Ngành"
                            value={form.branch}
                            onChange={onChange('branch')}
                            error={error.branch}
                            option = {option1}
                        />
                        <Select
                            label="Năm sinh"
                            value={form.year}
                            onChange={onChange('year')}
                            error={error.year}
                            option = {option2}
                        />
                    </div>
                    <Checkbox
                        content="Bạn có chấp nhận tất cẩ điều khoản chủa chúng tôi"
                        value={form.agree}
                        error={error.agree}
                        onChange = {onChange('agree')}
                    />
                <Button content = "submit" bgcolor = "store" size='medium'  />
                </form>
            </div>
        </div>
    );
}

export default Form;