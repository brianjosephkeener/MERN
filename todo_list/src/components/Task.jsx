/*
ORIGINAL CODE DO NOT ALTER
import React, {useState} from 'react';

const Task = (props) => {
    const TaskStyling = {
        display: 'inline-block',
        backgroundColor: 'red',
        margin: '5px',
        border: '5px solid black',
        height: '150px',
        width: '150px'
    }
    return <div style={TaskStyling}>{props.thisTask.toDoText}</div>;
}
export default Task;

*/

import React, {useState} from 'react';

const Task = (props) => {
    const TaskStyling = {
        display: 'inline-block',
        backgroundColor: 'red',
        margin: '5px',
        border: '5px solid black',
        height: '150px',
        width: '150px'
    }
    return( <form onSubmit={console.log('test fire')}>
        <input type="button" value={props.thisTask.toDoText} />
    </form>
    )
}
export default Task;