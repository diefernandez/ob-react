import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Username too short')
            .max(12, 'Username too long')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password too short')
            .required('Password is required'),
        confirm: Yup.string()
            .when('password', {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().equals([Yup.ref('password')], 'Passwords must match')
            })
            .required('You must confirm the password'),
        role: Yup.string()
            .oneOf([ ROLES.USER, ROLES.ADMIN ], 'You must select a role user/admin')
            .required('Role is required'),
    })

    const submit = async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={ registerSchema }
                onSubmit={ submit }
            >
                {
                    ({ touched, errors, isSubmitting }) => {
                        return (
                            <Form>
                                <label htmlFor='username'>Username</label>
                                <Field 
                                    id='username' 
                                    name='username' 
                                    placeholder='Username'
                                ></Field>
                                {
                                    errors.username && touched.username && 
                                    (
                                        <ErrorMessage name='username' component='div'></ErrorMessage>
                                    )
                                }

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

                                <label htmlFor='confirm'>Confirm Password</label>
                                <Field 
                                    id='confirm' 
                                    name='confirm' 
                                    placeholder='Confirm Password' 
                                    type='password'
                                ></Field>
                                {
                                    errors.confirm && touched.confirm && 
                                    (
                                        <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                    )
                                }

                                <button type='submit'>Register Account</button>

                                { isSubmitting && (<p>Sending your credentials...</p>)}
                            </Form>
                        )
                    }   
                }
            </Formik>
        </div>
    )
}

export default RegisterFormik