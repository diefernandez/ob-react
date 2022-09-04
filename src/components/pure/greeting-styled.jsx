import React, { useState } from 'react'

const loggedStyle = {
    color: 'blue',
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold',
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ? (<p>Hola, { props.name }</p>) : (<p>Please login</p>) }
            
            <button onClick={ () => setLogged(!logged) }>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    )
}

export default GreetingStyled