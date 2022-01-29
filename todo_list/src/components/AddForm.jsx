import React, {useState} from 'react';

const AddForm = (props) => {
    const[task, setTask] = useState("");

    const addBox = (e) => {
        e.preventDefault();
        props.createToDoItem({
            toDoText: task
        })
        setTask("");
    }

    return(
        <form onSubmit={addBox}>
            <div>
                <label>Color: </label>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
            </div>
            <input type="submit" value="Add"/>
        </form>
    );
}
export default AddForm;