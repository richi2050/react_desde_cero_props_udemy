import React from 'react'

export const Comentario = (props) => {
    return (
        <div className="media">
            <img src={ props.urlImage } className='mr-3' alt=""/>
            <div className="media-body">
                <h5 className="mt-0"> {props.persona}</h5>
                {props.texto}
            </div>
        </div>
    )
}
