import React, {useState} from 'react';

const BoxForm = (props) => {
    const[color, setColor] = useState("");
    const[height, setHeight] = useState(0);
    const[width, setWidth] = useState(0);

    const addBox = (e) => {
        e.preventDefault();
        props.createBox({
            BoxColor: color,
            BoxHeight: height,
            BoxWidth: width,
        })
        setColor("");
        setHeight(0);
        setWidth(0);
    }

    return(
        <form onSubmit={addBox}>
            <div>
                <label>Color: </label>
                <input type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            </div>
            <div>
                <label>Height in Pixels: </label>
                <input type="text" onChange={(e) => setHeight(e.target.value)} value={height}/>
            </div>
            <div>
                <label>Width in Pixels: </label>
                <input type="text" onChange={(e) => setWidth(e.target.value)} value={width}/>
            </div>
            <input type="submit" value="Add"/>
        </form>
    );
}
export default BoxForm;