import Letter from "./Letter";
import React from "react";

function AvaPopup({ isOpen, onOverlayClick }) {

    const letters = [
        {
            letter: 'Н',
            compliment: 'Надёжный',
            color: '#ff0018'
        },
        {
            letter: 'И',
            compliment: 'Интересный',
            color: '#ffa52c'
        },
        {
            letter: 'К',
            compliment: 'Красивый',
            color: '#ffff41'
        },
        {
            letter: 'И',
            compliment: 'Интеллигентный',
            color: '#008018'
        },
        {
            letter: 'Т',
            compliment: 'Талантливый',
            color: '#0000f9'
        },
        {
            letter: 'А',
            compliment: 'Ах какой!',
            color: '#86007d'
        }
    ]

    const handleOverlayClick = () => {
        onOverlayClick();
    }

    return (
        <>
            <div
                className={`overlay ${isOpen ? 'overlay_open' : ''}`}
                onClick={handleOverlayClick}
            />
            <ul className={`ava-popup ${isOpen ? 'ava-popup_open' : ''}`}>
                {
                    letters.map(item => (
                        <Letter
                            key={Math.random() * 1000000}
                            letter={item.letter}
                            compliment={item.compliment}
                            color={item.color}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default AvaPopup;