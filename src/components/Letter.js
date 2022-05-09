import React from "react";

function Letter({ letter, compliment, color }) {

    return (
        <li className='letter'>
            <div
                className='letter-pic'
                style={{ backgroundColor: color }}>
                {letter}
            </div>
            <p className='letter-word'>
                {compliment}
            </p>
        </li>
    )
}

export default Letter;