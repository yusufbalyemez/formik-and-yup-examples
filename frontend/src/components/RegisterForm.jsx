import React from 'react'
import { useFormik } from 'formik';

const RegisterForm = () => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form className='form'>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input
                        type='text'
                        id="email"
                        placeholder='Email Giriniz'
                        value={values.email}
                        onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Yaş</label>
                    <input
                        type='number'
                        id="age"
                        placeholder='Yaşınızı Giriniz'
                        value={values.age}
                        onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Şifre</label>
                    <input
                        type='password'
                        id="password"
                        placeholder='Şifrenizi Giriniz'
                        value={values.password}
                        onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Şifre Tekrarı</label>
                    <input
                        type='password'
                        id="confirmPassword"
                        placeholder='Şifrenizi Tekrar Giriniz'
                        value={values.confirmPassword}
                        onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                        <input
                        style={{width:'20px', height:'12px'}}
                            type='checkbox'
                            id="term"
                            value={values.term}
                            onChange={handleChange} />
                        <label>Kullanıcı Sözleşmesini kabul ediyorum.</label>
                    </div>
                </div>
                <button className='save-button'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm