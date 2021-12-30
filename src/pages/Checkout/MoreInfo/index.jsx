import React, { forwardRef, useImperativeHandle } from 'react';
import { useForm } from '../../../hooks/useForm';
import BillHeading from '../BillHeading';
import './style.scss';
const MoreInfo = forwardRef((props, ref) => {
     const { register, form, validate } = useForm()

    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])
    return (
        <div className='more__info form'>
            <BillHeading title='Additional informations' desc='Need something else? We will make it for you!' step={4}/>
            <form className="form__more">
                <p className="form__title">
                    Order notes
                </p>
                <textarea {...register('note', {require: false})} className='form__text' placeholder='Need a specific delivery day? Sending a gitf? Let’s say ...'></textarea>
            </form>
        </div>
    );
})

export default MoreInfo;