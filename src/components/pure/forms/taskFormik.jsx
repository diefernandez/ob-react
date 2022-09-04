import React from 'react'
import PropTypes from 'prop-types'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskFormik = ({ add, length }) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
    }

    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        description: Yup.string()
            .required('Description is required'),
        level: Yup.string()
            .oneOf([ LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT ], 'You must select a task level')
            .required('Level is required'),
    })

    function addTask(values) {
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        )
        add(newTask)
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold',
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold',
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold',
    }

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ taskSchema }
            onSubmit={ addTask }
        >
            <Form  className='d-flex justify-content-center align-items-center mb-4'>
                <label htmlFor='inputName'>Name</label>
                <Field 
                    id='inputName' 
                    name='name' 
                    type='text' 
                    className='form-control form-control-lg' 
                    placeholder='Task name'
                ></Field>
                <ErrorMessage name='name' component='div'></ErrorMessage>

                <label htmlFor='inputDescription'>Description</label>
                <Field 
                    id='inputDescription' 
                    name='description' 
                    type='text' 
                    className='form-control form-control-lg' 
                    placeholder='Task description'
                ></Field>
                <ErrorMessage name='description' component='div'></ErrorMessage>

                <label htmlFor='selectLevel'>Level</label>
                <Field 
                    id='selectLevel' 
                    name="level" 
                    as='select' 
                    defaultValue={ LEVELS.NORMAL }
                    className='form-control form-control-lg'
                >
                    <option value={ LEVELS.NORMAL } style={ normalStyle }>Normal</option>
                    <option value={ LEVELS.URGENT } style={ urgentStyle }>Urgent</option>
                    <option value={ LEVELS.BLOCKING } style={ blockingStyle }>Blocking</option>
                </Field>
                <ErrorMessage name='level' component='div'></ErrorMessage>

                <button type='submit' className='btn btn-success btn-lg m-2'>
                    { length > 0 ? 'Add new task' : 'Create your first task' }
                </button>
            </Form>
        </Formik>
    )
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskFormik