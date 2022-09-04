import React, { useEffect, useState } from 'react'

const Clock = () => {

    const initialClockData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    };

    const [clockData, setClockData] = useState(initialClockData)

    useEffect(() => {
        const timerID = setInterval (() => updateClockData(), 1000)
    
        return () => {
            clearInterval(timerID);
        }
    })
    
    const updateClockData = () => {
        setClockData({
            ...clockData,
            fecha: new Date(),
            edad: clockData.edad + 1,
        })
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {clockData.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clockData.nombre} {clockData.apellidos}</h3>
            <h1>Edad: {clockData.edad}</h1>
        </div>
    )
}

export default Clock;