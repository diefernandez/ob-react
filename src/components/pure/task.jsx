import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Created task")
        return () => {
            console.log(`Task ${task.name} is going to unmount...`)
        }
    }, [task])
    
    // Function that returns a Badge depending on task level
    function taskLevelBadge() {
        switch(task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { task.level }
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                )
            default:
                break
        }
    }

    // Function that returns icon depending on task completion
    function taskIconCompleted() {
        if(task.completed) {
            return (
                <i 
                    className='bi-toggle-on task-action' 
                    style={{ color: 'green' }} 
                    onClick={ () => complete(task) }
                ></i>
            )
        }
        return (
            <i 
                className='bi-toggle-off task-action' 
                style={{ color: 'grey' }} 
                onClick={ () => complete(task) }
            ></i>
        )
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{ task.name }</span>
            </td>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                <span>{ taskLevelBadge() }</span>
            </td>
            <td className='align-middle'>
                { taskIconCompleted() }
                <i 
                    className='bi-trash task-action' 
                    style={{ color: 'tomato' }}
                    onClick={ () => remove(task) }
                ></i>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent