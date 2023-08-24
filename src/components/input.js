import React from 'react';

function Input(props) {

    const inputStyle = {
        margin: '5px',
        borderRadius: props.borderRadius,
        borderWidth: props.borderWidth,
        border:props.border,
        borderBottom: props.borderBottom,
        color: props.color,
        backgroundColor: props.backgroundColor,
        fontSize : '14px',
        borderColor: "#000000",
        placeholder: { 
            color: "#000000",
            opacity: 3
        }
    };
    const inputId = props.inputId;
    const placeHolder = props.placeHolder;


    return (<input type="text" style={inputStyle} id={inputId} placeholder={placeHolder} />
    )
}

export default Input;
