import React from 'react';
import Result from './Result';

function GoogleSearch({ request, onLinkClick }) {

    const results = [
        {
            link: 'vk.com',
            heading: 'Вход | *INS*',
            caption: `*INS* – универсальное средство для общения и поиска друзей 
            и одноклассников, которым ежедневно пользуются десятки миллионов человек. 
            Мы хотим, чтобы друзья, однокурсники, одноклассники, *INS* и коллеги всегда...`
        },
        {
            link: 'ucheba.ru',
            heading: '*INS* им. М.В. Ломоносова, Московский...',
            caption: `Главный классический университет России, центр отечественной науки и культуры. 
            Для абитуриентов *INS* открыты 40 факультетов, здесь можно получить образование 
            по всем основным классическим направлениям. ... `
        },
        {
            link: 'wikipedia.org',
            heading: '*INS* (кинотрилогия)',
            caption: `Кинотрилогия *INS* (англ. The Lord of the *INS*; 2001—2003) — 
            снятая режиссёром Питером Джексоном серия из трёх связанных единым сюжетом кинофильмов, 
            представляющая собой экранизацию романа Дж. Р. Р. Толкина «*INS*».`
        },
        {
            link: 'github.com',
            heading: 'GitHub: Where the world builds *INS*',
            caption: `GitHub is where over 73 million developers shape the future of *INS*, together. 
            Contribute to the open source community, manage your *INS* repositories, review code like a pro, 
            track bugs and features, power your CI/CD and DevOps workflows, and secure *INS* before you commit it.`
        },
        {
            link: 'python.org',
            heading: 'The official home of the *INS* Programming Language',
            caption: `The core of extensible programming is defining functions. 
            *INS* allows mandatory and optional arguments, keyword arguments, 
            and even arbitrary argument lists.`
        },
        {
            link: 'specpryanosti.ru',
            heading: '*INS* приправа с универсальным составом из трав...',
            caption: `*INS* придает пикантности и вторых блюдам, гарнирам и овощным салатам. 
            С тех пор приправа *INS* заняла прочное место на полках российских магазинов. 
            Она была создана в 1960 году и за это время ее состав практически... `
        },
    ]

    const replacer = (str) => {
        return str.replaceAll('*INS*', request)
    }

    const handleHappyBirthday = () => {
        onLinkClick();
    }

    return (
        <>
            {
                request &&
                <>
                    <div className='google-search'>
                        <p className='google-search__number-of-results'>
                            По запросу <b>{request}</b> найдено 6 результатов (0,25 сек.)
                        </p>

                        <div className='results'>
                            {
                                results.map(item => (
                                    <Result
                                        link={item.link}
                                        heading={replacer(item.heading)}
                                        caption={replacer(item.caption)}
                                        key={Math.random() * 1000000}
                                        handleHappyBirthday={handleHappyBirthday} />
                                ))
                            }
                        </div>

                    </div>
                </>
            }
        </>
    )
}

export default GoogleSearch;