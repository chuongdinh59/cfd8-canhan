const { useState } = require("react")

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const urlRegexp = /^$/
const phoneRegexp = /^$/


export const useForm = (initialValue = {}) => {
    const [form, setForm] = useState(initialValue)

    const rules = {}
    const messages = {}

    const [error, setError] = useState({})

    const onChange = (name) => (ev) => {
        setForm({
            ...form,
            [name]: ev.currentTarget.value
        })
    }

    const validate = () => {
        const errorOBject = {}
        for(let i in rules){
            const r = rules[i]
            const m = messages[i]

            if(r.required && !form[i]){
                errorOBject[i] = m?.required || `${i} la bat buoc`
                continue;
            }

            if(r.pattern){
                let pattern = r.pattern
                if(pattern === 'email'){
                    pattern = emailRegexp
                }

                if(!pattern.test(form[i])){
                    errorOBject[i] = m?.pattern || `${i} khong dung dinh dang`
                }
            }
            

        }
        setError(errorOBject)
        return errorOBject
    }

    const register = (name, option = {}, message = {}) => {

        rules[name] = option

        messages[name] = message

        return {
            name,
            onChange: onChange(name),
            value: form[name]
        }
    }

    const handleSubmit = (submitFun) => {
        return (ev) => {
            ev.preventDefault()

            const errorOBject = validate()

            if(Object.keys(errorOBject).length === 0){
                submitFun(form)
            }
        }
    }

    return {
        register,
        handleSubmit,
        error,
        form,
        setForm
    }
}