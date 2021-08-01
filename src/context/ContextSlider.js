import { createContext } from 'react';
const ContextSlider = createContext({
    data: [],
    index: '',
    indexHover: '',
    showSmallImage: '',
    next: () => {},
    prev: () => {},
    handleShowSmallImg: () => {},
    handleHideSmallImg: () => {},
});

export default ContextSlider;
