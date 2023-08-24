import React from 'react';

function Button(props) {

    const buttonStyle = {
        width: '200px',
        padding: '10px 20px',
        backgroundColor: props.backgroundColor,
        borderRadius: '20px',
    };
    const label = props.label;


    return (<button style={buttonStyle}>{label}</button>
    )
}

export default Button;
