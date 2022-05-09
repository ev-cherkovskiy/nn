import logo from '../images/google.jpg';
import React from 'react';
import LuckyPopup from './LuckyPopup';

function GoogleLanding({ onSubmit, onComebackClick }) {

    React.useEffect(() => {
        onComebackClick();
    }, [])

    const [input, setInput] = React.useState('');
    const [isLuckyPopupOpen, setIsLuckyPopupOpen] = React.useState(false);

    const handleLuckyPopupOpen = () => {
        setIsLuckyPopupOpen(true);
    }

    const handleLuckyPopupClose = () => {
        setIsLuckyPopupOpen(false);
    }

    const handleInputChange = (evt) => {
        setInput(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (input.length) {
            onSubmit(input);
            console.log(`request ${input} is submitted`);
        } else {
            console.log('the input length is 0')
        }
    }

    return (
        <div className='google-landing'>
            <img
                className='google-landing__logo'
                src={logo}
                alt='Google'
            />

            <div className='google-landing__search'>
                <form
                    className="form"
                    name="form-search"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <input
                        className='google-landing__search-input'
                        id='search-input'
                        type='text'
                        name='search-input'
                        minLength='1'
                        maxLength='40'
                        required
                        value={input || ''}
                        onChange={handleInputChange}
                    />
                    <div className='google-landing__search-pic' />


                    <div className='google-landing__button-bar'>
                        <button
                            className='google-landing__button'
                            type='submit' >
                            Поиск в Google
                        </button>
                        <button
                            className='google-landing__button'
                            type='button'
                            onClick={handleLuckyPopupOpen}>
                            Мне повезёт!
                        </button>
                    </div>
                </form>
            </div>
            <LuckyPopup
                isOpen={isLuckyPopupOpen}
                onOverlayClick={handleLuckyPopupClose}
            />
        </div>
    )
}

export default GoogleLanding;