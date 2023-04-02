import React from "react";

export default function Card(props) {
    let divider = false
    if (props.id !== 5) {
        divider = true
    } 

    return (
        <>
            <div className="card">
                <img className='card--img' src={`images/${props.img}`}/>
                <div className="card--info">
                    <h3 className="card--info--country">{`${props.country}`}<a className='card--info--icon' href={`${props.map}`} target='_blank'><img src='images/icon.png'/></a></h3>
                    <h1 className="card--info--title">{`${props.title}`}</h1>
                    <p className="card--info--date">{`${props.date}`}</p>
                    <p className="card--info--desc">{`${props.description}`}</p>
                </div>
            </div>
            {divider ? <hr /> : ''}
        </>
        
    )
}