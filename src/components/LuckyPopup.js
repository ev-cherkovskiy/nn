function LuckyPopup({ isOpen, onOverlayClick }) {

    const handleOverlayClick = () => {
        onOverlayClick();
    }

    return (
        <>
            <div
                className={`overlay ${isOpen ? 'overlay_open' : ''}`}
                onClick={handleOverlayClick}
            />
            <div className={`lucky-popup ${isOpen ? 'lucky-popup_open' : ''}`}>
                <p className='lucky-popup-size'>ОБЯЗАТЕЛЬНО!</p>
            </div>
        </>

    )
}

export default LuckyPopup;