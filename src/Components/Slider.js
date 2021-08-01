import { useEffect, useState } from 'react';

import './Slider.scss';

const Slider = () => {
    const [index, setIndex] = useState(1);
    const [indexHover, setIndexHover] = useState(1);
    const [showSmallImage, setShowSmallImage] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            url: 'https://wallpaperaccess.com/full/756632.jpg',
        },
        {
            id: 2,
            url: 'https://wallpaperaccess.com/full/559062.jpg',
        },
        {
            id: 3,
            url: 'https://wallpaperaccess.com/full/1096890.png',
        },
    ]);

    const next = () => {
        setIndex(index + 1);
        if (index === data.length) setIndex(1);
        console.log(index);
    };

    const prev = () => {
        setIndex(index - 1);
        if (index === 1) setIndex(data.length);
    };

    const changeImage = (e) => {
        if (e.deltaY === 100) next();
        if (e.deltaY === -100) prev();
    };

    // Show Small image
    const handleShowSmallImg = (item) => {
        setIndexHover(item);
        setShowSmallImage(true);
    };

    // Hide Small image
    const handleHideSmallImg = () => {
        setShowSmallImage(false);
    };

    useEffect(() => {
        setInterval(() => {
            next();
            console.log('start');
        }, 1000);
    }, []);

    return (
        <div className="sliders">
            {data.map((item) => (
                <div key={item.id} onWheel={(e) => changeImage(e)} className={`${item.id === index ? 'active' : ''} slider`}>
                    <img src={item.url} alt="pic" />
                </div>
            ))}
            <div className="btn-arrow">
                <div onClick={() => prev()} className="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <div onClick={() => next()} className="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
            <div className="dots">
                <div className="smallImg">
                    <img src={data[indexHover - 1].url} alt="small img" className={showSmallImage ? 'active' : ''} />
                </div>
                {data.map((item) => (
                    <span onMouseEnter={() => handleShowSmallImg(item.id)} onMouseLeave={() => handleHideSmallImg()} key={item.id} onClick={() => setIndex(item.id)} className={`${item.id === index ? 'active' : ''} dot`}></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
