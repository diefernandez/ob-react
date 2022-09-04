import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required'),
    })

    const submit = async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
        localStorage.setItem('credentials', JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                onSubmit={ submit }
            >
                {
                    ({ touched, errors, isSubmitting }) => {
                        return (
                            <Form>
                                <label htmlFor='email'>Email</label>
                                <Field 
                                    id='email' 
                                    name='email' 
                                    placeholder='example@email.com' 
                                    type='email'
                                ></Field>
                                {
                                    errors.email && touched.email && 
                                    (
                                        <ErrorMessage name='email' component='div'></ErrorMessage>
                                    )
                                }

                                <label htmlFor='password'>Password</label>
                                <Field 
                                    id='password' 
                                    name='password' 
                                    placeholder='Password' 
                                    type='password'
                                ></Field>
                                {
                                    errors.password && touched.password && 
                                    (
                                        <ErrorMessage name='password' component='div'></ErrorMessage>
                                    )
                                }

                                <button type='submit'>Login</button>

                                { isSubmitting && (<p>Login your credentials...</p>)}
                            </Form>
                        )
                    }   
                }
            </Formik>
        </div>
    )
}

export default LoginFormik