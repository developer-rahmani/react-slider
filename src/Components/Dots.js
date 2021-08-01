import { useContext } from 'react';
import ContextSlider from '../context/ContextSlider';

function Dots() {
    const contextSlider = useContext(ContextSlider);
    const { data, index, showSmallImage, indexHover, handleShowSmallImg, handleHideSmallImg, handleSetIndex } = contextSlider;

    return (
        <div className="dots">
            <div className="smallImg">
                <img src={data[indexHover - 1].url} alt="small img" className={showSmallImage ? 'active' : ''} />
            </div>
            {data.map((item) => (
                <span onMouseEnter={() => handleShowSmallImg(item.id)} onMouseLeave={() => handleHideSmallImg()} key={item.id} onClick={() => handleSetIndex(item.id)} className={`${item.id === index ? 'active' : ''} dot`}></span>
            ))}
        </div>
    );
}

export default Dots;
