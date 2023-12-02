import React from 'react';
import { ITask } from '../interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const todoTask = ({ task, completeTask }: Props) => {
    return (
        <div className='task'>
            <div className="content">
                <span>{task.taskName}</span>
            </div>
            <div className="">
                <button onClick={() => {
                    completeTask(task.taskName);
                }} 
                    className='task-done-button'>X
                </button>
            </div>

        </div>
    )
}

export default todoTask;