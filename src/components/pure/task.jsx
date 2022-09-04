import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task }) => {

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
            return (<i className='bi-toggle-on' style={{ color: 'green' }}></i>)
        }
        return (<i className='bi-toggle-off' style={{ color: 'grey' }}></i>)
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
                <i className='bi-trash' style={{ color: 'tomato' }}></i>
            </td>
        </tr>

        // <div>
        //     <h2 className='task-name'>Name: { task.name }</h2>
        //     <h3>Description: { task.description }</h3>
        //     <h4>Level: { task.level }</h4>
        //     <h5>This task is: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        // </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent