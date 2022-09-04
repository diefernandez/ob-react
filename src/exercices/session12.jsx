import React, { useState } from 'react';

const Square = () => {
    const [color, setColor] = useState('rgb(0,0,0)');
    const [changeColorInterval, setChangeColorInterval] = useState(0);

    const generateColor = () => {
        const red = parseInt(Math.random() * 256)
        const green = parseInt(Math.random() * 256)
        const blue = parseInt(Math.random() * 256)
        return setColor(`rgb(${red}, ${green}, ${blue})`);
    };

    const startColorChange = () => {
        const interval = setInterval(generateColor, 300)
        return setChangeColorInterval(interval);
    };

    const stopColorChange = () => {
        return clearInterval(changeColorInterval);
    };

    const toggleColorChange = () => {
        stopColorChange()
        generateColor()
    }

    return (
        <div>
            <div
                id="square"
                onMouseOver={startColorChange}
                onMouseLeave={stopColorChange}
                onDoubleClick={toggleColorChange}
                style={{ width: '255px', height: '255px', backgroundColor: color }}
            ></div>
            <p>Color: {color} </p>
        </div>
    );
}

export default Square;