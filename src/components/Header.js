import logo from '../images/google.jpg';
import AvaPopup from "./AvaPopup";
import React from 'react';

export function Header({ type, request, onComebackClick, antidouble }) {

    const [isAvaPopupOpen, setIsAvaPopupOpened] = React.useState(false);
    const [input, setInput] = React.useState('');

    const handleBurgerButtonClick = () => {
        setIsAvaPopupOpened(true);
    }

    const closeAvaPopup = () => {
        setIsAvaPopupOpened(false);
    }

    const handleInputChange = (evt) => {
        setInput(evt.target.value);
    }

    const handleComeback = () => {
        onComebackClick();
    }

    if (type === 'none') return;
    return (
        <>
            <header className='google-landing__header'>
                {
                    type === 'search' && request &&
                    <>
                        <div className='google-landing__search google-landing__search_header'>
                            <img
                                className='google-search__logo'
                                src={logo}
                                alt='Google'
                                onClick={handleComeback}
                            />
                            <input
                                className='google-landing__search-input google-landing__search-input_header'
                                id='search-input'
                                type='text'
                                name='search-input'
                                minLength='1'
                                maxLength='40'
                                required
                                value={input || `${request}`}
                                onChange={handleInputChange}
                                disabled
                            />
                            <div className='google-landing__search-pic google-landing__search-pic_header' />
                        </div>
                    </>
                }
                {
                    type === 'landing' &&
                    <>
                        <a
                            className='google-landing__header-link'
                            href='https://www.haypost.am/am/'>
                            Почта
                        </a>
                        <a className='google-landing__header-link'
                            href='https://www.google.ru/search?q=старость&tbm=isch&ved=2ahUKEwiVgcyZotH3AhV38LsIHfliDZEQ2-cCegQIABAA&oq=старость&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECAAQQ1CICViGEWDEIWgAcAB4AIABZ4gBtgaSAQM3LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cG54YpWJOvfg7_UP-cW1iAk'>
                            Картинки
                        </a>
                    </>
                }
                {!antidouble &&
                    <>
                        <div
                            className='google-landing__header-burger'
                            onClick={handleBurgerButtonClick}
                        />
                        <div />
                        <div className='google-landing__header-ava'>
                            N
                        </div>
                        <div />
                    </>
                }
            </header>
            <AvaPopup
                isOpen={isAvaPopupOpen}
                onOverlayClick={closeAvaPopup}
            />
        </>
    )
}

export default Header;