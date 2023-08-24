import React from 'react';

function Image(props) {

    const imageStyle = {
        backgroundImage: props.backgroundImage,
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
        objectFit: 'fill',

    };

    const src = props.src
    return (<img src={src} style={imageStyle} alt="Pic"/>
    )
}

export default Image;
