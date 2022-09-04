import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

import '../../styles/task.scss'
import TaskForm from '../pure/forms/task'

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'Default task 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Default task 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Default task 3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([ defaultTask1, defaultTask2, defaultTask3 ])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("Task state has been modified")
        setLoading(false)
        return () => {
            console.log("TaskList component is going to unmount...")
        }
    }, [tasks])

    function completeTask(task) {
        console.log('Complete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [ ...tasks ]
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function removeTask(task) {
        console.log('Remove this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [ ...tasks ]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        console.log('Add this task:', task)
        const tempTasks = [ ...tasks, task ]
        setTasks(tempTasks)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div 
                        className='card-body'
                        data-mdb-perfect-scrollbar='true' 
                        style={{ position: 'relative', height: '400px' }}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task, index) => (
                                        <TaskComponent 
                                            task={ task }
                                            complete={ completeTask }
                                            remove={ removeTask }
                                            key={ index }
                                        ></TaskComponent>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={ addTask }></TaskForm>
        </div>
    )
}

export default TaskListComponent