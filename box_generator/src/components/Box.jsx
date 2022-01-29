import React from 'react';

const Box = (props) => {
    const BoxStyling = {
        display: 'inline-block',
        backgroundColor: props.thisBox.BoxColor,
        margin: '5px',
        border: '5px solid black',
        height: props.thisBox.BoxHeight + 'px',
        width: props.thisBox.BoxWidth + 'px'
    }
    return <div style={BoxStyling}></div>;
}
export default Box;