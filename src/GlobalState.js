import React, { useState } from 'react';
import ContextSlider from './context/ContextSlider';

function GlobalState({ children }) {
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

    const [index, setIndex] = useState(1);
    const [indexHover, setIndexHover] = useState(1);
    const [showSmallImage, setShowSmallImage] = useState(false);

    const handleSetIndex = (index) => {
        setIndex(index);
    };

    const next = () => {
        setIndex(index + 1);
        if (index === data.length) setIndex(1);
    };

    const prev = () => {
        setIndex(index - 1);
        if (index === 1) setIndex(data.length);
    };

    const handleShowSmallImg = (item) => {
        setIndexHover(item);
        setShowSmallImage(true);
    };

    const handleHideSmallImg = () => {
        setShowSmallImage(false);
    };

    const value = {
        data,
        index,
        indexHover,
        showSmallImage,
        next: () => next(),
        prev: () => prev(),
        handleShowSmallImg: (item) => handleShowSmallImg(item),
        handleHideSmallImg: () => handleHideSmallImg(),
        handleSetIndex: (index) => handleSetIndex(index),
    };

    return <ContextSlider.Provider value={value}>{children}</ContextSlider.Provider>;
}

export default GlobalState;
