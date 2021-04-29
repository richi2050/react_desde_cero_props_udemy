import React from 'react'

export const Saludo = (props) => {
    return (
        <div>
            <h1>Saludando a { props.persona }</h1>
            <p> Edad: { props.edad }</p>
        </div>
    )
}
