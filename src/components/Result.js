function Result({ link, heading, caption, handleHappyBirthday }) {

    return (
        <div className='result'>
            <p className='result-link'>
                {`https://www.${link}`}
            </p>
            <p
                className='result-heading'
                onClick={handleHappyBirthday}>
                {`${heading} - ${link}`}
            </p>
            <p className='result-caption'>
                {caption}
            </p>

        </div>
    )
}

export default Result;